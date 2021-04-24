import { Component, h, Prop } from '@stencil/core';
export class IstreeButton {
  constructor() {
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
    return (h("button", { class: Object.assign({}, this.getAppearance()) },
      this.isLoading && (h("div", { style: { 'margin-right': '10px' }, class: "lds-ring" },
        h("div", null),
        h("div", null),
        h("div", null),
        h("div", null))),
      h("slot", null)));
  }
  static get is() { return "istree-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["istree-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["istree-button.css"]
  }; }
  static get properties() { return {
    "primary": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "theme"
      },
      "attribute": "primary",
      "reflect": false,
      "defaultValue": "false"
    },
    "secondary": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "theme"
      },
      "attribute": "secondary",
      "reflect": false,
      "defaultValue": "false"
    },
    "functional": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "theme"
      },
      "attribute": "functional",
      "reflect": false,
      "defaultValue": "false"
    },
    "brand": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "theme"
      },
      "attribute": "brand",
      "reflect": false,
      "defaultValue": "false"
    },
    "tomato": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "theme"
      },
      "attribute": "tomato",
      "reflect": false,
      "defaultValue": "false"
    },
    "isLoading": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "\u986F\u793A loading \u72C0\u614B"
      },
      "attribute": "is-loading",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
