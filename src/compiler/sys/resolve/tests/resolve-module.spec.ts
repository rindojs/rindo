import {
  getModuleId,
  getPackageDirPath,
  isLocalModule,
  isNodeModulePath,
  isRindoCoreImport,
  setPackageVersionByContent,
} from '../resolve-utils';

describe('resolve modules', () => {
  const pkgVersions = new Map<string, string>();
  beforeEach(() => {
    pkgVersions.clear();
  });

  it('isRindoCoreImport', () => {
    expect(isRindoCoreImport('@rindo/core')).toBe(true);
    expect(isRindoCoreImport('@rindo/core/internal')).toBe(true);
    expect(isRindoCoreImport('@rindo/core/internal/client')).toBe(true);
    expect(isRindoCoreImport('@rindo/core/internal/client/index.mjs')).toBe(true);
    expect(isRindoCoreImport('lodash')).toBe(false);
    expect(isRindoCoreImport('@familyjs/core')).toBe(false);
  });

  it('isLocalModule', () => {
    expect(isLocalModule('./local.tsx')).toBe(true);
    expect(isLocalModule('/local.tsx')).toBe(true);
    expect(isLocalModule('lodash')).toBe(false);
    expect(isLocalModule('@familyjs/core')).toBe(false);
  });

  it('isNodeModulePath', () => {
    expect(isNodeModulePath('/path/to/local/module/index.js')).toBe(false);
    expect(isNodeModulePath('/path/to/node_modules/lodash/index.js')).toBe(true);
    expect(isNodeModulePath('/node_modules/lodash/index.js')).toBe(true);
    expect(isNodeModulePath('C:\\path\\to\\node_modules\\lodash\\index.js')).toBe(true);
    expect(isNodeModulePath('C:\\path\\to\\local\\index.js')).toBe(false);
  });

  describe('getModuleId', () => {
    it('getModuleId non-scoped ~ package', () => {
      const m = getModuleId('~famicons/dist/css/famicons.css');
      expect(m.moduleId).toBe('famicons');
      expect(m.filePath).toBe('dist/css/famicons.css');
      expect(m.scope).toBe(null);
      expect(m.scopeSubModuleId).toBe(null);
    });

    it('getModuleId non-scoped package', () => {
      const m = getModuleId('famicons/dist/css/famicons.css');
      expect(m.moduleId).toBe('famicons');
      expect(m.filePath).toBe('dist/css/famicons.css');
      expect(m.scope).toBe(null);
      expect(m.scopeSubModuleId).toBe(null);
    });

    it('getModuleId non-scoped package, no path', () => {
      const m = getModuleId('famicons');
      expect(m.moduleId).toBe('famicons');
      expect(m.filePath).toBe('');
      expect(m.scope).toBe(null);
      expect(m.scopeSubModuleId).toBe(null);
    });

    it('getModuleId scoped ~ package', () => {
      const m = getModuleId('~@familyjs/core/dist/family/css/family.css');
      expect(m.moduleId).toBe('@familyjs/core');
      expect(m.filePath).toBe('dist/family/css/family.css');
      expect(m.scope).toBe('@familyjs');
      expect(m.scopeSubModuleId).toBe('core');
    });

    it('getModuleId scoped package', () => {
      const m = getModuleId('@familyjs/core/dist/family/css/family.css');
      expect(m.moduleId).toBe('@familyjs/core');
      expect(m.filePath).toBe('dist/family/css/family.css');
      expect(m.scope).toBe('@familyjs');
      expect(m.scopeSubModuleId).toBe('core');
    });

    it('getModuleId scoped package, no path', () => {
      const m = getModuleId('@familyjs/core');
      expect(m.moduleId).toBe('@familyjs/core');
      expect(m.filePath).toBe('');
      expect(m.scope).toBe('@familyjs');
      expect(m.scopeSubModuleId).toBe('core');
    });
  });

  it('getPackageDirPath', () => {
    expect(getPackageDirPath('/node_modules/@my/pkg/some/path.js', '@my/pkg')).toBe('/node_modules/@my/pkg');
    expect(getPackageDirPath('\\node_modules\\my-pkg\\', 'my-pkg')).toBe('/node_modules/my-pkg');
    expect(getPackageDirPath('/node_modules/my-pkg/', 'my-pkg')).toBe('/node_modules/my-pkg');
    expect(getPackageDirPath('/node_modules/my-pkg/some/path.js', 'my-pkg')).toBe('/node_modules/my-pkg');
    expect(getPackageDirPath('/node_modules/something/node_modules/my-pkg/some/path.js', 'my-pkg')).toBe(
      '/node_modules/something/node_modules/my-pkg',
    );
    expect(getPackageDirPath('/node_modules/idk/some/path.js', 'my-pkg')).toBe(null);
    expect(getPackageDirPath('/my-pkg/node_modules/some/path.js', 'my-pkg')).toBe(null);
    expect(getPackageDirPath('/node_modules/some/my-pkg/path.js', 'my-pkg')).toBe(null);
  });

  describe('setPackageVersionByContent', () => {
    it('set scoped package', () => {
      const pkgContent = JSON.stringify({
        name: '@familyjs/core',
        version: '1.2.3',
      });
      setPackageVersionByContent(pkgVersions, pkgContent);
      expect(pkgVersions.get('@familyjs/core')).toBe('1.2.3');
    });

    it('set package', () => {
      const pkgContent = JSON.stringify({
        name: 'lodash',
        version: '1.2.3',
      });
      setPackageVersionByContent(pkgVersions, pkgContent);
      expect(pkgVersions.get('lodash')).toBe('1.2.3');
    });
  });
});
