import { Component, h } from '@rindo/core';

@Component({
  tag: 'cmp-a',
})
export class CmpA {
  render() {
    return <cmp-b>CmpALightDom</cmp-b>;
  }
}
