import { newE2EPage } from '@rindo/core/testing';

describe('import assets', () => {
  it('should import .txt file', async () => {
    const page = await newE2EPage({
      html: '<import-assets></import-assets',
    });

    const txt = await page.find('#txt');
    expect(txt.textContent.trim()).toBe('My .txt File');

    const whateverHtml = await page.find('#whatever-html');
    expect(whateverHtml.textContent.trim()).toBe('<whatever></whatever>');

    const familySvgUrl: HTMLImageElement = (await page.find('#family-svg-url')) as any;
    expect(familySvgUrl.getAttribute('src')).toContain('data:image/svg+xml;base64,');

    const familySvgText = await page.find('#family-svg-text');
    expect(familySvgText.textContent).toContain('<svg xmlns=');
  });
});
