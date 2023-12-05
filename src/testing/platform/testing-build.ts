import type * as d from '@rindo/core/internal';

export const Build: d.UserBuildConditionals = {
  isDev: true,
  isBrowser: true,
  isServer: false,
  isTesting: true,
};
