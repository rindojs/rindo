import * as d from '../../declarations';
import { parseRindoImportPath } from '../transformers/rindo-import-path';
import { compile } from './compile';


export const createCompiler = () => {
  const rindoResolved = new Map<string, d.ResolvedRindoData>();
  const diagnostics: d.Diagnostic[] = [];

  const defaultOpts: d.CompileOptions = {};

  const reset = () => {
    rindoResolved.clear();
    diagnostics.length = 0;
  };

  const getResolvedData = (id: string) => {
    return rindoResolved.get(id);
  };

  const setResolvedData = (id: string, r: d.ResolvedRindoData) => {
    return rindoResolved.set(id, r);
  };

  return {

    resolveId(importee: string, importer: string) {
      // import Css from 'rindo?tag=cmp-a&scopeId=sc-cmp-a-md&mode=md!./filepath.css
      const r = parseRindoImportPath(importee, importer);
      if (r != null) {
        setResolvedData(r.resolvedId, r);
        return r;
      }
      return null;
    },

    getLoadPath(filePath: string) {
      if (typeof filePath === 'string') {
        return filePath.split('?')[0];
      }
      return null;
    },

    async transform(code: string, filePath: string, opts?: d.CompileOptions) {
      const r = getResolvedData(filePath);
      if (r != null) {
        const compileOpts = Object.assign({}, defaultOpts, opts);
        compileOpts.type = r.type;
        compileOpts.file = r.resolvedFilePath;
        compileOpts.data = r.data;

        const results = await compile(code, compileOpts);

        return {
          code: results.code,
          map: results.map,
          diagnostics: results.diagnostics
        };
      }
      return null;
    },

    writeBuild() {
      reset();
    },

    reset,
    getResolvedData,
    setResolvedData,
  };
};
