import { BuildOptions } from './options';


export function getBanner(opts: BuildOptions, fileName: string, license = false) {
  return [
    `/*${license ? '!' : ''}`,
    ` ${fileName} v${opts.version} | MIT Licensed | https://rindojs.web.app`,
    ` */`
  ].join('\n');
}
