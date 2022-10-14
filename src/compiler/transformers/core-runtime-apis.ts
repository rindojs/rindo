import * as d from '../../declarations';


export const ATTACH_SHADOW = '__rindo_attachShadow';
export const CREATE_EVENT = '__rindo_createEvent';
export const DEFINE_CUSTOM_ELEMENT = '__rindo_defineCustomElement';
export const GET_CONNECT = '__rindo_getConnect';
export const GET_CONTEXT = '__rindo_getContext';
export const GET_ELEMENT = '__rindo_getElement';
export const HOST = '__rindo_Host';
export const HTML_ELEMENT = 'HTMLElement';
export const PROXY_CUSTOM_ELEMENT = '__rindo_proxyCustomElement';
export const REGISTER_INSTANCE = '__rindo_registerInstance';
export const REGISTER_HOST = '__rindo_registerHost';
export const H = '__rindo_h';


export const RUNTIME_APIS = {
  attachShadow: `attachShadow as ${ATTACH_SHADOW}`,
  createEvent: `createEvent as ${CREATE_EVENT}`,
  defineCustomElement: `defineCustomElement as ${DEFINE_CUSTOM_ELEMENT}`,
  getConnect: `getConnect as ${GET_CONNECT}`,
  getContext: `getContext as ${GET_CONTEXT}`,
  getElement: `getElement as ${GET_ELEMENT}`,
  h: `h as ${H}`,
  legacyH: `h`,
  Host: `Host as ${HOST}`,
  HTMLElement: HTML_ELEMENT,
  proxyCustomElement: `proxyCustomElement as ${PROXY_CUSTOM_ELEMENT}`,
  registerHost: `registerHost as ${REGISTER_HOST}`,
  registerInstance: `registerInstance as ${REGISTER_INSTANCE}`,
};


export const addCoreRuntimeApi = (moduleFile: d.Module, coreRuntimeApi: string) => {
  if (!moduleFile.coreRuntimeApis.includes(coreRuntimeApi)) {
    moduleFile.coreRuntimeApis.push(coreRuntimeApi);
  }
};

export const addLegacyApis = (moduleFile: d.Module) => {
  addCoreRuntimeApi(moduleFile, RUNTIME_APIS.legacyH);
};
