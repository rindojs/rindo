import { Component, h } from '@rindo/core';

@Component({
  tag: 'class-component',
  shadow: true,
})
export class ClassComponent {
  render() {
    return (
      <div>
        <h1>I am a class component</h1>
        <slot></slot>
      </div>
    );
  }
}
