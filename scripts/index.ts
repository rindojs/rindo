import { join } from 'path';

import * as build from './build';

const rindoProjectRoot = join(__dirname, '..', '..');
const args = process.argv.slice(2);
build.run(rindoProjectRoot, args);
