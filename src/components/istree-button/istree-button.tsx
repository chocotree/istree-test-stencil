import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'istree-button',
  styleUrl: 'istree-button.scss',
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
  /**
   * theme
   */
  @Prop() outlined = false;

  private getStyle() {
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

  /**
   * 顯示 loading 狀態
   */
  @Prop() isLoading = false;

  render() {
    return (
      <button class={{ ...this.getStyle() }}>
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
