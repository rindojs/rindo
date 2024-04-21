import { setMode } from '@rindo/core';

export default function () {
  setMode((elm) => {
    return elm.getAttribute('mode');
  });
}
