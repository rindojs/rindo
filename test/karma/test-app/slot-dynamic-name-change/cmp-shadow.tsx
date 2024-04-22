import { Component, h, Prop } from '@rindo/core';

@Component({
  tag: 'slot-dynamic-name-change-shadow',
  shadow: true,
})
export class SlotDynamicNameChangeShadow {
  @Prop() slotName = 'greeting';

  render() {
    return (
      <div>
        <slot name={this.slotName}></slot>
      </div>
    );
  }
}
