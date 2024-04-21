import { Config } from '@rindo/core';

export const config: Config = {
  namespace: 'json-docs-testbed',
  outputTargets: [
    {
      type: 'docs-json',
      file: 'docs.json',
      supplementalPublicTypes: 'src/components/interfaces.ts',
    },
  ],
};
