import { Component, h } from '@rindo/core';

@Component({
  tag: 'nested-cmp-child',
  styleUrl: `nested-child-cmp.css`,
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
