import path from 'path';

export { compile } from './compile';
export { getMinifyScriptOptions } from './compile-options';
export { path };
export { rindoRollupPlugin as rollupPlugin } from '../rollup-plugins/rindo-public-plugin';

export const version = '0.0.0-rindo-dev';

export const dependencies = [
  {
    name: 'typescript',
    version: '__VERSION:TYPESCRIPT__',
    url: 'https://cdn.jsdelivr.net/npm/typescript@__VERSION:TYPESCRIPT__/lib/typescript.js'
  }
];
