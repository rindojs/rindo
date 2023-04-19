import type * as d from '../../declarations';
import { dirname, join, relative } from 'path';
import { isOutputTargetDistTypes } from '../output-targets/output-utils';
import { normalizePath } from '@utils';

export const updateRindoTypesImports = (typesDir: string, dtsFilePath: string, dtsContent: string) => {
  const dir = dirname(dtsFilePath);
  const relPath = relative(dir, typesDir);

  let coreDtsPath = join(relPath, CORE_FILENAME);
  if (!coreDtsPath.startsWith('.')) {
    coreDtsPath = `./${coreDtsPath}`;
  }

  coreDtsPath = normalizePath(coreDtsPath);
  if (dtsContent.includes('@rindo/core')) {
    dtsContent = dtsContent.replace(/(from\s*(:?'|"))@rindo\/core\/internal('|")/g, `$1${coreDtsPath}$2`);
    dtsContent = dtsContent.replace(/(from\s*(:?'|"))@rindo\/core('|")/g, `$1${coreDtsPath}$2`);
  }
  return dtsContent;
};

export const copyRindoCoreDts = async (config: d.Config, compilerCtx: d.CompilerCtx) => {
  const typesOutputTargets = config.outputTargets.filter(isOutputTargetDistTypes).filter(o => o.typesDir);

  const srcRindoDtsPath = join(config.sys.getCompilerExecutingPath(), '..', '..', 'internal', CORE_DTS);
  const srcRindoCoreDts = await compilerCtx.fs.readFile(srcRindoDtsPath);

  return Promise.all(
    typesOutputTargets.map(o => {
      const coreDtsFilePath = join(o.typesDir, CORE_DTS);
      return compilerCtx.fs.writeFile(coreDtsFilePath, srcRindoCoreDts, { outputTargetType: o.type });
    }),
  );
};

const CORE_FILENAME = `rindo-public-runtime`;
const CORE_DTS = `${CORE_FILENAME}.d.ts`;
