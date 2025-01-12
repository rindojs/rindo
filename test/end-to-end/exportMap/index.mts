import assert from 'node:assert';

import { run } from '@rindo/core/cli';
import { version } from '@rindo/core/compiler';
import { MockDocument } from '@rindo/core/mock-doc';
import type { BuildConditionals } from '@rindo/core/internal';
import { BUILD } from '@rindo/core/internal/app-data';
import { createNodeLogger } from '@rindo/core/sys/node';
import { createTesting } from '@rindo/core/testing';

assert(typeof version === 'string');
version.slice();
BUILD as BuildConditionals;

assert(typeof run, 'function');
run.call;

assert(typeof MockDocument === 'function');
assert(typeof BUILD !== 'undefined');
assert(typeof createNodeLogger === 'function');
assert(typeof createTesting === 'function');

console.log(`🎉 All ESM imports successfully resolved!`);
console.log('✅ passed!\n');
