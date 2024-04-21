import { Component, h } from '@rindo/core';
import rindoLogo from './rindo-logo.svg';

@Component({
  tag: 'image-import',
})
export class ImageImport {
  render() {
    return (
      <div>
        <img src={rindoLogo} />
      </div>
    );
  }
}
