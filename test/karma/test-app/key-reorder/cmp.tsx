import { Component, Prop, h } from '@rindo/core';

@Component({
  tag: 'key-reorder',
})
export class KeyReorder {
  @Prop() num?: number;

  render() {
    return <div>{this.num}</div>;
  }
}
