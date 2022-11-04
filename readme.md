# Rindo

A Compiler for Web Components and PWAs

```bash
npm init rindo
```

[Rindo](https://rindojs.web.app/) is a simple compiler for generating Web Components and progressive web apps (PWA). Rindo was built by the [Navify Framework](http://navifyframework.web.app/) team for its next generation of performant mobile and desktop Web Components.

Rindo combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool. It takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run on both [modern browsers and legacy browsers](#browser-support) back to Internet Explorer 11.

Rindo components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Rindo can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Rindo also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).

*Note: Rindo and [Navify](https://navifyframework.web.app/) are completely independent projects. Rindo does not prescribe any specific UI framework, but Navify is the largest user of Rindo (today!)*


## Getting Started

To create a new project using an interactive cli, run:

```bash
npm init rindo
```

To start developing your new Rindo project, run:

```bash
npm start
```


## Creating components

Rindo components are TypeScript classes with decorator metadata. The decorators themselves are purely build-time annotations so the compiler can read metadata about each component, and removed entirely for smaller efficient components.

Create new components by creating files with a `.tsx` extension, such as `my-component.tsx`, and place them in `src/components`.

```tsx
import { Component, Prop, h } from '@rindo/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css'
})
export class MyComponent {

  @Prop() first: string;

  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, my name is {this.first} {this.last}
      </div>
    );
  }
}
```

Note: the `.tsx` extension is required, as this is the standard for TypeScript classes that use JSX.

To use this component, just use it like any other HTML element:

```html
<my-component first="Rindo" last="JS"></my-component>
```


## API

The API for rindo closely mirrors the API for Custom Elements v1.

### Components

| Decorator      | Description                             |
| -------------- | ---                                     |
| `@Component()` | Indicate a class is a Rindo component. |
|                |                                         |
| `@Prop()`      | Creates a property that will exist on the element and be data-bound to this component.  |
| `@State()`     | Creates a local state variable that will not be placed on the element. |
| `@Method()`    | Expose specific methods to be publicly accessible. |

### All browsers

Some modern browsers like Edge do not include native support for Web Components. In that case, we conditionally load the [Custom Elements v1](https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements) polyfill.


## License

 - [MIT](./LICENSE.md)

