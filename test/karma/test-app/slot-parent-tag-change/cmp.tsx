import { Component, h, Prop } from '@rindo/core';

@Component({
  tag: 'slot-parent-tag-change',
})
export class SlotParentTagChange {
  @Prop() element = 'p';

  render() {
    return (
      <this.element>
        <slot></slot>
      </this.element>
    );
  }
}
