/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Rindo compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLRindoElement, JSXBase } from "@rindo/core/internal";
export namespace Components {
    interface PrehydratedStyles {
    }
}
declare global {
    interface HTMLPrehydratedStylesElement extends Components.PrehydratedStyles, HTMLRindoElement {
    }
    var HTMLPrehydratedStylesElement: {
        prototype: HTMLPrehydratedStylesElement;
        new (): HTMLPrehydratedStylesElement;
    };
    interface HTMLElementTagNameMap {
        "prehydrated-styles": HTMLPrehydratedStylesElement;
    }
}
declare namespace LocalJSX {
    interface PrehydratedStyles {
    }
    interface IntrinsicElements {
        "prehydrated-styles": PrehydratedStyles;
    }
}
export { LocalJSX as JSX };
declare module "@rindo/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "prehydrated-styles": LocalJSX.PrehydratedStyles & JSXBase.HTMLAttributes<HTMLPrehydratedStylesElement>;
        }
    }
}