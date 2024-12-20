import { generateDtsBundle } from 'dts-bundle-generator';
import type { BuildOptions as ESBuildOptions } from 'esbuild';
import fs from 'fs-extra';
import { join } from 'path';

import { bundleDts, cleanDts } from '../utils/bundle-dts';
import type { BuildOptions } from '../utils/options';
import { writePkgJson } from '../utils/write-pkg-json';
import { getInternalAppDataBundles } from './internal-app-data';
import { getInternalClientBundles } from './internal-platform-client';
import { getInternalPlatformHydrateBundles } from './internal-platform-hydrate';
import { getInternalTestingBundle } from './internal-platform-testing';
import { getBaseEsbuildOptions, runBuilds } from './utils';

/**
 * Run the build for the `internal/` directory, copying and modifying files
 * as-needed while also creating and then building the various bundles that need
 * to be written to `internal/`.
 *
 * @param opts Build options for the current build
 * @returns a Promise wrapping the state of the build
 */
export async function buildInternal(opts: BuildOptions) {
  const inputInternalDir = join(opts.buildDir, 'internal');

  await fs.emptyDir(opts.output.internalDir);

  await copyRindoInternalDts(opts, opts.output.internalDir);

  await copyUtilsDtsFiles(opts);

  await copyRindoCoreEntry(opts);

  // copy @rindo/core/internal default entry, which defaults to client
  // but we're not exposing all of Rindo's internal code (only the types)
  await fs.copyFile(join(inputInternalDir, 'default.js'), join(opts.output.internalDir, 'index.js'));

  // write @rindo/core/internal/package.json
  writePkgJson(opts, opts.output.internalDir, {
    name: '@rindo/core/internal',
    description:
      'Rindo internals only to be imported by the Rindo Compiler. Breaking changes can and will happen at any time.',
    main: 'index.js',
    types: 'index.d.ts',
    sideEffects: false,
  });

  // this is used in several of our bundles, so we bundle it here in one spot
  const shadowCSSBundle: ESBuildOptions = {
    ...getBaseEsbuildOptions(),
    entryPoints: [join(opts.srcDir, 'utils', 'shadow-css.ts')],
    format: 'esm',
    outfile: join(opts.output.internalDir, 'client', 'shadow-css.js'),
    platform: 'node',
  };

  const clientPlatformBundles = await getInternalClientBundles(opts);
  const hydratePlatformBundles = await getInternalPlatformHydrateBundles(opts);
  const appDataBundles = await getInternalAppDataBundles(opts);
  const internalTestingBundle = await getInternalTestingBundle(opts);

  return runBuilds(
    [shadowCSSBundle, ...clientPlatformBundles, ...hydratePlatformBundles, internalTestingBundle, ...appDataBundles],
    opts,
  );
}

async function copyRindoCoreEntry(opts: BuildOptions) {
  // write @rindo/core entry
  const rindoCoreSrcDir = join(opts.srcDir, 'internal', 'rindo-core');
  const rindoCoreDstDir = join(opts.output.internalDir, 'rindo-core');
  await fs.ensureDir(rindoCoreDstDir);
  await fs.copy(rindoCoreSrcDir, rindoCoreDstDir);
}

/**
 * Copy `.d.ts` files built from `src/utils` to `internal/utils` so that types
 * exported from utility modules can be referenced by other typedefs (in
 * particular by our declarations).
 *
 * Some modules within `@utils` incorporate external types which aren't bundled
 * so we selectively copy only `.d.ts` files which are 1) standalone and 2) export
 * a type that other modules in the codebase (in, for instance, `src/compiler/`
 * or `src/cli/`) depend on.
 *
 * @param opts options for the rollup build
 */
const copyUtilsDtsFiles = async (opts: BuildOptions) => {
  const outputDirPath = join(opts.output.internalDir, 'utils');
  await fs.ensureDir(outputDirPath);

  // copy the `.d.ts` file corresponding to `src/utils/result.ts`
  const resultDtsFilePath = join(opts.buildDir, 'utils', 'result.d.ts');
  const resultDtsOutputFilePath = join(opts.output.internalDir, 'utils', 'result.d.ts');
  await fs.copyFile(resultDtsFilePath, resultDtsOutputFilePath);

  const utilsIndexDtsPath = join(opts.output.internalDir, 'utils', 'index.d.ts');
  // here we write a simple module that re-exports `./result` so that imports
  // elsewhere like `import { result } from '@utils'` will resolve correctly
  await fs.writeFile(utilsIndexDtsPath, `export * as result from "./result"`);
};

async function copyRindoInternalDts(opts: BuildOptions, outputInternalDir: string) {
  const declarationsInputDir = join(opts.buildDir, 'declarations');

  // copy to @rindo/core/internal

  // @rindo/core/internal/index.d.ts
  const indexDtsSrcPath = join(declarationsInputDir, 'index.d.ts');
  const indexDtsDestPath = join(outputInternalDir, 'index.d.ts');
  let indexDts = cleanDts(await fs.readFile(indexDtsSrcPath, 'utf8'));
  indexDts = prependExtModules(indexDts);
  await fs.writeFile(indexDtsDestPath, indexDts);

  // @rindo/core/internal/rindo-private.d.ts
  const privateDtsSrcPath = join(declarationsInputDir, 'rindo-private.d.ts');
  const privateDtsDestPath = join(outputInternalDir, 'rindo-private.d.ts');
  let privateDts = cleanDts(await fs.readFile(privateDtsSrcPath, 'utf8'));

  // @rindo/core/internal/child_process.d.ts
  const childProcessSrcPath = join(declarationsInputDir, 'child_process.d.ts');
  const childProcessDestPath = join(outputInternalDir, 'child_process.d.ts');

  // we generate a tiny tiny bundle here of just
  // `src/declarations/child_process.ts` so that `internal/rindo-private.d.ts`
  // can import from `'./child_process'` without worrying about resolving the
  // types from `node_modules`.
  const childProcessDts = generateDtsBundle([
    {
      filePath: childProcessSrcPath,
      libraries: {
        // we need to mark this library so that types imported from it are inlined
        inlinedLibraries: ['child_process'],
      },
      output: {
        noBanner: true,
        exportReferencedTypes: false,
      },
    },
  ]).join('\n');
  await fs.writeFile(childProcessDestPath, childProcessDts);

  // the private `.d.ts` imports the `Result` type from the `@utils` module, so
  // we need to rewrite the path so it imports from the right relative path
  privateDts = privateDts.replace('@utils', './utils');
  await fs.writeFile(privateDtsDestPath, privateDts);

  // @rindo/core/internal/rindo-public.compiler.d.ts
  const compilerDtsSrcPath = join(declarationsInputDir, 'rindo-public-compiler.d.ts');
  const compilerDtsDestPath = join(outputInternalDir, 'rindo-public-compiler.d.ts');
  const compilerDts = cleanDts(await fs.readFile(compilerDtsSrcPath, 'utf8'));
  await fs.writeFile(compilerDtsDestPath, compilerDts);

  // @rindo/core/internal/rindo-public-docs.d.ts
  const docsDtsSrcPath = join(declarationsInputDir, 'rindo-public-docs.d.ts');
  const docsDtsDestPath = join(outputInternalDir, 'rindo-public-docs.d.ts');
  // We bundle with `dts-bundle-generator` here to ensure that when the `docs-json`
  // OT writes a `docs.d.ts` file based on this file it is fully portable.
  const docsDts = await bundleDts(opts, docsDtsSrcPath, {
    // we want to suppress the `dts-bundle-generator` banner here because we do
    // our own later on
    noBanner: true,
    // we also don't want the types which are inlined into our bundled file to
    // be re-exported, which will change the 'surface' of the module
    exportReferencedTypes: false,
  });
  await fs.writeFile(docsDtsDestPath, docsDts);

  // @rindo/core/internal/rindo-public-runtime.d.ts
  const runtimeDtsSrcPath = join(declarationsInputDir, 'rindo-public-runtime.d.ts');
  const runtimeDtsDestPath = join(outputInternalDir, 'rindo-public-runtime.d.ts');
  const runtimeDts = cleanDts(await fs.readFile(runtimeDtsSrcPath, 'utf8'));
  await fs.writeFile(runtimeDtsDestPath, runtimeDts);

  // @rindo/core/internal/rindo-ext-modules.d.ts (.svg/.css)
  const srcExtModuleOutput = join(opts.srcDir, 'declarations', 'rindo-ext-modules.d.ts');
  const dstExtModuleOutput = join(outputInternalDir, 'rindo-ext-modules.d.ts');
  await fs.copyFile(srcExtModuleOutput, dstExtModuleOutput);
}

function prependExtModules(content: string) {
  return `/// <reference path="./rindo-ext-modules.d.ts" />\n` + content;
}
