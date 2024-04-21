/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Rindo compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLRindoElement, JSXBase } from "@rindo/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface CmpA {
    }
    interface CmpB {
    }
    interface CmpC {
    }
    interface CmpClientScoped {
    }
    interface CmpClientShadow {
    }
    interface CmpD {
        "uniqueId": string;
    }
    interface CmpScopedA {
    }
    interface CmpScopedB {
    }
    interface CmpTextBlue {
    }
    interface CmpTextGreen {
    }
    interface TestSvg {
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLRindoElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLCmpAElement extends Components.CmpA, HTMLRindoElement {
    }
    var HTMLCmpAElement: {
        prototype: HTMLCmpAElement;
        new (): HTMLCmpAElement;
    };
    interface HTMLCmpBElement extends Components.CmpB, HTMLRindoElement {
    }
    var HTMLCmpBElement: {
        prototype: HTMLCmpBElement;
        new (): HTMLCmpBElement;
    };
    interface HTMLCmpCElement extends Components.CmpC, HTMLRindoElement {
    }
    var HTMLCmpCElement: {
        prototype: HTMLCmpCElement;
        new (): HTMLCmpCElement;
    };
    interface HTMLCmpClientScopedElement extends Components.CmpClientScoped, HTMLRindoElement {
    }
    var HTMLCmpClientScopedElement: {
        prototype: HTMLCmpClientScopedElement;
        new (): HTMLCmpClientScopedElement;
    };
    interface HTMLCmpClientShadowElement extends Components.CmpClientShadow, HTMLRindoElement {
    }
    var HTMLCmpClientShadowElement: {
        prototype: HTMLCmpClientShadowElement;
        new (): HTMLCmpClientShadowElement;
    };
    interface HTMLCmpDElement extends Components.CmpD, HTMLRindoElement {
    }
    var HTMLCmpDElement: {
        prototype: HTMLCmpDElement;
        new (): HTMLCmpDElement;
    };
    interface HTMLCmpScopedAElement extends Components.CmpScopedA, HTMLRindoElement {
    }
    var HTMLCmpScopedAElement: {
        prototype: HTMLCmpScopedAElement;
        new (): HTMLCmpScopedAElement;
    };
    interface HTMLCmpScopedBElement extends Components.CmpScopedB, HTMLRindoElement {
    }
    var HTMLCmpScopedBElement: {
        prototype: HTMLCmpScopedBElement;
        new (): HTMLCmpScopedBElement;
    };
    interface HTMLCmpTextBlueElement extends Components.CmpTextBlue, HTMLRindoElement {
    }
    var HTMLCmpTextBlueElement: {
        prototype: HTMLCmpTextBlueElement;
        new (): HTMLCmpTextBlueElement;
    };
    interface HTMLCmpTextGreenElement extends Components.CmpTextGreen, HTMLRindoElement {
    }
    var HTMLCmpTextGreenElement: {
        prototype: HTMLCmpTextGreenElement;
        new (): HTMLCmpTextGreenElement;
    };
    interface HTMLTestSvgElement extends Components.TestSvg, HTMLRindoElement {
    }
    var HTMLTestSvgElement: {
        prototype: HTMLTestSvgElement;
        new (): HTMLTestSvgElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "cmp-a": HTMLCmpAElement;
        "cmp-b": HTMLCmpBElement;
        "cmp-c": HTMLCmpCElement;
        "cmp-client-scoped": HTMLCmpClientScopedElement;
        "cmp-client-shadow": HTMLCmpClientShadowElement;
        "cmp-d": HTMLCmpDElement;
        "cmp-scoped-a": HTMLCmpScopedAElement;
        "cmp-scoped-b": HTMLCmpScopedBElement;
        "cmp-text-blue": HTMLCmpTextBlueElement;
        "cmp-text-green": HTMLCmpTextGreenElement;
        "test-svg": HTMLTestSvgElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface CmpA {
    }
    interface CmpB {
    }
    interface CmpC {
    }
    interface CmpClientScoped {
    }
    interface CmpClientShadow {
    }
    interface CmpD {
        "uniqueId"?: string;
    }
    interface CmpScopedA {
    }
    interface CmpScopedB {
    }
    interface CmpTextBlue {
    }
    interface CmpTextGreen {
    }
    interface TestSvg {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "cmp-a": CmpA;
        "cmp-b": CmpB;
        "cmp-c": CmpC;
        "cmp-client-scoped": CmpClientScoped;
        "cmp-client-shadow": CmpClientShadow;
        "cmp-d": CmpD;
        "cmp-scoped-a": CmpScopedA;
        "cmp-scoped-b": CmpScopedB;
        "cmp-text-blue": CmpTextBlue;
        "cmp-text-green": CmpTextGreen;
        "test-svg": TestSvg;
    }
}
export { LocalJSX as JSX };
declare module "@rindo/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "cmp-a": LocalJSX.CmpA & JSXBase.HTMLAttributes<HTMLCmpAElement>;
            "cmp-b": LocalJSX.CmpB & JSXBase.HTMLAttributes<HTMLCmpBElement>;
            "cmp-c": LocalJSX.CmpC & JSXBase.HTMLAttributes<HTMLCmpCElement>;
            "cmp-client-scoped": LocalJSX.CmpClientScoped & JSXBase.HTMLAttributes<HTMLCmpClientScopedElement>;
            "cmp-client-shadow": LocalJSX.CmpClientShadow & JSXBase.HTMLAttributes<HTMLCmpClientShadowElement>;
            "cmp-d": LocalJSX.CmpD & JSXBase.HTMLAttributes<HTMLCmpDElement>;
            "cmp-scoped-a": LocalJSX.CmpScopedA & JSXBase.HTMLAttributes<HTMLCmpScopedAElement>;
            "cmp-scoped-b": LocalJSX.CmpScopedB & JSXBase.HTMLAttributes<HTMLCmpScopedBElement>;
            "cmp-text-blue": LocalJSX.CmpTextBlue & JSXBase.HTMLAttributes<HTMLCmpTextBlueElement>;
            "cmp-text-green": LocalJSX.CmpTextGreen & JSXBase.HTMLAttributes<HTMLCmpTextGreenElement>;
            "test-svg": LocalJSX.TestSvg & JSXBase.HTMLAttributes<HTMLTestSvgElement>;
        }
    }
}
