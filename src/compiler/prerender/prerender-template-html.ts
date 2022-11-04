import * as d from '../../declarations';
import { catchError, isPromise } from '@utils';
import { hasRindoScript, inlineExternalStyleSheets, minifyScriptElements, minifyStyleElements, removeRindoScripts } from './prerender-optimize';
import { createDocument, serializeNodeToHtml } from '@rindo/core/mock-doc';

export const generateTemplateHtml = async (
  config: d.Config,
  prerenderConfig: d.PrerenderConfig,
  diagnostics: d.Diagnostic[],
  isDebug: boolean,
  srcIndexHtmlPath: string,
  outputTarget: d.OutputTargetWww,
  hydrateOpts: d.PrerenderHydrateOptions,
) => {
  try {
    if (typeof srcIndexHtmlPath !== 'string') {
      srcIndexHtmlPath = outputTarget.indexHtml;
    }

    let templateHtml: string;
    if (typeof prerenderConfig.loadTemplate === 'function') {
      const loadTemplateResult = prerenderConfig.loadTemplate(srcIndexHtmlPath);
      if (isPromise(loadTemplateResult)) {
        templateHtml = await loadTemplateResult;
      } else {
        templateHtml = loadTemplateResult;
      }
    } else {
      templateHtml = await config.sys.readFile(srcIndexHtmlPath);
    }

    let doc = createDocument(templateHtml);

    let staticSite = false;

    if (prerenderConfig.staticSite) {
      // purposely do not want any clientside JS
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

    if (hydrateOpts.inlineExternalStyleSheets && !isDebug) {
      try {
        await inlineExternalStyleSheets(config, outputTarget.appDir, doc);
      } catch (e) {
        catchError(diagnostics, e);
      }
    }

    if (hydrateOpts.minifyScriptElements && !isDebug) {
      try {
        await minifyScriptElements(doc, true);
      } catch (e) {
        catchError(diagnostics, e);
      }
    }

    if (hydrateOpts.minifyStyleElements && !isDebug) {
      try {
        await minifyStyleElements(doc, true);
      } catch (e) {
        catchError(diagnostics, e);
      }
    }

    if (typeof prerenderConfig.beforeSerializeTemplate === 'function') {
      const beforeSerializeResults = prerenderConfig.beforeSerializeTemplate(doc);
      if (isPromise(beforeSerializeResults)) {
        doc = await beforeSerializeResults;
      } else {
        doc = beforeSerializeResults;
      }
    }

    let html = serializeNodeToHtml(doc);

    if (typeof prerenderConfig.afterSerializeTemplate === 'function') {
      const afterSerializeResults = prerenderConfig.afterSerializeTemplate(html);
      if (isPromise(afterSerializeResults)) {
        html = await afterSerializeResults;
      } else {
        html = afterSerializeResults;
      }
    }

    return {
      html,
      staticSite,
    };
  } catch (e) {
    catchError(diagnostics, e);
  }
  return undefined;
};
