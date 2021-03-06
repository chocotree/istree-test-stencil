import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'istree-test-stencil',
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/global.scss'],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
      dir: 'docs',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
