import { Component, h } from '@rindo/core';

@Component({
  tag: 'my-simple',
  shadow: false,
})
export class MySimple {
  render() {
    return <span>simple!</span>;
  }
}
