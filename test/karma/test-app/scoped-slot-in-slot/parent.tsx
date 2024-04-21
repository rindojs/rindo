import { Component, Fragment, h } from '@rindo/core';

@Component({
  tag: 'fml-parent',
  scoped: true,
})
export class Parent {
  render() {
    return (
      <Fragment>
        <label>
          <slot name="label" />
        </label>
        <fml-child>
          <slot name="suffix" slot="suffix" />
        </fml-child>
        <slot name="message" />
      </Fragment>
    );
  }
}
