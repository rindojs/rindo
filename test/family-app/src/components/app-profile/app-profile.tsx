import { Component, Host, Prop, State, h } from '@rindo/core';
import { sayHello } from '../../helpers/utils';

@Component({
  tag: 'app-profile',
})
export class AppProfile {
  @State() state = false;
  @Prop() name: string;

  formattedName(): string {
    if (this.name) {
      return this.name.slice(0, 1).toUpperCase() + this.name.slice(1).toLowerCase();
    }
    return '';
  }

  render() {
    return (
      <Host>
        <fml-header>
          <fml-toolbar color="primary">
            <fml-buttons slot="start">
              <fml-back-button defaultHref="/" />
            </fml-buttons>
            <fml-title>Profile: {this.name}</fml-title>
          </fml-toolbar>
        </fml-header>

        <fml-content class="fml-padding">
          <p>
            {sayHello()}! My name is {this.formattedName()}. My name was passed in through a route param!
          </p>

          <fml-item>
            <fml-label>Setting ({this.state.toString()})</fml-label>
            <fml-toggle checked={this.state} onFmlChange={(ev) => (this.state = ev.detail.checked)} />
          </fml-item>
        </fml-content>
      </Host>
    );
  }
}
