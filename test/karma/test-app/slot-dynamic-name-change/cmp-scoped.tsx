import { Component, h, Prop } from '@rindo/core';

@Component({
  tag: 'slot-dynamic-name-change-scoped',
  scoped: true,
})
export class SlotDynamicNameChangeScoped {
  @Prop() slotName = 'greeting';

  render() {
    return (
      <div>
        <slot name={this.slotName}></slot>
      </div>
    );
  }
}
