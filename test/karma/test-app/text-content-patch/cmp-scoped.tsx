import { Component, h } from '@rindo/core';

@Component({
  tag: 'text-content-patch-scoped',
  scoped: true,
})
export class TextContentPatchScoped {
  render() {
    return [<p>Top content</p>, <p>Bottom content</p>];
  }
}
