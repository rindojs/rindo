import type { CompilerSystem } from '../declarations';

export const loadCoreCompiler = async (sys: CompilerSystem): Promise<CoreCompiler> => {
  const compilerMod = await sys.dynamicImport!(sys.getCompilerExecutingPath());

  // TODO(RINDO-1018): Remove Rollup Infrastructure
  if ((globalThis as any).rindo) {
    return (globalThis as any).rindo;
  } else {
    (globalThis as any).rindo = compilerMod;
    return compilerMod;
  }
};

export type CoreCompiler = typeof import('@rindo/core/compiler');
