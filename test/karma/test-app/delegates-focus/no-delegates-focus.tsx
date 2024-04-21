import { Component, h, Host } from '@rindo/core';

@Component({
  tag: 'no-delegates-focus',
  shadow: {
    delegatesFocus: false,
  },
  styleUrl: 'delegates-focus.css',
})
export class DelegatesFocus {
  render() {
    return (
      <Host>
        <input />
      </Host>
    );
  }
}
