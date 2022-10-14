import * as d from '../../declarations';


export function rindoBuildConditionalsPlugin(build: d.Build, namespace: string) {
  const buildData = `
export const BUILD = ${JSON.stringify(build)};
export const NAMESPACE = '${namespace}';
`;

  return {
    resolveId(id: string) {
      if (id === '@rindo/core/build-conditionals') {
        return {
          id,
        };
      }
      return null;
    },

    load(id: string) {
      if (id === '@rindo/core/build-conditionals') {
        return buildData;
      }
      return null;
    }
  };
}
