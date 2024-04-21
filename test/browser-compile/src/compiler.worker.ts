import type RindoCompiler from '@rindo/core/compiler';

(self as any).importScripts('/@rindo/core/compiler/rindo.js');

const rindo: typeof RindoCompiler = (self as any).rindo;

export const transpileWorker = (code: string, opts: RindoCompiler.TranspileOptions) => {
  return rindo.transpile(code, opts);
};
