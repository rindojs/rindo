# Declarations


## `index.ts`

Index of every declaration within Rindo's source for convenience. Exports both public and private declarations. Meant to only be used by Rindo's source code so `* as d from './declarations` is easy to use.


## `rindo-private`

Declarations like `CompilerCtx` and `BuildCtx` would be in here. Declarations in this file should always be safe to refactor and are never meant to be used by external code.


## `rindo-public-compiler`

Build time declarations for the compiler that can be publicly exposed, but this file itself is never directly imported by user code. Declarations like `Config` and `OutputTarget` would be in here.


## `rindo-public-runtime`

Clientside declarations for the runtime that can be publicly exposed, but this file itself is never directly imported by user code. Declarations like `HTMLRindoElement`, `JSXBase`, and `Component` would be in here.

This is also the file that would be copied to distribution `dist/types` directories. For example, a dist `dist/types/components.d.ts` file would start with `import { HTMLRindoElement, JSXBase } from './rindo.public';`, so the `rindo.public.runtime.d.ts` file should be a sibling. A distribution copy of Rindo Core declarations should not have a dependency of `@rindo/core`.


## `rindo-core`

The actual public declarations when `@rindo/core` is imported by developer code. This should be a minimal list that exports with specific declarations from `rindo.public.compiler` and `rindo.public.runtime`.


## `rindo-ext-modules`

The TypeScript declaration file used so that TypeScript can import `.svg` or `.css` files without throwing errors. Build steps will manually copy this to the correct location.
