import { Component, Host, h } from '@rindo/core';

@Component({
  tag: 'app-home',
})
export class AppHome {
  render() {
    return (
      <Host>
        <fml-header>
          <fml-toolbar color="primary">
            <fml-buttons slot="start">
              <fml-menu-button />
            </fml-buttons>
            <fml-title>Home</fml-title>
          </fml-toolbar>
        </fml-header>

        <fml-content class="fml-padding">
          <p>
            Welcome to the PWA Toolkit. You can use this starter to build entire apps with web components using Rindo
            and familyjs/core! Check out the README for everything that comes in this starter out of the box and check
            out our docs on <a href="https://rindojs.web.app">rindojs.web.app</a> to get started.
          </p>

          <fml-button href="/profile/family" expand="block">
            Profile page
          </fml-button>
        </fml-content>
      </Host>
    );
  }
}
