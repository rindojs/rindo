import type { BuildOptions as ESBuildOptions } from 'esbuild';
import fs from 'fs-extra';
import { join } from 'path';

import { getBanner } from '../utils/banner';
import { bundleDts } from '../utils/bundle-dts';
import { BuildOptions } from '../utils/options';
import { writePkgJson } from '../utils/write-pkg-json';
import { externalAlias, getBaseEsbuildOptions, getEsbuildAliases, getEsbuildExternalModules } from './utils';

/**
 * Create objects containing ESbuild options for the two bundles comprising
 * the hydrate platform. This also performs relevant side-effects, like
 * clearing out a directory and writing a `package.json` script to disk.
 *
 * @param opts build options
 * @returns an array of ESBuild option objects
 */
export async function getInternalPlatformHydrateBundles(opts: BuildOptions): Promise<ESBuildOptions[]> {
  const inputHydrateDir = join(opts.buildDir, 'hydrate');
  const hydrateSrcDir = join(opts.srcDir, 'hydrate');
  const outputInternalHydrateDir = join(opts.output.internalDir, 'hydrate');

  await fs.emptyDir(outputInternalHydrateDir);

  // write @rindo/core/internal/hydrate/package.json
  writePkgJson(opts, outputInternalHydrateDir, {
    name: '@rindo/core/internal/hydrate',
    description:
      'Rindo internal hydrate platform to be imported by the Rindo Compiler. Breaking changes can and will happen at any time.',
    main: 'index.js',
  });

  await createHydrateRunnerDtsBundle(opts, inputHydrateDir, outputInternalHydrateDir);

  const hydratePlatformInput = join(hydrateSrcDir, 'platform', 'index.js');

  const external = getEsbuildExternalModules(opts, outputInternalHydrateDir);

  const internalHydrateAliases = getEsbuildAliases();
  internalHydrateAliases['@platform'] = hydratePlatformInput;

  const internalHydratePlatformBundle: ESBuildOptions = {
    ...getBaseEsbuildOptions(),
    entryPoints: [hydratePlatformInput],
    format: 'esm',
    platform: 'node',
    outfile: join(outputInternalHydrateDir, 'index.js'),
    external,
    alias: internalHydrateAliases,
    banner: {
      js: getBanner(opts, 'Rindo Hydrate Platform'),
    },
    plugins: [
      externalAlias('@utils/shadow-css', '../client/shadow-css.js'),
      externalAlias('@app-data', '@rindo/core/internal/app-data'),
    ],
  };

  const internalHydrateRunnerBundle: ESBuildOptions = {
    ...getBaseEsbuildOptions(),
    entryPoints: [join(hydrateSrcDir, 'runner', 'index.js')],
    external,
    format: 'esm',
    platform: 'node',
    outfile: join(outputInternalHydrateDir, 'runner.js'),
    banner: {
      js: getBanner(opts, 'Rindo Hydrate Runner'),
    },
    plugins: [
      externalAlias('@utils/shadow-css', '../client/shadow-css.js'),
      externalAlias('@app-data', '@rindo/core/internal/app-data'),
      externalAlias('@hydrate-factory', '@rindo/core/hydrate-factory'),
    ],
  };

  return [internalHydratePlatformBundle, internalHydrateRunnerBundle];
}

async function createHydrateRunnerDtsBundle(opts: BuildOptions, inputHydrateDir: string, outputDir: string) {
  // bundle @rindo/core/internal/hydrate/runner.d.ts
  const dtsEntry = join(inputHydrateDir, 'runner', 'index.d.ts');
  const dtsContent = await bundleDts(opts, dtsEntry);

  const outputPath = join(outputDir, 'runner.d.ts');
  await fs.writeFile(outputPath, dtsContent);
}
