import { mockValidatedConfig } from '@rindo/core/testing';

import { getRelativeDts } from '../run-program';

describe('run-program.ts', () => {
  describe('getRelativeDts', () => {
    it('should find the relative path to write a dts file to', () => {
      const config = mockValidatedConfig({ srcDir: '/Testuser/rindo-project/src' });
      const foo = getRelativeDts(
        config,
        '/Testuser/rindo-project/src/index.ts',
        '/Testuser/rindo-project/.rindo/index.d.ts',
      );
      expect(foo).toBe('index.d.ts');
    });

    it('should find the relative path to write a nested dts file to', () => {
      const config = mockValidatedConfig({ srcDir: '/Testuser/rindo-project/src' });
      const foo = getRelativeDts(
        config,
        '/Testuser/rindo-project/src/components/index.ts',
        '/Testuser/rindo-project/.rindo/components/index.d.ts',
      );
      expect(foo).toBe('./components/index.d.ts');
    });

    it('should find the relative path to write a dts file to (windows)', () => {
      const config = mockValidatedConfig({ srcDir: 'C:\\Testuser\\rindo-project\\src' });
      const foo = getRelativeDts(
        config,
        'C:/Testuser/rindo-project/src/index.ts',
        'C:/Testuser/rindo-project/.rindo/index.d.ts',
      );
      expect(foo).toBe('index.d.ts');
    });

    it('should find the relative path to write a nested dts file to (windows)', () => {
      const config = mockValidatedConfig({ srcDir: 'C:\\Testuser\\rindo-project\\src' });
      const foo = getRelativeDts(
        config,
        'C:/Testuser/rindo-project/src/components/index.ts',
        'C:/Testuser/rindo-project/.rindo/components/index.d.ts',
      );
      expect(foo).toBe('./components/index.d.ts');
    });
  });
});
