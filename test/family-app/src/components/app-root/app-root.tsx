import { Component, h } from '@rindo/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  render() {
    return (
      <fml-app>
        <fml-router useHash={false}>
          <fml-route url="/" component="app-home" />
          <fml-route url="/profile/:name" component="app-profile" />
        </fml-router>

        <fml-split-pane contentId="main" when="sm">
          <fml-menu contentId="main">
            <fml-header>
              <fml-toolbar color="primary">
                <fml-title>Family PWA</fml-title>
              </fml-toolbar>
            </fml-header>
            <fml-content>
              <fml-list>
                <fml-list-header>
                  <fml-label>Navigation</fml-label>
                </fml-list-header>
                <fml-menu-toggle autoHide={false}>
                  <fml-item href="/">
                    <fml-icon slot="start" name="home" />
                    <fml-label>Home</fml-label>
                  </fml-item>
                </fml-menu-toggle>
                <fml-menu-toggle autoHide={false}>
                  <fml-item href="/profile/family">
                    <fml-icon slot="start" name="person" />
                    <fml-label>Family's Profile</fml-label>
                  </fml-item>
                </fml-menu-toggle>
              </fml-list>
            </fml-content>
          </fml-menu>

          <fml-nav id="main" />
        </fml-split-pane>
      </fml-app>
    );
  }
}
