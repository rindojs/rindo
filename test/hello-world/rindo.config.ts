import { Config } from '../../internal';

export const config: Config = {
  namespace: 'HelloWorld',
  outputTargets: [
    { type: 'dist' },
    { type: 'dist-hydrate-script' },
    {
      type: 'www',
      serviceWorker: null,
      baseUrl: 'https://rindojs-helloworld.web.app/',
    },
  ],
  enableCache: false,
  hydratedFlag: null,
  hashFileNames: false,
  extras: {
    scriptDataOpts: false,
  },
};
