import { setupDomTests } from '../util';

describe('rindo-sibling', function () {
  const { setupDom, tearDownDom } = setupDomTests(document);
  let app: HTMLElement;

  beforeEach(async () => {
    app = await setupDom('/rindo-sibling/index.html');
  });
  afterEach(tearDownDom);

  it('loads sibling root', async () => {
    const rindoSibling = app.querySelector('rindo-sibling');
    expect(rindoSibling).toBeDefined();

    const siblingRoot = rindoSibling.querySelector('sibling-root');
    expect(siblingRoot).toBeDefined();

    const section = siblingRoot.querySelector('div section');
    expect(section.textContent.trim()).toBe('sibling-shadow-dom');

    const article = section.nextElementSibling;
    expect(article.textContent.trim()).toBe('sibling-light-dom');
  });
});
