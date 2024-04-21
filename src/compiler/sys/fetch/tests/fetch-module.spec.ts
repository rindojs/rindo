import { getRindoModuleUrl, skipFilePathFetch } from '../fetch-utils';

describe('fetch module', () => {
  let compilerExe: string;

  beforeEach(() => {
    compilerExe = 'http://localhost:3333/@rindo/core/compiler/rindo.js';
  });

  describe('getRindoModulePath', () => {
    it('cdn w/ version w/out node_module prefix', () => {
      compilerExe = 'https://rindojs-cdn.web.app/npm/@rindo/core@1.2.3/compiler/rindo.js';
      const p = 'internal/client/index.mjs';
      const m = getRindoModuleUrl(compilerExe, p);
      expect(m).toBe('https://rindojs-cdn.web.app/npm/@rindo/core@1.2.3/internal/client/index.mjs');
    });

    it('cdn w/ version', () => {
      compilerExe = 'https://cdn.jsdelivr.net/npm/@rindo/core@1.2.3/compiler/rindo.js';
      const p = '/some/path/node_modules/@rindo/core/package.json';
      const m = getRindoModuleUrl(compilerExe, p);
      expect(m).toBe('https://cdn.jsdelivr.net/npm/@rindo/core@1.2.3/package.json');
    });

    it('cdn w/out version', () => {
      compilerExe = 'https://cdn.jsdelivr.net/npm/@rindo/core/compiler/rindo.js';
      const p = '/node_modules/@rindo/core/internal/client/index.mjs';
      const m = getRindoModuleUrl(compilerExe, p);
      expect(m).toBe('https://cdn.jsdelivr.net/npm/@rindo/core/internal/client/index.mjs');
    });

    it('local w/out version w/out node_module prefix', () => {
      const p = 'package.json';
      const m = getRindoModuleUrl(compilerExe, p);
      expect(m).toBe('http://localhost:3333/@rindo/core/package.json');
    });

    it('local w/out version', () => {
      const p = '/node_modules/@rindo/core/package.json';
      const m = getRindoModuleUrl(compilerExe, p);
      expect(m).toBe('http://localhost:3333/@rindo/core/package.json');
    });
  });
});

describe('skipFilePathFetch', () => {
  it('skip for known bogus node_module paths', () => {
    expect(skipFilePathFetch('/node_modules/index.mjs')).toBe(true);
    expect(skipFilePathFetch('/node_modules/lodash.js')).toBe(true);
    expect(skipFilePathFetch('/node_modules/lodash.md')).toBe(true);
    expect(skipFilePathFetch('/node_modules/lodash.json')).toBe(true);
    expect(skipFilePathFetch('/asdf/gadsf/aessd/gaes/node_modules/lodash.js')).toBe(true);
    expect(skipFilePathFetch('/asdf/node_modules/whatever/lodash.js')).toBe(false);
  });

  it('skip for ts and tsx', () => {
    expect(skipFilePathFetch('whatever.ts')).toBe(true);
    expect(skipFilePathFetch('whatever.tsx')).toBe(true);
  });
});
