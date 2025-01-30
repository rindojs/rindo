import { Component, h } from '@rindo/core';

@Component({
  tag: 'nested-cmp-child',
  shadow: true,
})
export class NestedCmpChild {
  render() {
    return (
      <div class="some-other-class">
        <slot></slot>
      </div>
    );
  }
}
