import type * as d from '../../../declarations';
import { crawlAnchorsForNextUrls } from '../crawl-urls';

describe('crawlAnchorsForNextUrls', () => {
  let prerenderConfig: d.PrerenderConfig;
  let diagnostics: d.Diagnostic[];
  let baseUrl: URL;
  let currentUrl: URL;
  let parsedAnchors: d.HydrateAnchorElement[];

  beforeEach(() => {
    prerenderConfig = {};
    diagnostics = [];
    baseUrl = new URL('http://rindojs.web.app/');
    currentUrl = new URL('http://rindojs.web.app/docs');
  });

  it('user filterUrl()', () => {
    parsedAnchors = [{ href: '/docs' }, { href: '/docs/v3' }, { href: '/docs/v3/components' }];
    prerenderConfig.filterUrl = function (url) {
      if (url.pathname.startsWith('/docs/v3')) {
        return false;
      }
      return true;
    };

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(1);
    expect(hrefs[0]).toBe('http://rindojs.web.app/docs');
  });

  it('user normalizeUrl()', () => {
    parsedAnchors = [{ href: '/doczz' }, { href: '/docs' }];
    prerenderConfig.normalizeUrl = function (href, base) {
      const url = new URL(href, base);

      if (url.pathname === '/doczz') {
        url.pathname = '/docs';
      }

      return url;
    };

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(1);
    expect(hrefs[0]).toBe('http://rindojs.web.app/docs');
  });

  it('user filterAnchor()', () => {
    parsedAnchors = [
      { href: '/docs' },
      { href: '/docs/about-us', 'data-prerender': 'yes-plz' },
      { href: '/docs/app', 'data-prerender': 'no-prerender' },
    ];
    prerenderConfig.filterAnchor = function (anchor) {
      if (anchor['data-prerender'] === 'no-prerender') {
        return false;
      }
      return true;
    };

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(2);
    expect(hrefs[0]).toBe('http://rindojs.web.app/docs');
    expect(hrefs[1]).toBe('http://rindojs.web.app/docs/about-us');
  });

  it('normalize with encoded characters', () => {
    parsedAnchors = [{ href: '/about%20us' }, { href: '/about us' }];

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(1);
    expect(hrefs[0]).toBe('http://rindojs.web.app/about%20us');
  });

  it('normalize with trailing slash', () => {
    prerenderConfig.trailingSlash = true;
    parsedAnchors = [
      { href: '/' },
      { href: '/about-us' },
      { href: '/about-us/' },
      { href: '/docs' },
      { href: '/docs/' },
      { href: '/docs/index.html' },
    ];

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(3);
    expect(hrefs[0]).toBe('http://rindojs.web.app/');
    expect(hrefs[1]).toBe('http://rindojs.web.app/about-us/');
    expect(hrefs[2]).toBe('http://rindojs.web.app/docs/');
  });

  it('normalize without trailing slash', () => {
    parsedAnchors = [
      { href: '/' },
      { href: '/about-us' },
      { href: '/about-us/' },
      { href: '/docs' },
      { href: '/docs/' },
      { href: '/docs/index.html' },
    ];

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(3);
    expect(hrefs[0]).toBe('http://rindojs.web.app/');
    expect(hrefs[1]).toBe('http://rindojs.web.app/about-us');
    expect(hrefs[2]).toBe('http://rindojs.web.app/docs');
  });

  it('skip directories below base path', () => {
    baseUrl = new URL('http://rindojs.web.app/docs');
    parsedAnchors = [
      { href: '/' },
      { href: '/about-us' },
      { href: '/contact-us' },
      { href: '/docs' },
      { href: '/docs/components' },
    ];

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(2);
    expect(hrefs[0]).toBe('http://rindojs.web.app/docs');
    expect(hrefs[1]).toBe('http://rindojs.web.app/docs/components');
  });

  it('skip different domains', () => {
    parsedAnchors = [
      { href: '/' },
      { href: '/docs' },
      { href: 'https://rindojs.web.app/' },
      { href: 'https://family-js.web.app/' },
      { href: 'https://family-js.web.app/docs' },
      { href: 'https://famicons.web.app/' },
    ];

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(2);
    expect(hrefs[0]).toBe('http://rindojs.web.app/');
    expect(hrefs[1]).toBe('http://rindojs.web.app/docs');
  });

  it('skip targets that arent _self', () => {
    parsedAnchors = [
      { href: '/docs', target: '_self' },
      { href: '/whatever', target: '_blank' },
      { href: '/about-us', target: 'custom-target' },
    ];

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(1);
    expect(hrefs[0]).toBe('http://rindojs.web.app/docs');
  });

  it('trim up hrefs', () => {
    parsedAnchors = [{ href: '/     ' }, { href: '  /' }, { href: '  /  ' }];

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(1);
    expect(hrefs[0]).toBe('http://rindojs.web.app/');
  });

  it('disregard querystring', () => {
    parsedAnchors = [{ href: '/?' }, { href: '/?some=querystring' }, { href: '/?some=querystring2' }];

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(1);
    expect(hrefs[0]).toBe('http://rindojs.web.app/');
  });

  it('disregard hash', () => {
    parsedAnchors = [{ href: '/#' }, { href: '/#some-hash' }, { href: '/#some-hash2' }];

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(1);
    expect(hrefs[0]).toBe('http://rindojs.web.app/');
  });

  it('normalize https protocol', () => {
    currentUrl = new URL('https://rindojs.web.app/docs');
    parsedAnchors = [{ href: 'http://rindojs.web.app/' }, { href: 'https://rindojs.web.app/' }];

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(1);
    expect(hrefs[0]).toBe('https://rindojs.web.app/');
  });

  it('normalize protocol', () => {
    currentUrl = new URL('http://rindojs.web.app/docs');
    parsedAnchors = [{ href: 'http://rindojs.web.app/' }, { href: 'https://rindojs.web.app/' }];

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(1);
    expect(hrefs[0]).toBe('http://rindojs.web.app/');
  });

  it('normalize /docs/index.htm', () => {
    parsedAnchors = [{ href: '/docs/index.htm' }, { href: './docs/index.htm' }];

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(1);
    expect(hrefs[0]).toBe('http://rindojs.web.app/docs');
  });

  it('normalize index.html', () => {
    parsedAnchors = [{ href: '/index.html' }, { href: './index.html' }];

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(1);
    expect(hrefs[0]).toBe('http://rindojs.web.app/');
  });

  it('parse absolute paths', () => {
    parsedAnchors = [{ href: 'http://rindojs.web.app/' }, { href: 'http://rindojs.web.app/docs' }];

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(2);
    expect(hrefs[0]).toBe('http://rindojs.web.app/');
    expect(hrefs[1]).toBe('http://rindojs.web.app/docs');
  });

  it('parse relative paths', () => {
    parsedAnchors = [
      { href: '/' },
      { href: './' },
      { href: './docs/../docs/../' },
      { href: '/docs' },
      { href: '/docs/../' },
      { href: '/docs/..' },
    ];

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(2);
    expect(hrefs[0]).toBe('http://rindojs.web.app/');
    expect(hrefs[1]).toBe('http://rindojs.web.app/docs');
  });

  it('do nothing for invalid hrefs', () => {
    parsedAnchors = [
      { href: '' },
      { href: '     ' },
      { href: '#' },
      { href: '#some-hash' },
      { href: '?' },
      { href: '?some=querystring' },
    ];

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(0);
  });

  it('do nothing for empty array', () => {
    parsedAnchors = [];

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(0);
  });

  it('do nothing for invalid parsedAnchors', () => {
    parsedAnchors = null;

    const hrefs = crawlAnchorsForNextUrls(prerenderConfig, diagnostics, baseUrl, currentUrl, parsedAnchors);
    expect(diagnostics).toHaveLength(0);

    expect(hrefs).toHaveLength(0);
  });
});
