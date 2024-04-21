import { Component, h } from '@rindo/core';

@Component({
  tag: 'text-content-patch-scoped-with-slot',
  scoped: true,
})
export class TextContentPatchScopedWithSlot {
  render() {
    return [<p>Top content</p>, <slot></slot>, <p>Bottom content</p>, <slot name="suffix"></slot>];
  }
}
