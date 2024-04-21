import { Component, Prop, h } from '@rindo/core';

@Component({
  tag: 'shadow-dom-slot-nested',
  styles: `
    header {
      color: red;
    }
  `,
  shadow: true,
})
export class ShadowDomSlotNested {
  @Prop() i?: number;

  render() {
    return [
      <header>shadow dom: {this.i}</header>,
      <footer>
        <slot />
      </footer>,
    ];
  }
}
