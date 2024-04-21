import { Component, Host, h } from '@rindo/core';

@Component({
  tag: 'cmp-label',
  scoped: true,
})
export class CmpLabel {
  render() {
    return (
      <Host>
        <label>
          <slot />
        </label>
      </Host>
    );
  }
}
