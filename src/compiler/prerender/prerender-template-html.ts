import { createDocument, serializeNodeToHtml } from '@rindo/core/mock-doc';
import { catchError, isFunction, isString } from '@utils';

import type * as d from '../../declarations';
import {
  hasRindoScript,
  inlineExternalStyleSheets,
  minifyScriptElements,
  minifyStyleElements,
  removeRindoScripts,
} from './prerender-optimize';

export const generateTemplateHtml = async (
  config: d.ValidatedConfig,
  prerenderConfig: d.PrerenderConfig,
  diagnostics: d.Diagnostic[],
  isDebug: boolean,
  srcIndexHtmlPath: string,
  outputTarget: d.OutputTargetWww,
  hydrateOpts: d.PrerenderHydrateOptions,
  manager: d.PrerenderManager,
) => {
  try {
    if (!isString(srcIndexHtmlPath) && outputTarget.indexHtml) {
      srcIndexHtmlPath = outputTarget.indexHtml;
    }

    let templateHtml: string;
    if (isFunction(prerenderConfig.loadTemplate)) {
      const loadTemplateResult = prerenderConfig.loadTemplate(srcIndexHtmlPath);
      templateHtml = await loadTemplateResult;
    } else {
      templateHtml = await config.sys.readFile(srcIndexHtmlPath);
    }

    let doc = createDocument(templateHtml);

    let staticSite = false;

    if (prerenderConfig.staticSite) {
      // purposely do not want any client-side JS
      // go through the document and remove only rindo's scripts
      removeRindoScripts(doc);
      staticSite = true;
    } else {
      // config didn't set if it's a staticSite only,
      // but the HTML may not have any rindo scripts at all,
      // so we'll need to know that so we don't add preload modules
      // if there isn't at least one rindo script then it's a static site
      staticSite = !hasRindoScript(doc);
    }

    doc.documentElement.classList.add('hydrated');

    if (hydrateOpts.inlineExternalStyleSheets && !isDebug && outputTarget.appDir) {
      try {
        await inlineExternalStyleSheets(config.sys, outputTarget.appDir, doc);
      } catch (e: any) {
        catchError(diagnostics, e);
      }
    }

    if (hydrateOpts.minifyScriptElements && !isDebug) {
      try {
        await minifyScriptElements(doc, true);
      } catch (e: any) {
        catchError(diagnostics, e);
      }
    }

    if (hydrateOpts.minifyStyleElements && !isDebug && outputTarget.baseUrl) {
      try {
        const baseUrl = new URL(outputTarget.baseUrl, manager.devServerHostUrl);
        await minifyStyleElements(config.sys, outputTarget.appDir, doc, baseUrl, true);
      } catch (e: any) {
        catchError(diagnostics, e);
      }
    }

    if (isFunction(prerenderConfig.beforeSerializeTemplate)) {
      const beforeSerializeResults = prerenderConfig.beforeSerializeTemplate(doc);
      doc = await beforeSerializeResults;
    }

    let html = serializeNodeToHtml(doc);

    if (isFunction(prerenderConfig.afterSerializeTemplate)) {
      const afterSerializeResults = prerenderConfig.afterSerializeTemplate(html);
      html = await afterSerializeResults;
    }

    return {
      html,
      staticSite,
    };
  } catch (e: any) {
    catchError(diagnostics, e);
  }
  return undefined;
};
