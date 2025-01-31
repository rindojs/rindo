import { Component, h } from '@rindo/core';

@Component({
  tag: 'nested-cmp-parent',
  shadow: true,
  styleUrl: 'parent-cmp.css',
})
export class NestedCmpParent {
  render() {
    return (
      <div class="some-class">
        <nested-scope-cmp>
          <slot></slot>
        </nested-scope-cmp>
      </div>
    );
  }
}
