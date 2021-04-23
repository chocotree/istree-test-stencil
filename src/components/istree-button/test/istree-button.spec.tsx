import { newSpecPage } from '@stencil/core/testing';
import { IstreeButton } from '../istree-button';

describe('istree-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IstreeButton],
      html: `<istree-button></istree-button>`,
    });
    expect(page.root).toEqualHtml(`
      <istree-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </istree-button>
    `);
  });
});
