import * as d from '@rindo/core/internal';
import type { Config } from '@jest/types';
import { isString } from '@utils';

export function buildJestArgv(config: d.Config) {
  const yargs = require('yargs');

  const args = [...config.flags.unknownArgs.slice(), ...config.flags.knownArgs.slice()];

  if (!args.some(a => a.startsWith('--max-workers') || a.startsWith('--maxWorkers'))) {
    args.push(`--max-workers=${config.maxConcurrentWorkers}`);
  }

  if (config.flags.devtools) {
    args.push('--runInBand');
  }

  config.logger.info(config.logger.magenta(`jest args: ${args.join(' ')}`));

  const { options } = require('jest-cli/build/cli/args');
  const jestArgv = yargs(args).options(options).argv as Config.Argv;
  jestArgv.config = buildJestConfig(config);

  if (typeof jestArgv.maxWorkers === 'string') {
    try {
      jestArgv.maxWorkers = parseInt(jestArgv.maxWorkers, 10);
    } catch (e) {}
  }

  if (typeof jestArgv.ci === 'string') {
    jestArgv.ci = jestArgv.ci === 'true' || jestArgv.ci === '';
  }

  return jestArgv;
}

export function buildJestConfig(config: d.Config) {
  const rindoConfigTesting = config.testing;
  const jestDefaults: Config.DefaultOptions = require('jest-config').defaults;

  const validJestConfigKeys = Object.keys(jestDefaults);

  const jestConfig: d.JestConfig = {};

  Object.keys(rindoConfigTesting).forEach(key => {
    if (validJestConfigKeys.includes(key)) {
      (jestConfig as any)[key] = (rindoConfigTesting as any)[key];
    }
  });

  // https://github.com/facebook/jest/commit/8d3ddd5db440088f4488fbb4aaffe8ae4f5401e5#diff-7677b25b723832a937d598022186bd20

  jestConfig.rootDir = config.rootDir;

  if (isString(rindoConfigTesting.collectCoverage)) {
    jestConfig.collectCoverage = rindoConfigTesting.collectCoverage;
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

  return JSON.stringify(jestConfig);
}

export function getProjectListFromCLIArgs(config: d.Config, argv: Config.Argv): Config.Path[] {
  const projects = argv.projects ? argv.projects : [];

  projects.push(config.rootDir);

  return projects;
}
