import { Config } from '../../internal';

export const config: Config = {
  namespace: 'BrowserCompile',

  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      copy: [
        {
          src: '../../../compiler/',
          dest: './@rindo/core/compiler/',
          warn: true,
        },
        {
          src: '../../../internal/',
          dest: './@rindo/core/internal/',
          warn: true,
        },
        {
          src: 'preview.html',
          warn: true,
        },
      ],
    },
  ],
  enableCache: false,
};
