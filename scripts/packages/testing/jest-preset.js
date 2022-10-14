const path = require('path');
const testingDir = __dirname;
const rootDir = path.join(testingDir, '..');
const distDir = path.join(rootDir, 'dist');

module.exports = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json'
  ],
  moduleNameMapper: {
    "^@rindo/core/build-conditionals$": path.join(distDir, 'testing', 'build-conditionals'),
    "^@rindo/core/cli$": path.join(distDir, 'cli'),
    "^@rindo/core/compiler$": path.join(rootDir, 'compiler'),
    "^@rindo/core/internal$": path.join(rootDir, 'internal'),
    "^@rindo/core/mock-doc$": path.join(distDir, 'mock-doc'),
    "^@rindo/core/platform$": path.join(distDir, 'testing', 'platform'),
    "^@rindo/core/sys$": path.join(distDir, 'sys', 'node'),
    "^@rindo/core/testing$": path.join(distDir, 'testing'),
    "^@rindo/core/utils$": path.join(distDir, 'utils'),
    "^@rindo/core$": path.join(distDir, 'testing', 'core')
  },
  setupFilesAfterEnv: [path.join(testingDir, 'jest-setuptestframework.js')],
  testEnvironment: path.join(testingDir, 'jest-environment.js'),
  testPathIgnorePatterns: [
    '/.rindo',
    '/.vscode',
    '/dist',
    '/node_modules',
    '/www'
  ],
  maxConcurrency: 1,
  testRegex: '(/__tests__/.*|\\.?(test|spec))\\.(tsx?|ts?|jsx?|js?)$',
  transform: {
    '^.+\\.(ts|tsx|jsx)$': path.join(testingDir, 'jest-preprocessor.js')
  }
};
