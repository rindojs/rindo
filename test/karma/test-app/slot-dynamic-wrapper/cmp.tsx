import { Component, Prop, h } from '@rindo/core';

@Component({
  tag: 'slot-dynamic-wrapper',
})
export class SlotDynamicWrapper {
  @Prop() tag = 'section';

  render() {
    return (
      <this.tag>
        <slot />
      </this.tag>
    );
  }
}
