import { attachShadow, h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const istreeButtonCss = ":host{display:inline-block}.btn{background:var(--mono-10);color:var(--mono-70);border-radius:4px;border:none;padding:0 12px;height:38px;outline:none;transition:0.1s ease;cursor:pointer;display:flex;justify-content:center;align-items:center;font-family:inherit}.btn.primary{background-color:var(--primary);color:var(--white)}.btn.primary:hover{background-color:var(--primaryHover)}.btn.secondary{background-color:var(--secondary);color:var(--white)}.btn.secondary:hover{background-color:var(--secondaryHover)}.btn.functional{background-color:var(--functional);color:var(--white)}.btn.functional:hover{background-color:var(--functionalHover)}.btn.brand{background-color:var(--brand);color:var(--white)}.btn.brand:hover{background-color:var(--brandHover)}.btn.tomato{background-color:tomato;color:var(--white)}.btn.tomato:hover{background-color:rgba(255, 99, 71, 0.9)}.lds-ring{display:inline-block;position:relative;width:20px;height:20px}.lds-ring div{box-sizing:border-box;position:absolute;width:inherit;height:inherit;border:3px solid #fff;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:#fff transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-0.45s}.lds-ring div:nth-child(2){animation-delay:-0.3s}.lds-ring div:nth-child(3){animation-delay:-0.15s}@keyframes lds-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";

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
     * 顯示 loading 狀態
     */
    this.isLoading = false;
  }
  getAppearance() {
    return {
      btn: true,
      primary: this.primary,
      secondary: this.secondary,
      functional: this.functional,
      brand: this.brand,
      tomato: this.tomato,
    };
  }
  render() {
    return (h("button", { class: Object.assign({}, this.getAppearance()) }, this.isLoading && (h("div", { style: { 'margin-right': '10px' }, class: "lds-ring" }, h("div", null), h("div", null), h("div", null), h("div", null))), h("slot", null)));
  }
  static get style() { return istreeButtonCss; }
};

const IstreeButton = /*@__PURE__*/proxyCustomElement(IstreeButton$1, [1,"istree-button",{"primary":[4],"secondary":[4],"functional":[4],"brand":[4],"tomato":[4],"isLoading":[4,"is-loading"]}]);
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
