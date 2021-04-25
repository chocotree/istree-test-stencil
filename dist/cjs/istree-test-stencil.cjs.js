'use strict';

const index = require('./index-8d5955eb.js');

/*
 Stencil Client Patch Browser v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('istree-test-stencil.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["istree-button.cjs",[[1,"istree-button",{"primary":[4],"secondary":[4],"functional":[4],"brand":[4],"tomato":[4],"outlined":[4],"isLoading":[4,"is-loading"]}]]]], options);
});
