import type * as d from '@rindo/core/internal';

import { hostRefs } from './testing-constants';

/**
 * Retrieve the data structure tracking the component by its runtime reference
 * @param elm the reference to the element
 * @returns the corresponding Rindo reference data structure, or undefined if one cannot be found
 */
export const getHostRef = (elm: d.RuntimeRef | undefined): d.HostRef | undefined => {
  return hostRefs.get(elm);
};

/**
 * Add the provided `hostRef` instance to the global {@link hostRefs} map, using the provided `lazyInstance` as a key.
 * @param lazyInstance a Rindo component instance
 * @param hostRef an optional reference to Rindo's tracking data for the component. If none is provided, one will be created.
 * @returns the updated `hostRefs` data structure
 * @throws if the provided `lazyInstance` coerces to `null`, or if the `lazyInstance` does not have a `constructor`
 * property
 */
export const registerInstance = (
  lazyInstance: any,
  hostRef: d.HostRef | null | undefined,
): Map<d.RuntimeRef, d.HostRef> => {
  if (lazyInstance == null || lazyInstance.constructor == null) {
    throw new Error(`Invalid component constructor`);
  }

  if (hostRef == null) {
    const Cstr = lazyInstance.constructor as d.ComponentTestingConstructor;
    const tagName = Cstr.COMPILER_META && Cstr.COMPILER_META.tagName ? Cstr.COMPILER_META.tagName : 'div';
    const elm = document.createElement(tagName);
    registerHost(elm, { $flags$: 0, $tagName$: tagName });
    hostRef = getHostRef(elm);
  }

  hostRef.$lazyInstance$ = lazyInstance;
  return hostRefs.set(lazyInstance, hostRef);
};

/**
 * Create a new {@link d.HostRef} instance to the global {@link hostRefs} map, using the provided `elm` as a key.
 * @param elm an HTMLElement instance associated with the Rindo component
 * @param cmpMeta the component compiler metadata associated with the component
 */
export const registerHost = (elm: d.HostElement, cmpMeta: d.ComponentRuntimeMeta): void => {
  const hostRef: d.HostRef = {
    $flags$: 0,
    $hostElement$: elm,
    $cmpMeta$: cmpMeta,
    $instanceValues$: new Map(),
    $renderCount$: 0,
  };
  hostRef.$onInstancePromise$ = new Promise((r) => (hostRef.$onInstanceResolve$ = r));
  hostRef.$onReadyPromise$ = new Promise((r) => (hostRef.$onReadyResolve$ = r));
  elm['s-p'] = [];
  elm['s-rc'] = [];
  hostRefs.set(elm, hostRef);
};
