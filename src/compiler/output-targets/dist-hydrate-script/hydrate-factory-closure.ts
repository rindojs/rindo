export const HYDRATE_APP_CLOSURE_START = `/*hydrateAppClosure start*/`;

export const HYDRATE_FACTORY_INTRO = `
export function hydrateFactory($rindoWindow, $rindoHydrateOpts, $rindoHydrateResults, $rindoAfterHydrate, $rindoHydrateResolve) {
  var globalThis = $rindoWindow;
  var self = $rindoWindow;
  var top = $rindoWindow;
  var parent = $rindoWindow;

  var addEventListener = $rindoWindow.addEventListener.bind($rindoWindow);
  var alert = $rindoWindow.alert.bind($rindoWindow);
  var blur = $rindoWindow.blur.bind($rindoWindow);
  var cancelAnimationFrame = $rindoWindow.cancelAnimationFrame.bind($rindoWindow);
  var cancelIdleCallback = $rindoWindow.cancelIdleCallback.bind($rindoWindow);
  var clearInterval = $rindoWindow.clearInterval.bind($rindoWindow);
  var clearTimeout = $rindoWindow.clearTimeout.bind($rindoWindow);
  var close = () => {};
  var confirm = $rindoWindow.confirm.bind($rindoWindow);
  var dispatchEvent = $rindoWindow.dispatchEvent.bind($rindoWindow);
  var focus = $rindoWindow.focus.bind($rindoWindow);
  var getComputedStyle = $rindoWindow.getComputedStyle.bind($rindoWindow);
  var matchMedia = $rindoWindow.matchMedia.bind($rindoWindow);
  var open = $rindoWindow.open.bind($rindoWindow);
  var prompt = $rindoWindow.prompt.bind($rindoWindow);
  var removeEventListener = $rindoWindow.removeEventListener.bind($rindoWindow);
  var requestAnimationFrame = $rindoWindow.requestAnimationFrame.bind($rindoWindow);
  var requestIdleCallback = $rindoWindow.requestIdleCallback.bind($rindoWindow);
  var setInterval = $rindoWindow.setInterval.bind($rindoWindow);
  var setTimeout = $rindoWindow.setTimeout.bind($rindoWindow);

  var CharacterData = $rindoWindow.CharacterData;
  var CSS = $rindoWindow.CSS;
  var CustomEvent = $rindoWindow.CustomEvent;
  var Document = $rindoWindow.Document;
  var DocumentFragment = $rindoWindow.DocumentFragment;
  var DocumentType = $rindoWindow.DocumentType;
  var DOMTokenList = $rindoWindow.DOMTokenList;
  var Element = $rindoWindow.Element;
  var Event = $rindoWindow.Event;
  var HTMLElement = $rindoWindow.HTMLElement;
  var IntersectionObserver = $rindoWindow.IntersectionObserver;
  var KeyboardEvent = $rindoWindow.KeyboardEvent;
  var MouseEvent = $rindoWindow.MouseEvent;
  var Node = $rindoWindow.Node;
  var NodeList = $rindoWindow.NodeList;
  var URL = $rindoWindow.URL;

  var console = $rindoWindow.console;
  var customElements = $rindoWindow.customElements;
  var history = $rindoWindow.history;
  var localStorage = $rindoWindow.localStorage;
  var location = $rindoWindow.location;
  var navigator = $rindoWindow.navigator;
  var performance = $rindoWindow.performance;
  var sessionStorage = $rindoWindow.sessionStorage;

  var devicePixelRatio = $rindoWindow.devicePixelRatio;
  var innerHeight = $rindoWindow.innerHeight;
  var innerWidth = $rindoWindow.innerWidth;
  var origin = $rindoWindow.origin;
  var pageXOffset = $rindoWindow.pageXOffset;
  var pageYOffset = $rindoWindow.pageYOffset;
  var screen = $rindoWindow.screen;
  var screenLeft = $rindoWindow.screenLeft;
  var screenTop = $rindoWindow.screenTop;
  var screenX = $rindoWindow.screenX;
  var screenY = $rindoWindow.screenY;
  var scrollX = $rindoWindow.scrollX;
  var scrollY = $rindoWindow.scrollY;
  var exports = {};

  function hydrateAppClosure($rindoWindow) {
    const window = $rindoWindow;
    const document = $rindoWindow.document;
    ${HYDRATE_APP_CLOSURE_START}
`;

export const HYDRATE_FACTORY_OUTRO = `
    /*hydrateAppClosure end*/
    hydrateApp(window, $rindoHydrateOpts, $rindoHydrateResults, $rindoAfterHydrate, $rindoHydrateResolve);
  }

  hydrateAppClosure($rindoWindow);
}
`;
