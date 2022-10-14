import { Diagnostic } from './diagnostics';


export interface CompileOptions {
  file?: string;
  componentMetadata?: 'runtimestatic' | 'compilerstatic' | string | undefined;
  proxy?: 'defineproperty' | string | undefined;
  module?: 'cjs' | 'esm' | string;
  componentExport?: 'customelement' | 'module' | string | undefined;
  script?: CompileScript;
  style?: 'static' | string | undefined;
  type?: RindoDataType;
  data?: RindoComponentData;
}

export interface CompileResults {
  diagnostics: Diagnostic[];
  code: string;
  map: any;
  inputFilePath: string;
  outputFilePath: string;
  inputOptions: CompileOptions;
  imports: { path: string; }[];
  componentMeta: any[];
}

export interface CompileScriptMinifyOptions {
  script?: CompileScript;
  pretty?: boolean;
}


export type CompileScript = 'latest' | 'esnext' | 'es2017' | 'es2015' | 'es5' | string | undefined;

export type RindoDataType = 'css' | 'js' | 'ts' | 'tsx' | 'jsx' | 'dts';

export interface ResolvedRindoData {
  type: RindoDataType;
  resolvedId: string;
  resolvedFilePath: string;
  resolvedFileName: string;
  resolvedFileExt: string;
  params: string;
  data: RindoComponentData;
  importee: string;
  importer: string;
  importerExt: string;
}

export interface RindoComponentData {
  tag: string;
  encapsulation?: string;
  mode?: string;
}
