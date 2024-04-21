import { Config } from '../../internal';

export const config: Config = {
  hashFileNames: false,
  minifyJs: false,
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'http://rindojs-testing.web.app',
      serviceWorker: null,
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/hydrate',
    },
  ],

  enableCache: false,
};
