import { setMode } from '@rindo/core';

const global = () => {
  setMode(
    (elm: any) => elm.mode || elm.getAttribute('mode') || document.documentElement.getAttribute('mode') || 'buford',
  );
};
export default global;
