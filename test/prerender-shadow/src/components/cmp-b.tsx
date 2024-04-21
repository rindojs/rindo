import { Component, h } from '@rindo/core';

@Component({
  tag: 'cmp-b',
  shadow: true,
})
export class CmpB {
  render() {
    return <slot></slot>;
  }
}
