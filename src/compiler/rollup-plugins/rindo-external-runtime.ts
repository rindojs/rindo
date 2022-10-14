import { Plugin } from 'rollup';

export function rindoExternalRuntimePlugin(externalRuntime: string): Plugin {
  return {
    name: 'rindoExternalRuntimePlugin',
    resolveId(id: string) {
      if (externalRuntime !== undefined && id === '@rindo/core') {
        return { id: externalRuntime, external: true, moduleSideEffects: false };
      }
      return null;
    }
  };
}
