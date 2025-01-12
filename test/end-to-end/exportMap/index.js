const assert = require('node:assert');

const { version } = require('@rindo/core/compiler');
const { run } = require('@rindo/core/cli');
const { h } = require('@rindo/core');
const { MockDocument } = require('@rindo/core/mock-doc');
const appData = require('@rindo/core/internal/app-data');
const { createNodeLogger } = require('@rindo/core/sys/node');
const { createTesting } = require('@rindo/core/testing');

assert(typeof version === 'string');
assert(typeof run, 'function');
assert(typeof h === 'function');
assert(typeof MockDocument === 'function');
assert(Object.keys(appData).length === 3);
assert(typeof createNodeLogger === 'function');
assert(typeof createTesting === 'function');

console.log(`🎉 All CJS imports successfully resolved!`);
console.log('✅ passed!\n');
