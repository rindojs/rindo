import { Component, Element, h } from '@rindo/core';

@Component({
  tag: 'element-cmp',
})
export class ElementCmp {
  @Element() element: HTMLElement;

  hostElementAttr = '';

  componentWillLoad() {
    this.hostElementAttr = this.element.getAttribute('host-element-attr');
  }

  render() {
    return <div>Hello, my name is {this.hostElementAttr}</div>;
  }
}
