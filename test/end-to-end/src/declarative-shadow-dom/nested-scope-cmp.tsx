import { Component, h } from '@rindo/core';

@Component({
  tag: 'nested-scope-cmp',
  styleUrl: 'nested-scope-cmp.css',
  scoped: true,
})
export class NestedScopeCmp {
  render() {
    return (
      <div class="some-scope-class">
        <slot></slot>
      </div>
    );
  }
}
