import { Component, h } from '@rindo/core';

@Component({
  tag: 'fml-host',
  scoped: true,
})
export class Host {
  render() {
    return (
      <div>
        <fml-parent>
          <slot name="label" slot="label" />
          <slot name="suffix" slot="suffix" />
          <slot name="message" slot="message" />
        </fml-parent>
      </div>
    );
  }
}
