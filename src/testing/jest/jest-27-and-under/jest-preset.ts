import type { Config } from '@jest/types';
import { join } from 'path';

/**
 * The path's declared below are relative. Specifically, they are relative to the location of this file after
 * compilation of the Rindo compiler has completed.
 */
const testingDir = __dirname;
const rootDir = join(testingDir, '..');
const internalDir = join(rootDir, 'internal');

// NOTE: if you change this, also change compiler/transpile.ts. Search for 'mod_extensions_jest' to find other comments
// like it.
const moduleExtensions = ['ts', 'tsx', 'js', 'mjs', 'jsx'];
const moduleExtensionRegexp = '(' + moduleExtensions.join('|') + ')';

const preset: Config.InitialOptions = {
  moduleFileExtensions: [...moduleExtensions, 'json', 'd.ts'],
  moduleNameMapper: {
    '^@rindo/core/cli$': join(rootDir, 'cli', 'index.js'),
    '^@rindo/core/compiler$': join(rootDir, 'compiler', 'rindo.js'),
    '^@rindo/core/internal$': join(internalDir, 'testing', 'index.js'),
    '^@rindo/core/internal/app-data$': join(internalDir, 'app-data', 'index.cjs'),
    '^@rindo/core/internal/app-globals$': join(internalDir, 'app-globals', 'index.js'),
    '^@rindo/core/internal/testing$': join(internalDir, 'testing', 'index.js'),
    '^@rindo/core/mock-doc$': join(rootDir, 'mock-doc', 'index.cjs'),
    '^@rindo/core/sys$': join(rootDir, 'sys', 'node', 'index.js'),
    '^@rindo/core/testing$': join(testingDir, 'index.js'),
    '^@rindo/core$': join(internalDir, 'testing', 'index.js'),
  },
  setupFilesAfterEnv: [join(testingDir, 'jest-setuptestframework.js')],
  testEnvironment: join(testingDir, 'jest-environment.js'),
  testPathIgnorePatterns: ['/.cache', '/.rindo', '/.vscode', '/dist', '/node_modules', '/www'],
  testRegex: '(/__tests__/.*|\\.?(test|spec))\\.' + moduleExtensionRegexp + '$',
  transform: {
    '^.+\\.(ts|tsx|jsx|css|mjs)$': join(testingDir, 'jest-preprocessor.js'),
  },
  watchPathIgnorePatterns: ['^.+\\.d\\.ts$'],
};

export { preset };
