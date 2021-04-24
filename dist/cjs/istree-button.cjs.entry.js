'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8d5955eb.js');

const istreeButtonCss = ":host{display:inline-block}.btn{background:var(--mono-10);color:var(--mono-70);border-radius:4px;border:none;padding:0 12px;height:38px;outline:none;transition:0.1s ease;cursor:pointer;display:flex;justify-content:center;align-items:center;font-family:inherit}.btn.primary{background-color:var(--primary);color:var(--white)}.btn.primary:hover{background-color:var(--primaryHover)}.btn.secondary{background-color:var(--secondary);color:var(--white)}.btn.secondary:hover{background-color:var(--secondaryHover)}.btn.functional{background-color:var(--functional);color:var(--white)}.btn.functional:hover{background-color:var(--functionalHover)}.btn.brand{background-color:var(--brand);color:var(--white)}.btn.brand:hover{background-color:var(--brandHover)}.btn.tomato{background-color:tomato;color:var(--white)}.btn.tomato:hover{background-color:rgba(255, 99, 71, 0.9)}.btn-loader{margin-right:10px}.loader,.loader:after{border-radius:50%;width:20px;height:20px;display:inline-block}.loader{font-size:10px;position:relative;text-indent:-9999em;border-top:3px solid rgba(255, 255, 255, 0.2);border-right:3px solid rgba(255, 255, 255, 0.2);border-bottom:3px solid rgba(255, 255, 255, 0.2);border-left:3px solid #ffffff;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:load8 1.1s infinite linear;animation:load8 1.1s infinite linear}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";

const IstreeButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h("button", { class: Object.assign({}, this.getAppearance()) }, this.isLoading && index.h("span", { style: { 'margin-right': '10px' }, class: "loader" }), index.h("slot", null)));
  }
};
IstreeButton.style = istreeButtonCss;

exports.istree_button = IstreeButton;
