import { Component, Host, h } from '@rindo/core';

@Component({
  tag: 'host-attr-override',
  shadow: true,
})
export class HostAttrOverride {
  render() {
    return (
      <Host class="default" role="header">
        <slot></slot>
      </Host>
    );
  }
}
