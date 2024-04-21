import { Component, h } from '@rindo/core';

@Component({
  tag: 'cmp-client-scoped',
  styleUrl: 'cmp-client-scoped.css',
  scoped: true,
})
export class CmpClientScoped {
  render() {
    return (
      <section class="client-scoped">
        <slot></slot>
      </section>
    );
  }
}
