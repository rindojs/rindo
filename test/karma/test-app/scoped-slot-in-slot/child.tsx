import { Component, h } from '@rindo/core';

@Component({
  tag: 'fml-child',
  scoped: true,
})
export class Child {
  render() {
    return (
      <div style={{ display: 'flex', gap: '13px' }}>
        <slot name="suffix" />
      </div>
    );
  }
}
