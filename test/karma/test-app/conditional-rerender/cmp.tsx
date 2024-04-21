import { Component, h } from '@rindo/core';

@Component({
  tag: 'conditional-rerender',
})
export class ConditionalRerender {
  render() {
    return (
      <main>
        <slot />
        <nav>Nav</nav>
      </main>
    );
  }
}
