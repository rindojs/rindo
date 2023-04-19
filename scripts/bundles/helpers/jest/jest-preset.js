const path = require('path');
const testingDir = __dirname;
const rootDir = path.join(testingDir, '..');
const internalDir = path.join(rootDir, 'internal');

// NOTE: if you change this, also change compiler/transpile.ts
const moduleExtensions = ['ts', 'tsx', 'js', 'mjs', 'jsx'];
const moduleExtensionRegexp = '(' + moduleExtensions.join('|') + ')';

module.exports = {
  moduleFileExtensions: [...moduleExtensions, 'json', 'd.ts'],
  moduleNameMapper: {
    '^@rindo/core/cli$': path.join(rootDir, 'cli', 'index.js'),
    '^@rindo/core/compiler$': path.join(rootDir, 'compiler', 'rindo.js'),
    '^@rindo/core/internal$': path.join(internalDir, 'testing', 'index.js'),
    '^@rindo/core/internal/app-data$': path.join(internalDir, 'app-data', 'index.cjs'),
    '^@rindo/core/internal/app-globals$': path.join(internalDir, 'app-globals', 'index.js'),
    '^@rindo/core/internal/testing$': path.join(internalDir, 'testing', 'index.js'),
    '^@rindo/core/mock-doc$': path.join(rootDir, 'mock-doc', 'index.cjs'),
    '^@rindo/core/sys$': path.join(rootDir, 'sys', 'node', 'index.js'),
    '^@rindo/core/testing$': path.join(testingDir, 'index.js'),
    '^@rindo/core$': path.join(internalDir, 'testing', 'index.js'),
  },
  setupFilesAfterEnv: [path.join(testingDir, 'jest-setuptestframework.js')],
  testEnvironment: path.join(testingDir, 'jest-environment.js'),
  testPathIgnorePatterns: ['/.cache', '/.rindo', '/.vscode', '/dist', '/node_modules', '/www'],
  testRegex: '(/__tests__/.*|\\.?(test|spec))\\.' + moduleExtensionRegexp + '$',
  transform: {
    '^.+\\.(ts|tsx|jsx|css)$': path.join(testingDir, 'jest-preprocessor.js'),
  },
  watchPathIgnorePatterns: ['^.+\\.d\\.ts$'],
};
