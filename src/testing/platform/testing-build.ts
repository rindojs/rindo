import * as d from '@rindo/core/internal';

export const Build: d.UserBuildConditionals = {
  isDev: true,
  isBrowser: false,
  isServer: true,
  isTesting: true,
};
