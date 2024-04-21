import type * as d from '@rindo/core/declarations';

import { DEV_SERVER_URL } from '../dev-server-constants';
import {
  getBrowserUrl,
  getDevServerClientUrl,
  getSsrStaticDataPath,
  isExtensionLessPath,
  isSsrStaticDataPath,
} from '../dev-server-utils';

describe('dev-server, util', () => {
  it('should get url with custom base url and pathname', () => {
    const protocol = 'http:';
    const address = '0.0.0.0';
    const port = 44;
    const baseUrl = '/my-base-url/';
    const pathname = '/my-custom-path-name';
    const url = getBrowserUrl(protocol, address, port, baseUrl, pathname);
    expect(url).toBe('http://localhost:44/my-base-url/my-custom-path-name');
  });

  it('should get url with custom pathname', () => {
    const protocol = 'http';
    const address = '0.0.0.0';
    const port = 44;
    const baseUrl = '/';
    const pathname = '/my-custom-path-name';
    const url = getBrowserUrl(protocol, address, port, baseUrl, pathname);
    expect(url).toBe('http://localhost:44/my-custom-path-name');
  });

  it('should get path with 80 port', () => {
    const protocol = 'http';
    const address = '0.0.0.0';
    const port = 80;
    const baseUrl = '/';
    const pathname = '/';
    const url = getBrowserUrl(protocol, address, port, baseUrl, pathname);
    expect(url).toBe('http://localhost/');
  });

  it('should get path with no port', () => {
    const protocol = 'http';
    const address = '0.0.0.0';
    const port: any = undefined;
    const baseUrl = '/';
    const pathname = '/';
    const url = getBrowserUrl(protocol, address, port, baseUrl, pathname);
    expect(url).toBe('http://localhost/');
  });

  it('should get path with https', () => {
    const protocol = 'https';
    const address = '0.0.0.0';
    const port = 3333;
    const baseUrl = '/';
    const pathname = '/';
    const url = getBrowserUrl(protocol, address, port, baseUrl, pathname);
    expect(url).toBe('https://localhost:3333/');
  });

  it('should get path with custom address', () => {
    const protocol = 'http';
    const address = 'rindojs-staging.web.app';
    const port = 3333;
    const baseUrl = '/';
    const pathname = '/';
    const url = getBrowserUrl(protocol, address, port, baseUrl, pathname);
    expect(url).toBe('http://rindojs-staging.web.app:3333/');
  });
});

describe('getDevServerClientUrl', () => {
  it('should get path for dev server w/ host w/ port w/ protocol', () => {
    const devServerConfig: d.DevServerConfig = {
      protocol: 'http',
      address: '0.0.0.0',
      port: 3333,
      basePath: '/my-base-url/',
    };
    const proto = 'https';
    const host = 'rindojs-staging:5555.web.app';
    const url = getDevServerClientUrl(devServerConfig, host, proto);
    expect(url).toBe(`https://rindojs-staging:5555.web.app/my-base-url${DEV_SERVER_URL}`);
  });

  it('should get path for dev server w/ host w/ port no protocol', () => {
    const devServerConfig: d.DevServerConfig = {
      protocol: 'http',
      address: '0.0.0.0',
      port: 3333,
      basePath: '/my-base-url/',
    };
    const proto: string = null;
    const host = 'rindojs-staging:5555.web.app';
    const url = getDevServerClientUrl(devServerConfig, host, proto);
    expect(url).toBe(`http://rindojs-staging:5555.web.app/my-base-url${DEV_SERVER_URL}`);
  });

  it('should get path for dev server w/ host no port', () => {
    const devServerConfig: d.DevServerConfig = {
      protocol: 'http',
      address: '0.0.0.0',
      port: 3333,
      basePath: '/my-base-url/',
    };
    const proto: string = null;
    const host = 'rindojs-staging.web.app';
    const url = getDevServerClientUrl(devServerConfig, host, proto);
    expect(url).toBe(`http://rindojs-staging.web.app/my-base-url${DEV_SERVER_URL}`);
  });

  it('should get path for dev server w/ base url and port, no host', () => {
    const devServerConfig: d.DevServerConfig = {
      protocol: 'http',
      address: '0.0.0.0',
      port: 3333,
      basePath: '/my-base-url/',
    };
    const proto: string = null;
    const host: string = null;
    const url = getDevServerClientUrl(devServerConfig, host, proto);
    expect(url).toBe(`http://localhost:3333/my-base-url${DEV_SERVER_URL}`);
  });

  it('should get path for dev server w/ base url and w/out port', () => {
    const devServerConfig: d.DevServerConfig = {
      protocol: 'http',
      address: '0.0.0.0',
      basePath: '/my-base-url/',
    };
    const proto: string = null;
    const host: string = null;
    const url = getDevServerClientUrl(devServerConfig, host, proto);
    expect(url).toBe(`${devServerConfig.protocol}://localhost/my-base-url${DEV_SERVER_URL}`);
  });

  it('should get path for dev server w/ custom address, base url and port', () => {
    const devServerConfig: d.DevServerConfig = {
      protocol: 'http',
      address: '1.2.3.4',
      port: 3333,
      basePath: '/my-base-url/',
    };
    const proto: string = null;
    const host: string = null;
    const url = getDevServerClientUrl(devServerConfig, host, proto);
    expect(url).toBe(`${devServerConfig.protocol}://${devServerConfig.address}:3333/my-base-url${DEV_SERVER_URL}`);
  });

  it('isExtensionLessPath', () => {
    expect(isExtensionLessPath('http://rindojs.web.app/')).toBe(true);
    expect(isExtensionLessPath('http://rindojs.web.app/blog')).toBe(true);
    expect(isExtensionLessPath('http://rindojs.web.app/blog/')).toBe(true);
    expect(isExtensionLessPath('http://rindojs.web.app/.')).toBe(false);
    expect(isExtensionLessPath('http://rindojs.web.app/data.json')).toBe(false);
    expect(isExtensionLessPath('http://rindojs.web.app/index.html')).toBe(false);
    expect(isExtensionLessPath('http://rindojs.web.app/blog.html')).toBe(false);
  });

  it('isSsrStaticDataPath', () => {
    expect(isSsrStaticDataPath('http://rindojs.web.app/')).toBe(false);
    expect(isSsrStaticDataPath('http://rindojs.web.app/index.html')).toBe(false);
    expect(isSsrStaticDataPath('http://rindojs.web.app/page.state.json')).toBe(true);
  });

  it('getSsrStaticDataPath, root', () => {
    const req: d.HttpRequest = {
      url: new URL('http://rindojs.web.app/page.static.json'),
      method: 'GET',
      acceptHeader: '',
      searchParams: null,
    };
    const r = getSsrStaticDataPath(req);
    expect(r.fileName).toBe('page.static.json');
    expect(r.hasQueryString).toBe(false);
    expect(r.ssrPath).toBe('http://rindojs.web.app/');
  });

  it('getSsrStaticDataPath, no trailing slash refer', () => {
    const req: d.HttpRequest = {
      url: new URL('http://rindojs.web.app/blog/page.static.json?v=1234'),
      method: 'GET',
      acceptHeader: '',
      searchParams: null,
      headers: {
        Referer: 'http://rindojs.web.app/page',
      },
    };
    const r = getSsrStaticDataPath(req);
    expect(r.fileName).toBe('page.static.json');
    expect(r.hasQueryString).toBe(true);
    expect(r.ssrPath).toBe('http://rindojs.web.app/blog');
  });

  it('getSsrStaticDataPath, with trailing slash refer', () => {
    const req: d.HttpRequest = {
      url: new URL('http://rindojs.web.app/blog/page.static.json?v=1234'),
      method: 'GET',
      acceptHeader: '',
      searchParams: null,
      headers: {
        Referer: 'http://rindojs.web.app/page/',
      },
    };
    const r = getSsrStaticDataPath(req);
    expect(r.fileName).toBe('page.static.json');
    expect(r.hasQueryString).toBe(true);
    expect(r.ssrPath).toBe('http://rindojs.web.app/blog/');
  });
});
