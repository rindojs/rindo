<p align="center">
  <a href="#">
    <img alt="rindo-logo" src="./rindo-logo.png" width="60">
  </a>
</p>

<h1 align="center">
  Rindo
</h1>

<p align="center">
  A compiler for generating <a href="https://www.webcomponents.org/introduction">Web Components</a> 
</p>

[Rindo](https://rindojs.web.app/) is a simple compiler for generating Web Components and static site generated progressive web apps (PWA). Rindo was built by the [Family](https://familyjs-js.web.app/) team for its next generation of performant mobile and desktop Web Components.

Rindo combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool. It combines TypeScript, JSX, an asynchronous rendering pipeline to ensure smooth running animations and lazy-loading, to generate 100% standards-based Web Components that run on both [modern browsers and legacy browsers](https://rindojs.web.app/docs/browser-support).

Rindo components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Rindo can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Rindo also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).

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

To use this component, just use it like any other HTML element:

```html
<my-component first="Rindo" last="JS"></my-component>
```

## Thanks
Rindo's internal testing suite is supported by the [BrowserStack Open-Source Program](https://www.browserstack.com/open-source)
<br>
<a target="_blank" href="https://www.browserstack.com/"><img width="200" src="https://www.browserstack.com/images/layout/browserstack-logo-600x315.png"></a>
