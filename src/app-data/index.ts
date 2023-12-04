import type { BuildConditionals } from '@rindo/core/internal';

/**
 * A collection of default build flags for a Rindo project.
 *
 * This collection can be found throughout the Rindo codebase, often imported from the `@app-data` module like so:
 * ```ts
 * import { BUILD } from '@app-data';
 * ```
 * and is used to determine if a portion of the output of a Rindo _project_'s compilation step can be eliminated.
 *
 * e.g. When `BUILD.allRenderFn` evaluates to `false`, the compiler will eliminate conditional statements like:
 * ```ts
 * if (BUILD.allRenderFn) {
 *   // some code that will be eliminated if BUILD.allRenderFn is false
 * }
 * ```
 *
 * `@app-data`, the module that `BUILD` is imported from, is an alias for the `@rindo/core/internal/app-data`, and is
 * partially referenced by {@link RINDO_APP_DATA_ID}. The `src/compiler/bundle/app-data-plugin.ts` references
 * `RINDO_APP_DATA_ID` uses it to replace these defaults with {@link BuildConditionals} that are derived from a
 * Rindo project's contents (i.e. metadata from the components). This replacement happens at a Rindo project's
 * compile time. Such code can be found at `src/compiler/app-core/app-data.ts`.
 */
export const BUILD: BuildConditionals = {
  allRenderFn: false,
  cmpDidLoad: true,
  cmpDidUnload: false,
  cmpDidUpdate: true,
  cmpDidRender: true,
  cmpWillLoad: true,
  cmpWillUpdate: true,
  cmpWillRender: true,
  connectedCallback: true,
  disconnectedCallback: true,
  element: true,
  event: true,
  hasRenderFn: true,
  lifecycle: true,
  hostListener: true,
  hostListenerTargetWindow: true,
  hostListenerTargetDocument: true,
  hostListenerTargetBody: true,
  hostListenerTargetParent: false,
  hostListenerTarget: true,
  member: true,
  method: true,
  mode: true,
  observeAttribute: true,
  prop: true,
  propMutable: true,
  reflect: true,
  scoped: true,
  shadowDom: true,
  slot: true,
  cssAnnotations: true,
  state: true,
  style: true,
  svg: true,
  updatable: true,
  vdomAttribute: true,
  vdomXlink: true,
  vdomClass: true,
  vdomFunctional: true,
  vdomKey: true,
  vdomListener: true,
  vdomRef: true,
  vdomPropOrAttr: true,
  vdomRender: true,
  vdomStyle: true,
  vdomText: true,
  watchCallback: true,
  taskQueue: true,
  hotModuleReplacement: false,
  isDebug: false,
  isDev: false,
  isTesting: false,
  hydrateServerSide: false,
  hydrateClientSide: false,
  lifecycleDOMEvents: false,
  lazyLoad: false,
  profile: false,
  slotRelocation: true,
  appendChildSlotFix: false,
  cloneNodeFix: false,
  hydratedAttribute: false,
  hydratedClass: true,
  scriptDataOpts: false,
  scopedSlotTextContentFix: false,
  // TODO(RINDO-854): Remove code related to legacy shadowDomShim field
  shadowDomShim: false,
  slotChildNodesFix: false,
  invisiblePrehydration: true,
  propBoolean: true,
  propNumber: true,
  propString: true,
  constructableCSS: true,
  cmpShouldUpdate: true,
  devTools: false,
  shadowDelegatesFocus: true,
  initializeNextTick: false,
  asyncLoading: false,
  asyncQueue: false,
  transformTagName: false,
  attachStyles: true,
};

export const Env = {};

export const NAMESPACE = /* default */ 'app' as string;
