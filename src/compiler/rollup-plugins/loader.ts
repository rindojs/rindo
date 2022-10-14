import { Plugin } from 'rollup';


export function loaderPlugin(entries: {[id: string]: string}): Plugin {
  return {
    name: 'rindoLoaderPlugin',
    resolveId(id: string) {
      if (id in entries) {
        return {
          id,
        };
      }
      return null;
    },

    load(id: string) {
      if (id in entries) {
        return entries[id];
      }
      return null;
    }
  };
}
