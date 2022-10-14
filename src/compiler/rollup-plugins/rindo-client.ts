import * as d from '../../declarations';
import { Plugin } from 'rollup';


export function rindoClientPlugin(config: d.Config): Plugin {
  return {
    name: 'rindoClientEntryPointPlugin',
    resolveId(id: string) {
      if (id === '@rindo/core/platform') {
        return {
          id: config.sys.path.join(config.sys.compiler.distDir, 'client', 'index.mjs'),
        };
      }
      return null;
    },
    resolveImportMeta(prop, {format}) {
      if (prop === 'url' && format === 'es') {
        return '""';
      }
      return null;
    }
  };
}
