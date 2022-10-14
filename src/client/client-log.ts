
export const RINDO_DEV_MODE = ['%c[RINDO-DEV-MODE]', 'color:#4c47ff;font-weight: bold'];

export const consoleDevError = (...m: any[]) => console.error(...RINDO_DEV_MODE, ...m);

export const consoleDevWarn = (...m: any[]) => console.warn(...RINDO_DEV_MODE, ...m);

export const consoleDevInfo = (...m: any[]) => console.info(...RINDO_DEV_MODE, ...m);

export const consoleError = (e: any) => console.error(e);
