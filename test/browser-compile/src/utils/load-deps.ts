export const loadDeps = async (resolveLookup: Map<string, string>, fs: Map<string, string>) => {
  resolveLookup.set('@rindo/core/internal/client', '/@rindo/core/internal/client/index.js');
  resolveLookup.set('@rindo/core/internal/app-data', '/@rindo/core/internal/app-data/index.js');

  await loadDep('/@rindo/core/compiler/rindo.js');

  const rollupDep: [string, unknown] = Object.entries(rindo.versions).find(
    (dep: [string, unknown]) => dep[0] === 'rollup',
  );
  await loadDep(`https://cdn.jsdelivr.net/npm/rollup@${rollupDep[1]}/dist/rollup.browser.js`);

  const fetchResults = await Promise.all([
    await fetch('/@rindo/core/internal/client/index.js'),
    await fetch('/@rindo/core/internal/client/shadow-css.js'),
    await fetch('/@rindo/core/internal/app-data/index.js'),
    await fetch('/@rindo/core/internal/client/css-shim.js'),
    await fetch('/@rindo/core/internal/client/dom.js'),
  ]);

  await Promise.all([
    fetchResults.map(async (r) => {
      const file = new URL(r.url).pathname;
      const code = await r.text();
      fs.set(file, code);
    }),
  ]);
};

const loadDep = (url: string) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.onload = () => {
      console.log('loaded dep:', url);
      setTimeout(resolve);
    };
    script.onerror = (e) => {
      console.log('error loading dep:', url);
      reject(e);
    };
    script.src = url;
    document.head.appendChild(script);
  });
};

declare const rindo: any;
