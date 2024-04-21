import { Component, Host, h } from '@rindo/core';

@Component({
  tag: 'rindo-sibling',
})
export class RindoSibling {
  render() {
    return (
      <Host>
        <sibling-root>sibling-light-dom</sibling-root>
      </Host>
    );
  }
}
