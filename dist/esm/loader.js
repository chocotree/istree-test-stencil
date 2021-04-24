import { p as promiseResolve, b as bootstrapLazy } from './index-8b468de2.js';

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["istree-button",[[1,"istree-button",{"primary":[4],"secondary":[4],"functional":[4],"brand":[4],"tomato":[4],"isLoading":[4,"is-loading"]}]]]], options);
  });
};

export { defineCustomElements };
