import { Component, h } from '@rindo/core';

@Component({
  tag: 'slot-basic-order',
})
export class SlotBasicOrder {
  render() {
    return <slot></slot>;
  }
}
