import { Config } from '../../internal';

// https://rindojs.web.app/docs/config

export const config: Config = {
  outputTargets: [{ type: 'www', serviceWorker: null }],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  hashFileNames: false,
};
