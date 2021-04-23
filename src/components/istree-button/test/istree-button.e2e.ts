import { newE2EPage } from '@stencil/core/testing';

describe('istree-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<istree-button></istree-button>');

    const element = await page.find('istree-button');
    expect(element).toHaveClass('hydrated');
  });
});
