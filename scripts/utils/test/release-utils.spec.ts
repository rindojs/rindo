import fs from 'fs-extra';

import { BuildOptions } from '../options';

// `open` must be mocked before importing the module under test
const openMock = jest.fn();
jest.mock('open', () => openMock);

import { postGithubRelease } from '../release-utils';

describe('release-utils', () => {
  describe('postGithubRelease', () => {
    jest.useFakeTimers().setSystemTime(new Date('2022-01-01').getTime());

    let buildOptions: BuildOptions;

    let mockReadFile: jest.SpyInstance<ReturnType<typeof fs.readFile>, Parameters<typeof fs.readFile>>;

    beforeEach(() => {
      mockReadFile = jest.spyOn(fs, 'readFile');

      buildOptions = {
        changelogPath: 'some/mock/CHANGELOG.md',
        ghRepoName: 'rindo',
        ghRepoOrg: 'familyjs',
        tag: 'dev',
        vermoji: '🚗',
        version: '0.0.0',
      };
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    it('creates an empty body if the changelog is empty', async () => {
      // Jest isn't smart enough to pick the correct overloaded method, so we must do type assertions to get our spy to
      // return a string (as if we called the original with an encoding argument)
      mockReadFile.mockResolvedValue('' as unknown as Buffer);

      await postGithubRelease(buildOptions);

      expect(openMock).toHaveBeenCalledTimes(1);
      expect(openMock).toHaveBeenCalledWith(
        'https://github.com/rindojs/rindo/releases/new?tag=v0.0.0&title=%F0%9F%9A%97+0.0.0+%282022-01-01%29&body=',
      );
    });

    it('splits a minor release from a previous patch release', async () => {
      const minorReleaseFollowingPatch = `# 🍣 2.13.0 (2022-01-24)


### Features

* **mock-doc:** add simple MockEvent#composedPath() impl
* **test:** jest 27 support



## 🍔 2.12.1 (2022-01-04)


### Bug Fixes

* **vdom:** properly warn for step attr on input


### Features

* **typings:** add optional key and ref to slot elements
`;

      // Jest isn't smart enough to pick the correct overloaded method, so we must do type assertions to get our spy to
      // return a string (as if we called the original with an encoding argument)
      mockReadFile.mockResolvedValue(minorReleaseFollowingPatch as unknown as Buffer);

      await postGithubRelease(buildOptions);

      expect(openMock).toHaveBeenCalledTimes(1);
      expect(openMock).toHaveBeenCalledWith(
        'https://github.com/rindojs/rindo/releases/new?tag=v0.0.0&title=%F0%9F%9A%97+0.0.0+%282022-01-01%29&body=%23%23%23+Features%0A%0A*+**mock-doc%3A**+add+simple+MockEvent%23composedPath%28%29+impl%0A*+**test%3A**+jest+27+support',
      );
    });

    it('splits a minor release from a previous minor release', async () => {
      const minorReleaseFollowingMinor = `# ⛸ 2.12.0 (2021-12-13)


### Bug Fixes

* **cli:** wait for help task to finish before exiting
* **mock-doc:** make Node.contains() return true for self
* **mock-doc:** allow urls as css values
* **sourcemaps:** do not encode inline sourcemaps


### Features

* **dist-custom-elements-bundle:** add deprecation warning



# 🐌 2.11.0 (2021-11-22)


### Bug Fixes

* **dist-custom-elements:** add ssr checks


### Features

* **css:** account for escaped ':' in css selectors
`;

      // Jest isn't smart enough to pick the correct overloaded method, so we must do type assertions to get our spy to
      // return a string (as if we called the original with an encoding argument)
      mockReadFile.mockResolvedValue(minorReleaseFollowingMinor as unknown as Buffer);

      await postGithubRelease(buildOptions);

      expect(openMock).toHaveBeenCalledTimes(1);
      expect(openMock).toHaveBeenCalledWith(
        'https://github.com/rindojs/rindo/releases/new?tag=v0.0.0&title=%F0%9F%9A%97+0.0.0+%282022-01-01%29&body=%23%23%23+Bug+Fixes%0A%0A*+**cli%3A**+wait+for+help+task+to+finish+before+exiting%0A*+**mock-doc%3A**+make+Node.contains%28%29+return+true+for+self%0A*+**mock-doc%3A**+allow+urls+as+css+values%0A*+**sourcemaps%3A**+do+not+encode+inline+sourcemaps%0A%0A%0A%23%23%23+Features%0A%0A*+**dist-custom-elements-bundle%3A**+add+deprecation+warning',
      );
    });

    it('splits a patch release from a previous patch release', async () => {
      const patchReleaseFollowingPatch = `## ♨️ 2.12.2 (2022-01-24)


### Features

* **mock-doc:** add simple MockEvent#composedPath() impl
* **test:** jest 27 support



## 🍔 2.12.1 (2022-01-04)


### Bug Fixes

* **vdom:** properly warn for step attr on input


### Features

* **typings:** add optional key and ref to slot elements
`;

      // Jest isn't smart enough to pick the correct overloaded method, so we must do type assertions to get our spy to
      // return a string (as if we called the original with an encoding argument)
      mockReadFile.mockResolvedValue(patchReleaseFollowingPatch as unknown as Buffer);

      await postGithubRelease(buildOptions);

      expect(openMock).toHaveBeenCalledTimes(1);
      expect(openMock).toHaveBeenCalledWith(
        'https://github.com/rindojs/rindo/releases/new?tag=v0.0.0&title=%F0%9F%9A%97+0.0.0+%282022-01-01%29&body=%23%23%23+Features%0A%0A*+**mock-doc%3A**+add+simple+MockEvent%23composedPath%28%29+impl%0A*+**test%3A**+jest+27+support',
      );
    });
  });
});
