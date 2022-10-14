import * as d from '../../declarations';
import { Plugin } from 'rollup';


export function rindoHydratePlugin(config: d.Config): Plugin {
  return {
    name: 'rindo-hydrate-plugin',
    resolveId(id: string) {
      if (id === '@rindo/core/platform') {
        return {
          id: config.sys.path.join(config.sys.compiler.distDir, 'hydrate', 'platform.mjs'),
        };
      }
      if (id === '@rindo/core/runtime') {
        return {
          id: config.sys.path.join(config.sys.compiler.distDir, 'runtime', 'index.mjs'),
        };
      }
      if (id === '@rindo/core/utils') {
        return {
          id: config.sys.path.join(config.sys.compiler.distDir, 'utils', 'index.mjs'),
        };
      }
      if (id === '@rindo/core') {
        return {
          id: config.sys.path.join(config.sys.compiler.distDir, 'hydrate', 'platform.mjs'),
        };
      }
      return null;
    }
  };
}
