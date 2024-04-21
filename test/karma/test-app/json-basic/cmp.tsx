import { Component, h } from '@rindo/core';
import { foo } from './data.json';

@Component({
  tag: 'json-basic',
})
export class JsonBasic {
  render() {
    return <div id="json-foo">{foo}</div>;
  }
}
