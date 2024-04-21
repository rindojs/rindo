import { Host, Component, h } from '@rindo/core';
import output from './output';

@Component({
  tag: 'lifecycle-nested-c',
  shadow: true,
})
export class Cmpc {
  async componentWillLoad() {
    output('componentWillLoad-c');
  }

  componentDidLoad() {
    output('componentDidLoad-c');
  }

  render() {
    return (
      <Host>
        <div>hello</div>
      </Host>
    );
  }
}
