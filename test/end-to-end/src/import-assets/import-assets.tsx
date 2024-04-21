import { Component, Host, h } from '@rindo/core';
import myText from './assets/my-text.txt';
import whateverHtml from './assets/whatever.html?format=text';
import familySvgUrl from './assets/family.svg';
import familySvgText from './assets/family.svg?format=text';

@Component({
  tag: 'import-assets',
})
export class AppRoot {
  render() {
    return (
      <Host>
        <div id="txt">{myText}</div>
        <div id="whatever-html">{whateverHtml}</div>
        <img id="family-svg-url" src={familySvgUrl} />
        <div id="family-svg-text">{familySvgText}</div>
      </Host>
    );
  }
}
