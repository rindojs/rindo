<p align="center">
  <a href="#">
    <img alt="rindo-logo" src="./rindo-logo.png" width="60">
  </a>
</p>

<h1 align="center">
  Rindo
</h1>

<p align="center">
  A compiler for generating <a href="https://www.webcomponents.org/introduction" target="_blank" rel="noopener noref">Web Components</a> using technologies like TypeScript and JSX, built by the <a href="https://family-js.web.app/">Family team</a>.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@rindo/core">
    <img src="https://img.shields.io/npm/v/@rindo/core.svg" alt="RindoJS is released under the MIT license." /></a>
  <a href="https://github.com/familyjs/rindo/blob/main/LICENSE.md">
    <img src="https://img.shields.io/badge/license-MIT-yellow.svg" alt="RindoJS is released under the MIT license." />
  </a>
  <a href="https://github.com/familyjs/rindo/blob/main/.github/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
</p>

<h2 align="center">
  <a href="https://rindojs.web.app/docs/getting-started#starting-a-new-project">Quick Start</a>
  <span> · </span>
  <a href="https://rindojs.web.app/docs/introduction">Documentation</a>
  <span> · </span>
  <a href="https://github.com/familyjs/rindo/blob/main/.github/CONTRIBUTING.md">Contribute</a>
</h2>

### Getting Started

Start a new project by following our quick [Getting Started guide](https://rindojs.web.app/docs/getting-started).
We would love to hear from you!
If you have any feedback or run into issues using Rindo, please file an [issue](https://github.com/familyjs/rindo/issues/new) on this repository.

### Examples
A Rindo component looks a lot like a class-based React component, with the addition of TypeScript decorators:
```tsx
import { Component, Prop, h } from '@rindo/core';

@Component({
  tag: 'my-component',            // the name of the component's custom HTML tag
  styleUrl: 'my-component.css',   // css styles to apply to the component
  shadow: true,                   // this component uses the ShadowDOM
})
export class MyComponent {
  // The component accepts two arguments:
  @Prop() first: string;
  @Prop() last: string;

   //The following HTML is rendered when our component is used
  render() {
    return (
      <div>
        Hello, my name is {this.first} {this.last}
      </div>
    );
  }
}
```

The component above can be used like any other HTML element:

```html
<my-component first="Rindo" last="JS"></my-component>
```

Since Rindo generates web components, they work in any major framework or with no framework at all.
In many cases, Rindo can be used as a drop in replacement for traditional frontend framework, though using it as such is certainly not required.

### Contributing

Thanks for your interest in contributing!
Please take a moment to read up on our guidelines for [contributing](https://github.com/familyjs/rindo/blob/main/CONTRIBUTING.md).
Please note that this project is released with a [Contributor Code of Conduct](https://github.com/familyjs/rindo/blob/main/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
