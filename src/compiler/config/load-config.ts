import { createNodeSys } from '@sys-api-node';
import { buildError, catchError, hasError, isString, normalizePath } from '@utils';
import { dirname } from 'path';

import type { Diagnostic, LoadConfigInit, LoadConfigResults, UnvalidatedConfig } from '../../declarations';
import { nodeRequire } from '../sys/node-require';
import { validateTsConfig } from '../sys/typescript/typescript-config';
import { validateConfig } from './validate-config';

/**
 * Load and validate a configuration to use throughout the lifetime of any Rindo task (build, test, etc.).
 *
 * Users can provide configurations multiple ways simultaneously:
 * - as an object of the `init` argument to this function
 * - through a path to a configuration file that exists on disk
 *
 * In the case of both being present, the two configurations will be merged. The fields of the former will take precedence
 * over the fields of the latter.
 *
 * @param init the initial configuration provided by the user (or generated by Rindo) used to bootstrap configuration
 * loading and validation
 * @returns the results of loading a configuration
 * @public
 */
export const loadConfig = async (init: LoadConfigInit = {}): Promise<LoadConfigResults> => {
  const results: LoadConfigResults = {
    config: null,
    diagnostics: [],
    tsconfig: {
      path: null,
      compilerOptions: null,
      files: null,
      include: null,
      exclude: null,
      extends: null,
    },
  };

  const unknownConfig: UnvalidatedConfig = {};

  try {
    const config = init.config || {};
    let configPath = init.configPath || config.configPath;

    // Pull the {@link CompilerSystem} out of the initialization object, or create one if it does not exist.
    // This entity is needed to load the project's configuration (and therefore needs to be created before it can be
    // attached to a configuration entity, validated or otherwise)
    const sys = init.sys ?? createNodeSys();

    const loadedConfigFile = await loadConfigFile(results.diagnostics, configPath);
    if (hasError(results.diagnostics)) {
      return results;
    }

    if (loadedConfigFile !== null) {
      // merge the user's config object into their loaded config file
      configPath = loadedConfigFile.configPath;
      unknownConfig.config = { ...loadedConfigFile, ...config };
      unknownConfig.config.configPath = configPath;
      unknownConfig.config.rootDir =
        typeof config.rootDir === 'string' ? config.rootDir : normalizePath(dirname(configPath));
    } else {
      // no rindo.config.ts or .js file, which is fine
      unknownConfig.config = { ...config };
      unknownConfig.config.configPath = null;
      unknownConfig.config.rootDir = normalizePath(sys.getCurrentDirectory());
    }

    unknownConfig.config.sys = sys;

    const validated = validateConfig(unknownConfig.config, init);
    results.diagnostics.push(...validated.diagnostics);
    if (hasError(results.diagnostics)) {
      return results;
    }

    results.config = validated.config;

    if (!hasError(results.diagnostics)) {
      const tsConfigResults = await validateTsConfig(results.config, sys, init);
      results.diagnostics.push(...tsConfigResults.diagnostics);

      results.config.tsconfig = tsConfigResults.path;
      results.config.tsCompilerOptions = tsConfigResults.compilerOptions;

      results.tsconfig.path = tsConfigResults.path;
      results.tsconfig.compilerOptions = JSON.parse(JSON.stringify(tsConfigResults.compilerOptions));
      results.tsconfig.files = tsConfigResults.files;
      results.tsconfig.include = tsConfigResults.include;
      results.tsconfig.exclude = tsConfigResults.exclude;
      results.tsconfig.extends = tsConfigResults.extends;
    }
  } catch (e: any) {
    catchError(results.diagnostics, e);
  }

  return results;
};

/**
 * Load a Rindo configuration file from disk
 *
 * @param diagnostics a series of diagnostics used to track errors & warnings
 * throughout the loading process. Entries may be added to this list in the
 * event of an error.
 * @param configPath the path to the configuration file to load
 * @returns an unvalidated configuration. In the event of an error, additional
 * diagnostics may be pushed to the provided `diagnostics` argument and `null`
 * will be returned.
 */
const loadConfigFile = async (diagnostics: Diagnostic[], configPath: string): Promise<UnvalidatedConfig | null> => {
  let config: UnvalidatedConfig | null = null;

  if (isString(configPath)) {
    // the passed in config was a string, so it's probably a path to the config we need to load
    const configFileData = await evaluateConfigFile(diagnostics, configPath);
    if (hasError(diagnostics)) {
      return config;
    }

    if (!configFileData.config) {
      const err = buildError(diagnostics);
      err.messageText = `Invalid Rindo configuration file "${configPath}". Missing "config" property.`;
      err.absFilePath = configPath;
      return config;
    }
    config = configFileData.config;
    config.configPath = normalizePath(configPath);
  }

  return config;
};

/**
 * Load the configuration file, based on the environment that Rindo is being run in
 *
 * @param diagnostics a series of diagnostics used to track errors & warnings
 * throughout the loading process. Entries may be added to this list in the
 * event of an error.
 * @param configFilePath the path to the configuration file to load
 * @returns an unvalidated configuration. In the event of an error, additional
 * diagnostics may be pushed to the provided `diagnostics` argument and `null`
 * will be returned.
 */
const evaluateConfigFile = async (
  diagnostics: Diagnostic[],
  configFilePath: string,
): Promise<{ config?: UnvalidatedConfig } | null> => {
  let configFileData: { config?: UnvalidatedConfig } | null = null;

  try {
    const results = nodeRequire(configFilePath);
    diagnostics.push(...results.diagnostics);
    configFileData = results.module;
  } catch (e: any) {
    catchError(diagnostics, e);
  }

  return configFileData;
};
