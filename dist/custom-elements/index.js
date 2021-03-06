import { attachShadow, h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const istreeButtonCss = "*{margin:0;padding:0;box-sizing:border-box}*:before,*:after{box-sizing:border-box}*{margin:0;padding:0;box-sizing:border-box}*:before,*:after{box-sizing:border-box}.lds-ring{display:inline-block;width:16px;height:16px;position:absolute;top:0;bottom:0;margin:auto;left:12px}.lds-ring div{box-sizing:border-box;position:absolute;width:inherit;height:inherit;border:2px solid #fff;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:#fff transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-0.45s}.lds-ring div:nth-child(2){animation-delay:-0.3s}.lds-ring div:nth-child(3){animation-delay:-0.15s}@keyframes lds-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.btn.tomato.outlined,.btn.brand.outlined,.btn.functional.outlined,.btn.secondary.outlined,.btn.primary.outlined{background:none}.btn.tomato.outlined:hover .lds-ring div,.btn.brand.outlined:hover .lds-ring div,.btn.functional.outlined:hover .lds-ring div,.btn.secondary.outlined:hover .lds-ring div,.btn.primary.outlined:hover .lds-ring div{border-color:#fff transparent transparent transparent}:host{display:inline-block}.lds-ring{opacity:0}.btn{background:gray;color:#333;border-radius:4px;padding:0 12px;height:38px;outline:none;transition:0.2s ease;cursor:pointer;display:flex;justify-content:center;align-items:center;font-family:inherit;position:relative;border:1px solid transparent}.btn:before{content:\"\";display:block;border-radius:inherit;position:absolute;left:0;top:0;width:100%;height:100%;transition:0.2s ease;opacity:0;transform:scale(1.15)}.btn:active::before{transition:0s;opacity:1;transform:scale(1)}.btn.loading{opacity:0.85;padding-left:38px}.btn.loading .lds-ring{animation-name:loadingAppear;animation-duration:0.4s;animation-delay:0.2s;animation-timing-function:ease;animation-fill-mode:forwards}@keyframes loadingAppear{0%{opacity:0}100%{opacity:1}}.btn.primary{background-color:#2196f3;color:#fff}.btn.primary:before{box-shadow:0 0 6px 0 #2196f3}.btn.primary:hover{background-color:rgba(33, 150, 243, 0.8)}.btn.primary.outlined{color:#2196f3;border:1px solid #2196f3}.btn.primary.outlined:hover{color:#fff;background-color:#2196f3}.btn.primary.outlined .lds-ring div{border-color:#2196f3 transparent transparent transparent}.btn.secondary{background-color:#919191;color:#fff}.btn.secondary:before{box-shadow:0 0 6px 0 #919191}.btn.secondary:hover{background-color:rgba(145, 145, 145, 0.8)}.btn.secondary.outlined{color:#919191;border:1px solid #919191}.btn.secondary.outlined:hover{color:#fff;background-color:#919191}.btn.secondary.outlined .lds-ring div{border-color:#919191 transparent transparent transparent}.btn.functional{background-color:#31b27c;color:#fff}.btn.functional:before{box-shadow:0 0 6px 0 #31b27c}.btn.functional:hover{background-color:rgba(49, 178, 124, 0.8)}.btn.functional.outlined{color:#31b27c;border:1px solid #31b27c}.btn.functional.outlined:hover{color:#fff;background-color:#31b27c}.btn.functional.outlined .lds-ring div{border-color:#31b27c transparent transparent transparent}.btn.brand{background-color:#e84989;color:#fff}.btn.brand:before{box-shadow:0 0 6px 0 #e84989}.btn.brand:hover{background-color:rgba(232, 73, 137, 0.8)}.btn.brand.outlined{color:#e84989;border:1px solid #e84989}.btn.brand.outlined:hover{color:#fff;background-color:#e84989}.btn.brand.outlined .lds-ring div{border-color:#e84989 transparent transparent transparent}.btn.tomato{background-color:tomato;color:#fff}.btn.tomato:before{box-shadow:0 0 6px 0 tomato}.btn.tomato:hover{background-color:rgba(255, 99, 71, 0.8)}.btn.tomato.outlined{color:tomato;border:1px solid tomato}.btn.tomato.outlined:hover{color:#fff;background-color:tomato}.btn.tomato.outlined .lds-ring div{border-color:tomato transparent transparent transparent}";

const IstreeButton$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    /**
     * theme
     */
    this.primary = false;
    /**
     * theme
     */
    this.secondary = false;
    /**
     * theme
     */
    this.functional = false;
    /**
     * theme
     */
    this.brand = false;
    /**
     * theme
     */
    this.tomato = false;
    /**
     * theme
     */
    this.outlined = false;
    /**
     * ?????? loading ??????
     */
    this.isLoading = false;
  }
  getStyle() {
    return {
      btn: true,
      primary: this.primary,
      secondary: this.secondary,
      functional: this.functional,
      brand: this.brand,
      tomato: this.tomato,
      loading: this.isLoading,
      outlined: this.outlined,
    };
  }
  render() {
    return (h("button", { class: Object.assign({}, this.getStyle()) }, this.isLoading && (h("div", { style: { 'margin-right': '10px' }, class: "lds-ring" }, h("div", null), h("div", null), h("div", null), h("div", null))), h("slot", null)));
  }
  static get style() { return istreeButtonCss; }
};

const IstreeButton = /*@__PURE__*/proxyCustomElement(IstreeButton$1, [1,"istree-button",{"primary":[4],"secondary":[4],"functional":[4],"brand":[4],"tomato":[4],"outlined":[4],"isLoading":[4,"is-loading"]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      IstreeButton
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { IstreeButton, defineCustomElements };
