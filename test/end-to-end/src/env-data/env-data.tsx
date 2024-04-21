import { Component, h, Env, Host } from '@rindo/core';

@Component({
  tag: 'env-data',
})
export class EnvData {
  render() {
    return (
      <Host>
        <p>foo: {Env.foo}</p>
        <p>HOST: {Env.HOST}</p>
      </Host>
    );
  }
}
