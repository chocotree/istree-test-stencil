import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'istree-button',
  styleUrl: 'istree-button.css',
  shadow: true,
})
export class IstreeButton {
  /**
   * theme
   */
  @Prop() primary = false;
  /**
   * theme
   */
  @Prop() secondary = false;
  /**
   * theme
   */
  @Prop() functional = false;
  /**
   * theme
   */
  @Prop() brand = false;
  /**
   * theme
   */
  @Prop() tomato = false;

  private getAppearance() {
    return {
      btn: true,
      primary: this.primary,
      secondary: this.secondary,
      functional: this.functional,
      brand: this.brand,
      tomato: this.tomato,
    };
  }

  /**
   * 顯示 loading 狀態
   */
  @Prop() isLoading = false;

  render() {
    return (
      <button class={{ ...this.getAppearance() }}>
        {this.isLoading && (
          <div style={{ 'margin-right': '10px' }} class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <slot />
      </button>
    );
  }
}
