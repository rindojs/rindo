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

Rindo components are plain ES6/TypeScript classes with some decorator metadata.

Create new components by creating files with a `.tsx` extension, such as `my-component.tsx`, and place them in `src/components`.

```typescript
import { Component, Prop } from '@rindo/core';

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


## Naming Components

When creating new component tags, we recommend _not_ using `rindo` in the component name (ex: `<rindo-datepicker>`). This is because the generated component has little to nothing to do with Rindo; it's just a web component!

Instead, use a prefix that fits your company or any name for a group of related components. For example, all of the [Navify](https://navifyframework.web.app/docs/) generated web components use the prefix `nav`.


## Hosting the app

Rindo components run directly in the browser through script includes just like normal Custom Elements (because they are just that!), and run by using the tag just like any other HTML component:

Here's an example `index.html` file that runs a Rindo app:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
  <script src="build/app.js"></script>
</head>
<body>
  <my-component first="Rindo" last="JS"></my-component>
</body>
</html>
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


## Browser Support

Web Components, specifically Custom Elements, are natively supported in Chrome and Safari and are coming to both Edge and Firefox. A dynamic polyfill loader is already included in order to only load the polyfills for the browsers that are missing specific features.

 - Chrome (and all Chromium based browsers)
 - Safari
 - Edge
 - Firefox
 - IE 11


## Polyfills

Rindo includes a subset of the `core-js` polyfills for old browsers like IE11, `fetch` and conditionally downloads the [Custom Elements v1](https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements) only when it's needed for modern browsers (EDGE and old versions of Firefox.)


### Internet Explorer 11

Browsers that do not support native ESM (at the moment, only IE11 and older) will download a subset of [`core-js`](https://github.com/zloirock/core-js).

This subset is generated using the [`core-js-builder` tool](https://github.com/zloirock/core-js/tree/master/packages/core-js-builder) with the following configuration:

```js
require('core-js-builder')({
  targets: 'ie 11',
  modules: [
    'es',
    'web.url',
    'web.url.to-json',
    'web.url-search-params',
    'web.dom-collections.for-each'
  ],
  blacklist: [
    'es.math',
    'es.date',
    'es.symbol',
    'es.array-buffer',
    'es.data-view',
    'es.typed-array',
    'es.reflect',
    'es.promise'
  ]
});
```

In addition, the following set of polyfills are also included:

 - [Promise](https://github.com/stefanpenner/es6-promise)
 - [fetch()](https://github.com/github/fetch)
 - [CSS variables](https://github.com/navify/rindo/tree/main/src/client/polyfills/css-shim): We implemented our own CSS variables polyfill that integrates into the Rindojs runtime.

### All browsers

Some modern browsers like Edge do not include native support for Web Components. In that case, we conditionally load the [Custom Elements v1](https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements) polyfill.


## License

 - [MIT](./LICENSE.md)

