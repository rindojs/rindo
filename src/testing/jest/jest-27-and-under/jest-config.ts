import type { Config } from '@jest/types';
import { BOOLEAN_CLI_FLAGS } from '@rindo/core/cli';
import type * as d from '@rindo/core/internal';
import { isString } from '@utils';

import { Jest27Rindo } from './jest-facade';

/**
 * Helper function for retrieving legacy Jest options. These options have been provided as defaults to Rindo users
 * by Jest + yargs for all users using Jest versions 24 through 26 (inclusively). Between Jest v26 and v27, a few
 * changes occurred:
 * 1. Jest CLI options were no longer exported, with no means of retrieving it without breaking package encapsulation
 * 2. the location of default values moved internally in Jest
 * As a result, this list could no longer be autogenerated. To ensure backwards compatibility between versions Jest 24
 * through 27 (inclusive), recreate the list manually to be used in Jest argument generation. This will be removed in a
 * future version of Rindo.
 *
 * @returns a list of Jest legacy options generated for all users of Rindo+Jest testing
 */
function getLegacyJestOptions(): Record<string, boolean | number | string> {
  return {
    detectLeaks: false,
    'detect-leaks': false,
    detectOpenHandles: false,
    'detect-open-handles': false,
    errorOnDeprecated: false,
    'error-on-deprecated': false,
    listTests: false,
    'list-tests': false,
    maxConcurrency: 5,
    'max-concurrency': 5,
    notifyMode: 'failure-change',
    'notify-mode': 'failure-change',
    passWithNoTests: false,
    'pass-with-no-tests': false,
    runTestsByPath: false,
    'run-tests-by-path': false,
    testLocationInResults: false,
    'test-location-in-results': false,
  };
}

/**
 * Builds the `argv` to be used when programmatically invoking the Jest CLI
 * @param config the Rindo config to use while generating Jest CLI arguments
 * @returns the arguments to pass to the Jest CLI, wrapped in an object
 */
export function buildJestArgv(config: d.ValidatedConfig): Config.Argv {
  const yargs = require('yargs');

  const knownArgs = config.flags.knownArgs.slice();

  if (!knownArgs.some((a) => a.startsWith('--max-workers') || a.startsWith('--maxWorkers'))) {
    knownArgs.push(`--max-workers=${config.maxConcurrentWorkers}`);
  }

  if (config.flags.devtools) {
    knownArgs.push('--runInBand');
  }

  // we combine the modified args and the unknown args here and declare the
  // result read only, providing some type system-level assurance that we won't
  // mutate it after this point.
  //
  // We want that assurance because Jest likes to have any filepath match
  // patterns at the end of the args it receives. Those args are going to be
  // found in our `unknownArgs`, so while we want to do some stuff in this
  // function that adds to `knownArgs` we need a guarantee that all of the
  // `unknownArgs` are _after_ all the `knownArgs` in the array we end up
  // generating the Jest configuration from.
  const args: ReadonlyArray<string> = [...knownArgs, ...config.flags.unknownArgs];

  config.logger.info(config.logger.magenta(`jest args: ${args.join(' ')}`));

  let jestArgv = yargs(args).argv as Config.Argv;
  jestArgv = { ...getLegacyJestOptions(), ...jestArgv };
  jestArgv.config = buildJestConfig(config);

  if (typeof jestArgv.maxWorkers === 'string') {
    try {
      jestArgv.maxWorkers = parseInt(jestArgv.maxWorkers, 10);
    } catch (e) {}
  }

  if (typeof jestArgv.ci === 'string') {
    jestArgv.ci = jestArgv.ci === 'true' || jestArgv.ci === '';
  }

  for (const flag of BOOLEAN_CLI_FLAGS) {
    if (typeof jestArgv[flag] === 'string') {
      jestArgv[flag] = jestArgv[flag] === 'true';
    }
  }

  return jestArgv;
}

/**
 * Generate a Jest run configuration to be used as a part of the `argv` passed to the Jest CLI when it is invoked
 * programmatically
 * @param config the Rindo config to use while generating Jest CLI arguments
 * @returns the Jest Config to attach to the `argv` argument
 */
export function buildJestConfig(config: d.ValidatedConfig): string {
  const rindoConfigTesting = config.testing;
  const jestDefaults: Config.DefaultOptions = require('jest-config').defaults;

  const validJestConfigKeys = Object.keys(jestDefaults);

  const jestConfig: d.JestConfig = {};

  Object.keys(rindoConfigTesting).forEach((key) => {
    if (validJestConfigKeys.includes(key)) {
      (jestConfig as any)[key] = (rindoConfigTesting as any)[key];
    }
  });

  jestConfig.rootDir = config.rootDir;

  if (isString(rindoConfigTesting.collectCoverage)) {
    jestConfig.collectCoverage = rindoConfigTesting.collectCoverage;
  }
  if (Array.isArray(rindoConfigTesting.collectCoverageFrom)) {
    jestConfig.collectCoverageFrom = rindoConfigTesting.collectCoverageFrom;
  }
  if (isString(rindoConfigTesting.coverageDirectory)) {
    jestConfig.coverageDirectory = rindoConfigTesting.coverageDirectory;
  }
  if (rindoConfigTesting.coverageThreshold) {
    jestConfig.coverageThreshold = rindoConfigTesting.coverageThreshold;
  }
  if (isString(rindoConfigTesting.globalSetup)) {
    jestConfig.globalSetup = rindoConfigTesting.globalSetup;
  }
  if (isString(rindoConfigTesting.globalTeardown)) {
    jestConfig.globalTeardown = rindoConfigTesting.globalTeardown;
  }
  if (isString(rindoConfigTesting.preset)) {
    jestConfig.preset = rindoConfigTesting.preset;
  }
  if (rindoConfigTesting.projects) {
    jestConfig.projects = rindoConfigTesting.projects;
  }
  if (Array.isArray(rindoConfigTesting.reporters)) {
    jestConfig.reporters = rindoConfigTesting.reporters;
  }
  if (isString(rindoConfigTesting.testResultsProcessor)) {
    jestConfig.testResultsProcessor = rindoConfigTesting.testResultsProcessor;
  }
  if (rindoConfigTesting.transform) {
    jestConfig.transform = rindoConfigTesting.transform;
  }
  if (rindoConfigTesting.verbose) {
    jestConfig.verbose = rindoConfigTesting.verbose;
  }
  if (typeof rindoConfigTesting.bail !== 'undefined') {
    jestConfig.bail =
      typeof rindoConfigTesting.bail === 'number' ? rindoConfigTesting.bail : rindoConfigTesting.bail ? 1 : 0;
  }
  if (rindoConfigTesting.prettierPath) {
    jestConfig.prettierPath = rindoConfigTesting.prettierPath;
  }
  if (rindoConfigTesting.restoreMocks) {
    jestConfig.restoreMocks = rindoConfigTesting.restoreMocks;
  }

  jestConfig.testRunner = new Jest27Rindo().getDefaultJestRunner();

  return JSON.stringify(jestConfig);
}

export function getProjectListFromCLIArgs(config: d.ValidatedConfig, argv: Config.Argv): Config.Path[] {
  const projects = argv.projects ? argv.projects : [];

  projects.push(config.rootDir);

  return projects;
}
