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
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLRindoElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
    }
}
export { LocalJSX as JSX };
declare module "@rindo/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
        }
    }
}