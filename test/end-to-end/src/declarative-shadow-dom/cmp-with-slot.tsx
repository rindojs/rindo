import { Component, h } from '@rindo/core';

@Component({
  tag: 'cmp-with-slot',
  shadow: true,
})
export class ServerVSClientCmp {
  render() {
    return (
      <div>
        <div>
          <div>
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }
}
