import { loadRollupDiagnostics } from '@utils';
import * as ts from 'typescript';

import type * as d from '../../../declarations';
import type { BundleOptions } from '../../bundle/bundle-interface';
import { bundleOutput } from '../../bundle/bundle-output';
import { RINDO_INTERNAL_HYDRATE_ID } from '../../bundle/entry-alias-ids';
import { hydrateComponentTransform } from '../../transformers/component-hydrate/tranform-to-hydrate-component';
import { removeCollectionImports } from '../../transformers/remove-collection-imports';
import { rewriteAliasedSourceFileImportPaths } from '../../transformers/rewrite-aliased-paths';
import { updateRindoCoreImports } from '../../transformers/update-rindo-core-import';
import { getHydrateBuildConditionals } from './hydrate-build-conditionals';

export const bundleHydrateFactory = async (
  config: d.ValidatedConfig,
  compilerCtx: d.CompilerCtx,
  buildCtx: d.BuildCtx,
  _build: d.BuildConditionals,
  appFactoryEntryCode: string,
) => {
  try {
    const bundleOpts: BundleOptions = {
      id: 'hydrate',
      platform: 'hydrate',
      conditionals: getHydrateBuildConditionals(buildCtx.components),
      customBeforeTransformers: getCustomBeforeTransformers(config, compilerCtx),
      inlineDynamicImports: true,
      inputs: {
        '@app-factory-entry': '@app-factory-entry',
      },
      loader: {
        '@app-factory-entry': appFactoryEntryCode,
      },
    };

    const rollupBuild = await bundleOutput(config, compilerCtx, buildCtx, bundleOpts);
    return rollupBuild;
  } catch (e: any) {
    if (!buildCtx.hasError) {
      // TODO(RINDO-353): Implement a type guard that balances using our own copy of Rollup types (which are
      // breakable) and type safety (so that the error variable may be something other than `any`)
      loadRollupDiagnostics(config, compilerCtx, buildCtx, e);
    }
  }
  return undefined;
};

/**
 * Generate a collection of transformations that are to be applied as a part of the `before` step in the TypeScript
 * compilation process.
 #
 * @param config the Rindo configuration associated with the current build
 * @param compilerCtx the current compiler context
 * @returns a collection of transformations that should be applied to the source code, intended for the `before` part
 * of the pipeline
 */
const getCustomBeforeTransformers = (
  config: d.ValidatedConfig,
  compilerCtx: d.CompilerCtx,
): ts.TransformerFactory<ts.SourceFile>[] => {
  const transformOpts: d.TransformOptions = {
    coreImportPath: RINDO_INTERNAL_HYDRATE_ID,
    componentExport: null,
    componentMetadata: null,
    currentDirectory: config.sys.getCurrentDirectory(),
    proxy: null,
    style: 'static',
    styleImportData: 'queryparams',
  };
  const customBeforeTransformers = [updateRindoCoreImports(transformOpts.coreImportPath)];

  if (config.transformAliasedImportPaths) {
    customBeforeTransformers.push(rewriteAliasedSourceFileImportPaths);
  }

  customBeforeTransformers.push(
    hydrateComponentTransform(compilerCtx, transformOpts),
    removeCollectionImports(compilerCtx),
  );
  return customBeforeTransformers;
};
