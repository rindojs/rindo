import { Component, Listen, Prop } from '@rindo/core';

@Component({
  tag: 'listen-cmp',
})
export class ListenCmp {
  @Prop({ mutable: true }) opened = false;

  @Listen('click')
  handleClick() {
    this.opened = !this.opened;
  }
}
