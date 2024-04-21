import { mockValidatedConfig } from '@rindo/core/testing';

import { createSystem } from '../../../compiler/sys/rindo-sys';
import type * as d from '../../../declarations';
import { getHydratedFlagHead, getRindoInternalModule } from '../core-resolve-plugin';

describe('core resolve plugin', () => {
  const config: d.ValidatedConfig = mockValidatedConfig({
    rootDir: '/',
    sys: createSystem(),
  });

  it('http localhost with port url path', () => {
    const compilerExe = 'http://localhost:3333/@rindo/core/compiler/rindo.js?v=1.2.3';
    const internalModule = 'hydrate/index.js';
    const m = getRindoInternalModule(config, compilerExe, internalModule);
    expect(m).toBe('/node_modules/@rindo/core/internal/hydrate/index.js');
  });

  it('node path', () => {
    const compilerExe = '/Users/me/node_modules/rindo/compiler/rindo.js';
    const internalModule = 'client/index.js';
    const m = getRindoInternalModule(config, compilerExe, internalModule);
    expect(m).toBe('/Users/me/node_modules/rindo/internal/client/index.js');
  });

  it('should not set initialValue', () => {
    const o = getHydratedFlagHead({
      name: 'yup',
      selector: 'class',
      property: 'display',
      initialValue: null,
      hydratedValue: 'block',
    });
    expect(o).toBe(`.yup{display:block}`);
  });

  it('should not set hydratedValue', () => {
    const o = getHydratedFlagHead({
      name: 'yup',
      selector: 'class',
      property: 'display',
      initialValue: 'none',
      hydratedValue: null,
    });
    expect(o).toBe(`{display:none}`);
  });

  it('should set class selector', () => {
    const o = getHydratedFlagHead({
      name: 'yup',
      selector: 'class',
      property: 'display',
      initialValue: 'none',
      hydratedValue: 'block',
    });
    expect(o).toBe(`{display:none}.yup{display:block}`);
  });

  it('should set attribute selector', () => {
    const o = getHydratedFlagHead({
      name: 'yup',
      selector: 'attribute',
      property: 'display',
      initialValue: 'none',
      hydratedValue: 'block',
    });
    expect(o).toBe(`{display:none}[yup]{display:block}`);
  });
});
