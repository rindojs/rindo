import { Component, Host, h } from '@rindo/core';

@Component({
  tag: 'non-shadow-wrapper',
  scoped: true,
  styles: `
    :host {
      display: block;
      border: 3px solid red;
    }
  `,
})
export class Wrapper {
  render() {
    return (
      <Host>
        <strong style={{ color: 'red' }}>Non-shadow Wrapper Start</strong>
        <p>Wrapper Slot before</p>
        <slot>Wrapper Slot Fallback</slot>
        <p>Wrapper Slot after</p>
        <strong style={{ color: 'red' }}>Non-shadow Wrapper End</strong>
      </Host>
    );
  }
}
