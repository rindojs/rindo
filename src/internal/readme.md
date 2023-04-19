# @rindo/core/internal

NOTE!! The `@rindo/core/internal` package is not meant to be consumed directly by anything other than Rindo internals. It is its own package so that it can be resolved by Rindo, but breaking changes can/will happen at any time. This isn't a "use at your own discretion" moment, but it's more of a "never use this because your code will break" fact.


## `index.ts`

This is the main entry file for all of Rindo's internals, such as Rindo's runtime and compiler types. However, any public references to the internals are found in `declarations/rindo-core.ts` and `internal/default.ts`. This file is largely used to generate all of Rindo's internal types. But the transpiled JavaScript from this is not exposed.


## `default.ts`

By default, when Rindo resolves `@rindo/core/internal`, it's going to assume it wants the `client` internals (rather than `hydrate`). So by default, `@rindo/core/internal` actually points to `@rindo/core/internal/client`.
