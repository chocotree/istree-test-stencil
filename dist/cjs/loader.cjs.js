'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8d5955eb.js');

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["istree-button.cjs",[[1,"istree-button",{"primary":[4],"secondary":[4],"functional":[4],"brand":[4],"tomato":[4],"outlined":[4],"isLoading":[4,"is-loading"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
