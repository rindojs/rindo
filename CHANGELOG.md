# 🏈 [4.26.0](https://github.com/rindojs/rindo/compare/v4.25.3...v4.26.0) (2025-12-11)


### Features

* **ssr:** shadow dom components can render as declarative-shadow-dom or as `'scoped'` ([705cc3f](https://github.com/rindojs/rindo/commit/705cc3f1bad127d9b1ca039d3fca77a316e3fc8a))



## 🍧 [4.25.3](https://github.com/rindojs/rindo/compare/v4.25.2...v4.25.3) (2025-12-10)


### Bug Fixes

* **runtime:** don't include loadModule logic in hydrate runtime ([36d3137](https://github.com/rindojs/rindo/commit/36d3137eae6e051cdf25bfc53d8e1c556031218f))



## 🍖 [4.25.2](https://github.com/rindojs/rindo/compare/v4.25.0...v4.25.2) (2025-12-06)


### Bug Fixes

* **dist-custom-elements:** stop duplicate @rindo/core ([6ec6db9](https://github.com/rindojs/rindo/commit/6ec6db9f9785fa5bc6949bd56ca546f56dced9a9))
* **runtime:** allow `classList` to be null ([aa6b857](https://github.com/rindojs/rindo/commit/aa6b85708074e1c0131be947b0e7d2e2e6ad2298))
* **runtime:** clean `deferredConnectedCallbacks` array on `disconnectedCallback` ([6002180](https://github.com/rindojs/rindo/commit/600218051055bcb234de4fb5ac6ba6e59ee8e99a))
* **runtime:** don't flag html tag with hydrate flag anymore ([d347be8](https://github.com/rindojs/rindo/commit/d347be8ebc1bfd32d6db364c46758afc5c537834))
* **runtime:** fix `NotFoundError` in `addStyle` function with `referenceNode` parent check ([e8fac18](https://github.com/rindojs/rindo/commit/e8fac18f1f6cf5f07222ea8aa66d498db7af6eb5))
* **runtime:** SSR class handling breaks normal class handling ([e0d797c](https://github.com/rindojs/rindo/commit/e0d797c1ea91ceff353225ab3fc153dafd48d204))
* **ssr:** correctly resolve slots during hydration ([9b77308](https://github.com/rindojs/rindo/commit/9b773087d1a60e6b4c46b6d685191138a38c9dcb))
* **ssr:** exponential perf slow down ([3a32f0b](https://github.com/rindojs/rindo/commit/3a32f0b2ead724fd67ea9caf72c1aacee1062f28))
* **ssr:** multiple component instances sharing initial properties ([7d4d7e1](https://github.com/rindojs/rindo/commit/7d4d7e1eb8a3f6b4e4af8ac7ae4642769bb5f041))
* **ssr:** stop stripping comment nodes ([d10b1f5](https://github.com/rindojs/rindo/commit/d10b1f59ca6e4b3fd96ddc5df6803fd77d87271e))



## 🎆 [4.25.1](https://github.com/rindojs/rindo/compare/v4.25.0...v4.25.1) (2025-12-05)


### Bug Fixes

* **dist-custom-elements:** stop duplicate @rindo/core ([6ec6db9](https://github.com/rindojs/rindo/commit/6ec6db9f9785fa5bc6949bd56ca546f56dced9a9))
* **runtime:** allow `classList` to be null ([aa6b857](https://github.com/rindojs/rindo/commit/aa6b85708074e1c0131be947b0e7d2e2e6ad2298))
* **runtime:** fix `NotFoundError` in `addStyle` function with `referenceNode` parent check ([e8fac18](https://github.com/rindojs/rindo/commit/e8fac18f1f6cf5f07222ea8aa66d498db7af6eb5))
* **runtime:** SSR class handling breaks normal class handling ([e0d797c](https://github.com/rindojs/rindo/commit/e0d797c1ea91ceff353225ab3fc153dafd48d204))



# 🚩 [4.25.0](https://github.com/rindojs/rindo/compare/v4.24.0...v4.25.0) (2025-12-05)


### Bug Fixes

* **SSR:** class prop / state reactivity for target es2022 ([e4876ba](https://github.com/rindojs/rindo/commit/e4876ba901aeacc1e9014ed3d00f1657b0cb0bc1))
* **test:** stop re-running prototype augment in spec tests ([1d4c373](https://github.com/rindojs/rindo/commit/1d4c37364932efe658e9fa378cd5a11c251714ff))


### Features

* **mock-doc:** `assignednodes` and `assignedElements` ([13e50c5](https://github.com/rindojs/rindo/commit/13e50c5d6ae8fa535ed21f1dce4275cf43b05c4a))
* **runtime:** Add element to component error handler. Enables error boundaries ([4df8597](https://github.com/rindojs/rindo/commit/4df8597a6f8e862f401e12f10da7bcf58ee53731))



# 🐞 [4.24.0](https://github.com/rindojs/rindo/compare/v4.23.2...v4.24.0) (2025-11-12)


### Bug Fixes

* **runtime:** clean up ancestor nodes on resolve ([551999c](https://github.com/rindojs/rindo/commit/551999cc4cad03616da6a4ef4e80cbb9f9c79e5f))
* **testing:** update puppeteer, default to `new` headless ([569f9e6](https://github.com/rindojs/rindo/commit/569f9e65be8310fad63171cdbab58f961c79fb18))


### Features

* **runtime:** `@Prop` / `@State` now work with runtime decorators ([049a645](https://github.com/rindojs/rindo/commit/049a645a973de1c78c0f3adaeadb6acbd0c0bc45))
* **slot-polyfill:** patch `insertBefore` & slotted node `parentNode` ([8f7d84e](https://github.com/rindojs/rindo/commit/8f7d84ef5c774599d18a37a9cccce4bfd60a78ea))



## 🕹 [4.23.2](https://github.com/rindojs/rindo/compare/v4.23.1...v4.23.2) (2025-09-05)


### Bug Fixes

* **runtime:** clear up `rootAppliedStyles` ([9b7d94d](https://github.com/rindojs/rindo/commit/9b7d94dd2e4732a58555d5e127ab891f1ee48020))



## 🚑 [4.23.1](https://github.com/rindojs/rindo/compare/v4.23.0...v4.23.1) (2025-09-05)


### Bug Fixes

* correctly handle svg class attribute within `parseClassList` ([dd2e33f](https://github.com/rindojs/rindo/commit/dd2e33fb9b3c4f611ea3f1068bc8ac6ae4857b78))
* **mock-doc:** don't force template tags to have a shadowroot ([88a6c7c](https://github.com/rindojs/rindo/commit/88a6c7ce41c8ede5245fbaa079ab85873fff51d7))
* runtime decorators ([b5215b2](https://github.com/rindojs/rindo/commit/b5215b24d5e12742887f29648db47d9e738c33c8))
* **scoped:** fixes for `<slot />` and slotted nodes ([1f6f68a](https://github.com/rindojs/rindo/commit/1f6f68a60312310afe80bb3f849ebea5d08ef1c6))
* **SSR:** patch `scoped: true` SSR-ed, slotted nodes next/prev sibling accessors ([5f447a2](https://github.com/rindojs/rindo/commit/5f447a2c693c8812c9333d081a444dfdc43335a5))



# 🧀 [4.23.0](https://github.com/rindojs/rindo/compare/v4.22.3...v4.23.0) (2025-09-04)


### Bug Fixes

* `patchChildSlotNodes` & `scopedSlotTextContentFix` not being applied ([855717c](https://github.com/rindojs/rindo/commit/855717c0814c3b1b4f1a4e60046e44564c0b6da0))
* change `hasHostListenerAttached` from var to protoype property ([b98e0bb](https://github.com/rindojs/rindo/commit/b98e0bbb9adb51bd5395f7c4064773a33ed0d07a))
* **mock-doc:** don't show error message for SSR workflows ([e031f3e](https://github.com/rindojs/rindo/commit/e031f3ea40448727b0d860cbb043b09cdcc34593))
* rewrite SSR client-side hydration ([9403593](https://github.com/rindojs/rindo/commit/9403593fd9431cfc3239f39ab098eb1b737f8a86))
* **runtime:** ensure `Node` is defined ([8ca7e1d](https://github.com/rindojs/rindo/commit/8ca7e1d14923893ed83338b25f4e614859de0f6a))
* stop `experimentalScopedSlotChanges` warning msg on startup ([e68ff08](https://github.com/rindojs/rindo/commit/e68ff0831d7b74cedfe06ddb95bbaff28cb4ee62))


### Features

* prop `get` `set` new ([5223cbf](https://github.com/rindojs/rindo/commit/5223cbfa61853ab2a45a7a89a591463c81787a95))



## 🌙 [4.22.3](https://github.com/rindojs/rindo/compare/v4.22.2...v4.22.3) (2025-01-31)


### Bug Fixes

* **mock-doc:** return empty string if anchor has no href attribute ([5f7cc15](https://github.com/rindojs/rindo/commit/5f7cc1518a7cf780eeeedc04136f14e95c87fa30))
* **runtime:** correctly call proxied `formAssociated` callbacks ([a2bdc35](https://github.com/rindojs/rindo/commit/a2bdc35c794b74047e5b49a7710b04f6e4096379))
* **runtime:** ensure event listener are not registered twice ([942586d](https://github.com/rindojs/rindo/commit/942586d13793f07c4ae273997eb10017f8bf3e73))
* **runtime:** scope id fix for component children for typescript issue ([0e4e81c](https://github.com/rindojs/rindo/commit/0e4e81c6c27476bd816ffd08c0af72aad1a6e524))



## 🐝 [4.22.2](https://github.com/rindojs/rindo/compare/v4.22.1...v4.22.2) (2025-01-31)


### Bug Fixes

* **docs:** escape backticks in type or default value columns ([a9e4460](https://github.com/rindojs/rindo/commit/a9e4460ef018f335cbfd97f38590ab1a96d0ee1b))
* **types:** add `controlslist` to html declarations ([84fb487](https://github.com/rindojs/rindo/commit/84fb4874dbe89865d596680d36ed042f7d08aac1))


### Features

* **runtime:** make shadow root adopt scoped component styles ([e788d7c](https://github.com/rindojs/rindo/commit/e788d7c2d31cdc57e1108d912abeeeadecedda09))



## 🎳 [4.22.1](https://github.com/rindojs/rindo/compare/v4.22.0...v4.22.1) (2025-01-31)


### Bug Fixes

* **mock-doc:** add missing `ShadowRoot` window primitive ([fe7f263](https://github.com/rindojs/rindo/commit/fe7f263d295f42a4caa181d15b54255a3fdb2bec))
* **mock-doc:** get native primitive from `globalThis` ([cab07aa](https://github.com/rindojs/rindo/commit/cab07aaa9370992e3074a79abfd9ff780faf6b17))
* **runtime:** create unique host ids ([a6d40cf](https://github.com/rindojs/rindo/commit/a6d40cffec31ac63a69f193d57d9e4b4bf9f9c09))
* **runtime:** merge styles within ShadowRoot into a single node ([f319c9b](https://github.com/rindojs/rindo/commit/f319c9bfabbec8f3aff040d0197aa4f580bb27fb))



# ☀️ [4.22.0](https://github.com/rindojs/rindo/compare/v4.21.0...v4.22.0) (2025-01-30)


### Bug Fixes

* **compiler:** add reserved keyword ([cd2db23](https://github.com/rindojs/rindo/commit/cd2db23594634196bf1ce3393867285c1f80a243))
* **compiler:** handle file rename in watch mode ([bcecaee](https://github.com/rindojs/rindo/commit/bcecaee9777819f9e2b93003e08bc99059b55ff4))
* **compiler:** no generate custom output ([f2ad2da](https://github.com/rindojs/rindo/commit/f2ad2da42535cb8917facea2ab0a64c45ce7addc))
* **declarations:** add missing event handler types ([38f00ec](https://github.com/rindojs/rindo/commit/38f00ecf8c4355be094f37a1e4f9cb1597acf967))
* **hydrate:** Add missing alias to hydrate build to fix app globals ([7550957](https://github.com/rindojs/rindo/commit/755095719c7594e0186c92d8e74bcd75eeb7b767))
* **hydrate:** support style modes in hydrate modules ([9930603](https://github.com/rindojs/rindo/commit/993060315f17d6bd65cc4c0d105fc9ea81bd5aea))
* **mock-doc:** avoid double hydration of components ([e9106f3](https://github.com/rindojs/rindo/commit/e9106f32b207a9b3ddbdf9cdf46442559ee1a7f6))
* **mock-doc:** provide mock for resize observer ([6d827ae](https://github.com/rindojs/rindo/commit/6d827ae238f56bde227652f52270419a81ace99f))
* **runtime:** ensure `referenceNode` is child node of `styleContainerNode` ([dbddccf](https://github.com/rindojs/rindo/commit/dbddccf33d2186a3813b530b735f9bfe7453bc84))
* **runtime:** scoped slot append/prepend correct order after interaction ([f7a49d8](https://github.com/rindojs/rindo/commit/f7a49d8ee5689e49c182b053ef50e617fefc97eb))
* **scripts:** fix Esbuild scripts to allow to run on Windows ([12b399b](https://github.com/rindojs/rindo/commit/12b399b98acd1da72ba12ec7c611a3a467b21bab))


### Features

* **compiler:** customize readme mermaid diagram colors ([37a1114](https://github.com/rindojs/rindo/commit/37a1114b54b92560e85ab9200b9163fbb0164944))
* **typescript:** Update to 5.5.4 ([fa06086](https://github.com/rindojs/rindo/commit/fa060861f3cee9ceaf6a8c2e0aa27bac01cfc954))



# ⛵️ [4.21.0](https://github.com/rindojs/rindo/compare/v4.20.0...v4.21.0) (2025-01-28)


### Bug Fixes

* **compiler:** default `asyncLoading` build conditional to `true` ([242a39d](https://github.com/rindojs/rindo/commit/242a39d2c683aa0f6945e0f6a91c5e9459a7627b))
* **compiler:** prefer `localName` over `originalName` by running an empty check on `originalName` ([7bacaa8](https://github.com/rindojs/rindo/commit/7bacaa8ebb59792597f2563701817dcce7295687))
* **compiler:** verify parent node when validating component members ([7634560](https://github.com/rindojs/rindo/commit/76345602fafa069b0075b10c8811e6496397986b))
* **runtime:** have fallback for style setting ([2ed1704](https://github.com/rindojs/rindo/commit/2ed1704af75e450e70dfa3a8cadc9a25c1680cbd))
* **runtime:** only use setter if existing ([fd72882](https://github.com/rindojs/rindo/commit/fd7288215b191ed78176c24e5697bec990a24c35))
* **runtime:** place scoped component styles after preconnect links but before custom styles ([d435bd2](https://github.com/rindojs/rindo/commit/d435bd2f54cdbd7a730952426d1c18a7d11c55f6))
* **runtime:** provide second arg to `insertBefore` ([71a3e59](https://github.com/rindojs/rindo/commit/71a3e597945a7835d01a886d2c1c2e8b0e646534))
* **runtime:** render component styles at the end of the head tag ([bbf2c58](https://github.com/rindojs/rindo/commit/bbf2c5843012da4dfaf297c4ac7cf0167affce37))
* **runtime:** update call to `prepend` to remove `null` node ([000dd4c](https://github.com/rindojs/rindo/commit/000dd4cf02bf7b944b65024071b610a20561894b))
* **typescript:** fix documentation on `serializeShadowRoot` flag ([3dfa8cf](https://github.com/rindojs/rindo/commit/3dfa8cf06bc6936087e6c7cb033eab647e28043d))


### Features

* **compiler:** allow ignore pattern for copy task ([2fa3a32](https://github.com/rindojs/rindo/commit/2fa3a3293e1d86b52a6605600b045457b13285b5))



# 🚢 [4.20.0](https://github.com/rindojs/rindo/compare/v4.19.1...v4.20.0) (2025-01-26)


### Bug Fixes

* add `@rindo/core/testing/jest-preset` to export map ([2918f2c](https://github.com/rindojs/rindo/commit/2918f2c8aba126d3bb1aae8fb2dc631105fd9512))
* **ci:** revert usage of `pull_request_target` trigger ([c5c11c7](https://github.com/rindojs/rindo/commit/c5c11c7a3b60d0c032b42fc54e439290f3f4dd68))
* **compiler:** don't allow `shadowRoot` getter to avoid hydration issues ([396e80b](https://github.com/rindojs/rindo/commit/396e80b3330bcc8cdd78fbe37be75147dbae8113))
* **compiler:** no need for commenting selectors anymore ([c906725](https://github.com/rindojs/rindo/commit/c906725bbca798a014d6d0827c34fa7ce8298698))
* **compiler:** respect project tsconfig watch options ([8a76d30](https://github.com/rindojs/rindo/commit/8a76d3066c7e1b475b5f0a5cf826f6bf4cafafa4))
* **compiler:** run copy task after other output targets ([843f8db](https://github.com/rindojs/rindo/commit/843f8dba7aa7d4c333ed8fd4b88a19f06acafb8a))
* **core:** add missing `screenshot` export ([bfd338b](https://github.com/rindojs/rindo/commit/bfd338bbfd670264a9b76a547fa0181d6c6d7432))
* **hydrate:** ensure `beforeHydrateFn` and `afterHydrateFn` always return a function ([afe0507](https://github.com/rindojs/rindo/commit/afe0507cbc06849153a53a489dce4b425bf665e5))
* **hydrate:** partially revert ([a48d984](https://github.com/rindojs/rindo/commit/a48d984fdf0124f69c01d2acef6ec8d21c72f51b))
* **hydrate:** support server side rendering of components with listener ([80e6897](https://github.com/rindojs/rindo/commit/80e6897e177955c2e8af2eeabcf2c6e73011dc7d))
* **runtime:** hydrate shadow dom first ([70111dd](https://github.com/rindojs/rindo/commit/70111dd66b9efd8bdbfb4fce1f5072e0ff60eb8a))
* **runtime:** make `isSameVnode` return false on initial render in a hydration case ([a05673c](https://github.com/rindojs/rindo/commit/a05673c427045e99e375119e0e07d569d440d90c))
* **testing:** add testing sub module to export map ([e2ddb42](https://github.com/rindojs/rindo/commit/e2ddb42b7cfc46d1cc42f93ae48432b8db10b64b))
* **testing:** update Jest types ([4509626](https://github.com/rindojs/rindo/commit/4509626f6e89703670bf185ca8f1d64e6362592e))
* update TypeScript to v5.5 ([420b2ce](https://github.com/rindojs/rindo/commit/420b2ce9a54302ef06821e12d5ab149bca7a7ec6))

### Note
As we’ve made further enhancements to support declarative Shadow DOM, the Rindo team has determined that it’s not feasible to allow users to render a shadow component as a scoped component after compilation, such as by calling `renderToString` with `serializeShadowRoot: false`. This is because Rindo compiles styles for either shadow or scoped mode during the compilation process, embedding these styles into the hydrate module. Once this compilation is complete, the styles cannot be transformed to support the other mode. Recognizing that this change would impact the current functionality, the Rindo team has decided to proceed with this update. Moving forward, we recommend serializing all components marked with shadow: true as declarative Shadow DOM.



## 🤓 [4.19.2](https://github.com/rindojs/rindo/compare/v4.19.1...v4.19.2) (2025-01-24)


### Bug Fixes

* **hydrate:** partially revert ([a48d984](https://github.com/rindojs/rindo/commit/a48d984fdf0124f69c01d2acef6ec8d21c72f51b))
* **hydrate:** support server side rendering of components with listener ([80e6897](https://github.com/rindojs/rindo/commit/80e6897e177955c2e8af2eeabcf2c6e73011dc7d))
* **testing:** add testing sub module to export map ([e2ddb42](https://github.com/rindojs/rindo/commit/e2ddb42b7cfc46d1cc42f93ae48432b8db10b64b))



## 🔔 [4.19.1](https://github.com/rindojs/rindo/compare/v4.19.0...v4.19.1) (2024-12-23)


### Bug Fixes

* **compiler:** account for package imports in aliasing ([8ec2a30](https://github.com/rindojs/rindo/commit/8ec2a3037963297be275bd0edbc839755268af51))
* **compiler:** try to create web worker with the `workerPath` before falling back to `blob` ([5d488e8](https://github.com/rindojs/rindo/commit/5d488e82960370209d5ee89841979b735b1f0f44))
* **hydrate:** change type resolve order ([96af66b](https://github.com/rindojs/rindo/commit/96af66b8eb3c4f16bee1196d894a850403d48e5f))
* **internal:** add cli sub package to export map ([9052658](https://github.com/rindojs/rindo/commit/9052658965510b73ec20903becda2931f6d814c5))



# 🐧 [4.19.0](https://github.com/rindojs/rindo/compare/v4.18.3...v4.19.0) (2024-12-19)

### Bug Fixes

- **compiler:** support rollup's external input option ([b155c66](https://github.com/rindojs/rindo/commit/b155c66c07f5bea533781daf2fd0e4d6fc557f64))
- **declarations:** fix weekly build ([b04fc01](https://github.com/rindojs/rindo/commit/b04fc01afd40dc1003368f12abfaee015629b010))
- **emit:** don't emit test files ([1f5676b](https://github.com/rindojs/rindo/commit/1f5676b2086426200fa469ae416e0bd1e89ae197))
- **hydrate:** support vdom annotation in nested dsd structures ([aa99726](https://github.com/rindojs/rindo/commit/aa99726f90b0c9a0295753a88c733bf3085f9e2b))
- label attribute not toggling input ([1217ea5](https://github.com/rindojs/rindo/commit/1217ea58821438cdf1455ec72cb62d55d144b463))
- **mock-doc:** expose `ShadowRoot` and `DocumentFragment` globals ([642de46](https://github.com/rindojs/rindo/commit/642de46b637dfd71013f2cecbd7063c026ac4901))
- **runtime:** allow watchers to fire w/ no Rindo members ([9d3a9bb](https://github.com/rindojs/rindo/commit/9d3a9bb5221a90de564ca437481be734c3d96a2c))
- **runtime:** catch errors in async lifecycle methods ([297a163](https://github.com/rindojs/rindo/commit/297a163c505dab0b7446cb1e15351adff5892ee1))
- **runtime:** don't register listener before connected to DOM ([95866c3](https://github.com/rindojs/rindo/commit/95866c371cd6eafb9e85078f893cd703f040370f))
- **runtime:** properly assign style declarations ([cd3b874](https://github.com/rindojs/rindo/commit/cd3b874c8d5bac07527d32063ed67c9a664bf8ee))
- **testing:** allow to re-use pages across it blocks ([ca7046f](https://github.com/rindojs/rindo/commit/ca7046f483dc62f2d3eafdb6e401e3f78184a8d9))
- **typescript:** remove unsupported label property ([b9d1cb1](https://github.com/rindojs/rindo/commit/b9d1cb162fe7d43390848808fb6bc28c7a2eb960))

### Features

- **cli:** support generation of sass and less files ([7e0b8a7](https://github.com/rindojs/rindo/commit/7e0b8a7220d0a1f30cafc1f4c2548c0db57e658e))
- **compiler:** generate export maps on build ([626f291](https://github.com/rindojs/rindo/commit/626f2917c23acc7b1736b52b07a66891114975bd))
- **complier:** support type import aliasing ([964229b](https://github.com/rindojs/rindo/commit/964229b3ebe5710cc65f43d89d68b5730ff54d70))
- **runtime:** support declarative shadow DOM ([bee6483](https://github.com/rindojs/rindo/commit/bee648342ab242a89f806d2083f667d71bb86325))
- **testing:** add `toHaveLastReceivedEventDetail` event spy matcher ([00192ca](https://github.com/rindojs/rindo/commit/00192ca1c8d3a549422596d3b3f6bbb9c5e200be))
- **testing:** allow to disable network error logging via `logFailingNetworkRequests` option ([7a1f83d](https://github.com/rindojs/rindo/commit/7a1f83d7ffa73eea4b49a6394e79d703801629d2))
- **testing:** expose `captureBeyondViewport` in `pageCompareScreenshot` ([ff832ca](https://github.com/rindojs/rindo/commit/ff832ca51971e64ac771565ce07647f20e33f5c1))

## 🚣 [4.18.3](https://github.com/rindojs/rindo/compare/v4.18.2...v4.18.3) (2024-12-12)

### Bug Fixes

- **esbuild:** remove all `node:` imports from glob script to keep support for Jest v26 ([bfb4f7e](https://github.com/rindojs/rindo/commit/bfb4f7eb34926779b531912483f9d2f249479d0c))
- **mock-doc:** support `toDataURL` method in `canvas` ([1d998a2](https://github.com/rindojs/rindo/commit/1d998a22a20b87e2901c687e7e38db4a3bac964c))
- **runtime:** add missing intermediate parents scope ids to the elements ([9e9e335](https://github.com/rindojs/rindo/commit/9e9e335f2c1a5ee4aa48aeeb817962cb45a5380e))

### Features

- **ci:** remove need to compile scripts ([aa065ce](https://github.com/rindojs/rindo/commit/aa065ce06b06fbd3b7ed2899dc21a09dac856c93))

## 🌶 [4.18.2](https://github.com/rindojs/rindo/compare/v4.18.1...v4.18.2) (2024-12-01)

### Bug Fixes

- **e2e:** allow to fetch CSS variables assigned to host elements ([a632372](https://github.com/rindojs/rindo/commit/a632372cd7da19506881bb4fd1a766b024488b3c))
- **hydrate:** respect `HydratedFlag` configuration in hydrate script ([fff9935](https://github.com/rindojs/rindo/commit/fff99356776aed0d32ab1ba31b120b4152671107))
- **runtime:** always throw if component can not be loaded ([f941626](https://github.com/rindojs/rindo/commit/f941626b37fa732d8de5d05e6cab53e02d8088b2))
- **runtime:** support watch for components with custom tag names ([0c71425](https://github.com/rindojs/rindo/commit/0c71425e4979e8ab171a5920ae5b493a4e4cf150))
- **runtime:** throw proper error if component is loaded with invalid runtime ([ff1a988](https://github.com/rindojs/rindo/commit/ff1a988a3f96f88878834c09fe71f43a7f64dffa))
- **types:** move `autofocus` attr/prop definition to `HTMLAttributes` ([e992c61](https://github.com/rindojs/rindo/commit/e992c61f2bbd384fd6bf28d7fae9d12ad8c70c1e))

## 🐣 [4.18.1](https://github.com/rindojs/rindo/compare/v4.18.0...v4.18.1) (2024-12-01)

### Bug Fixes

- **build:** do not copy polyfills to the OT unless building es5 ([4a72bfb](https://github.com/rindojs/rindo/commit/4a72bfb6f496356f1f924683d0d5db27585ab07b))
- **compiler:** Allow `OutputTargetCustom` to be called on `devMode` ([d0d1960](https://github.com/rindojs/rindo/commit/d0d1960cf20a6ec8d01b01ac36e22e883d49222a))
- **compiler:** deprecate `scriptDataOpts` [ci skip] ([0ffd197](https://github.com/rindojs/rindo/commit/0ffd197aa4255b56cd3261f4e1cc78dce4bb8b70))
- **declarations:** Attribute `ping` is missing on `AnchorHTMLAttributes` ([89e1467](https://github.com/rindojs/rindo/commit/89e1467fb9fd525cc3d692570bfda338127c8967))
- **runtime:** add root scope id to the user provided nested children as classname ([61e13a3](https://github.com/rindojs/rindo/commit/61e13a36ff753330747d49e1ee4f6caad3699618))

# 🚘 [4.18.0](https://github.com/rindojs/rindo/compare/v4.17.2...v4.18.0) (2024-08-29)

### Bug Fixes

- **hydrate:** output track elements as void elms ([6c81280](https://github.com/rindojs/rindo/commit/6c81280814479b45872ff1b10c6100c987e8ec79))
- **runtime:** add root scope id to the nested child as classname ([f4b62c0](https://github.com/rindojs/rindo/commit/f4b62c0ae160709b0c8e0f50954c54d6b804fbd1))
- **testing:** support functional components in unit tests ([5d4bd25](https://github.com/rindojs/rindo/commit/5d4bd25d34f175b3dcc062e92d39519518fc9ed7))

### Features

- **docs:** add style mode to `docs-json` output ([23b8230](https://github.com/rindojs/rindo/commit/23b823003d43d4f41cc2d54f3d5fa20e74c1b60d))

## 🚙 [4.17.2](https://github.com/rindojs/rindo/compare/v4.17.1...v4.17.2) (2024-05-15)

### Bug Fixes

- **build:** bundle size issue ([8a5da32](https://github.com/rindojs/rindo/commit/8a5da322a3e45759258dd8016f49fffb312ff099))
- **compiler:** recognize loud comments when generating style docs ([9d6060e](https://github.com/rindojs/rindo/commit/9d6060ead619f743bce17f3f5b9bf2376014d1a4))

## 🌵 [4.17.1](https://github.com/rindojs/rindo/compare/v4.17.0...v4.17.1) (2024-05-15)

### Bug Fixes

- **cli:** prevent generate task from crashing ([02c1a31](https://github.com/rindojs/rindo/commit/02c1a3101956fbe7ebff973ff2af5a663aaf2023))

# 🐉 [4.17.0](https://github.com/rindojs/rindo/compare/v4.16.0...v4.17.0) (2024-05-15)

### Bug Fixes

- **docs:** merge together style docs from multiple CSS files ([f301220](https://github.com/rindojs/rindo/commit/f3012204aeb7381f2aa6ebc4442bf003ac60bb0a))
- **docs:** respect custom README content when writing to a custom path ([fb2cec8](https://github.com/rindojs/rindo/commit/fb2cec85176263d1d7f3cafba031c8a30a4418e2))
- **slot-fallback:** fix hiding fallback slot content issue when the slotted element is a text node ([34220e3](https://github.com/rindojs/rindo/commit/34220e3877fda3b0d62727a7e532ead7c7d9cc3a))
- **testing:** perform string -> boolean type casting for Jest config ([d050a65](https://github.com/rindojs/rindo/commit/d050a652c248decc0bac21dc8a1303160055102d))

# 🎰 [4.16.0](https://github.com/rindojs/rindo/compare/v4.15.0...v4.16.0) (2024-04-23)

### Bug Fixes

- **cli:** fix a bug in CLI argument parsing ([8f1b907](https://github.com/rindojs/rindo/commit/8f1b9077b7586b27c5dbdee07aefdbf6e4501e38))
- **testing:** prevent `find` from throwing error when query has no match ([dba99f1](https://github.com/rindojs/rindo/commit/dba99f1f4a3f1f7baa4a0f898ff91ead28b198a8))

### Features

- **dev-server:** dark mode support ([b8c62c8](https://github.com/rindojs/rindo/commit/b8c62c86298258c5df2a63b47eee56f455079e5d))

# 🍔 [4.15.0](https://github.com/rindojs/rindo/compare/v4.14.1...v4.15.0) (2024-04-23)

### Features

- **compiler:** perform automatic key insertion in more situations ([bdf5a45](https://github.com/rindojs/rindo/commit/bdf5a45991f1d1649a4eb91e643b58bdc2f242d8))

## 🍾 [4.14.1](https://github.com/rindojs/rindo/compare/v4.14.0...v4.14.1) (2024-04-23)

### Bug Fixes

- **compiler:** don't mistake aliased paths for collections imports ([38ddc3e](https://github.com/rindojs/rindo/commit/38ddc3e5f972bcd39c2f2ec4bfb5f9af5f41df2c))
- **runtime:** nested multiple default slot relocation ([3c6b2aa](https://github.com/rindojs/rindo/commit/3c6b2aa1994e8d49490c611cbe0d5e8c98327b26))
- **runtime:** prevent ref callbacks from being called too early ([55dd1c1](https://github.com/rindojs/rindo/commit/55dd1c113f4a93593f83b07cd38329cb7f41bd67))

# 🌞 [4.14.0](https://github.com/rindojs/rindo/compare/v4.13.0...v4.14.0) (2024-04-23)

### Bug Fixes

- **mock-doc:** provide a local name ([c31246f](https://github.com/rindojs/rindo/commit/c31246f3d9884331727374a24ae14ddef06098cd))
- **mock-doc:** resolve type issue for `localName` ([4576d66](https://github.com/rindojs/rindo/commit/4576d668d6b929725473d56a01dcf327959f555d))

### Features

- **testing:** allow to set screenshot timeout option in Jest v28+ ([6d89542](https://github.com/rindojs/rindo/commit/6d89542802e0e81aa51fa82f80284a61e5a0b2c5))
- **testing:** support deep piercing with Puppeteer ([c6eef59](https://github.com/rindojs/rindo/commit/c6eef59ba4fa5a301e69216ba595d609aea466bd))

# 🎤 [4.13.0](https://github.com/rindojs/rindo/compare/v4.12.6...v4.13.0) (2024-04-22)

### Bug Fixes

- **compiler:** allow to set custom root directory ([a37ade0](https://github.com/rindojs/rindo/commit/a37ade06f52eb3727b74c84b9de315f0151c27bc))
- **compiler:** don't validate references for [@prop](https://github.com/prop), [@method](https://github.com/method) and [@event](https://github.com/event) decorator ([74f171b](https://github.com/rindojs/rindo/commit/74f171ba720fd4398b4c61f1667b3913e85bb2f2))
- **renderer:** fix conditional rendering issue ([4954bc7](https://github.com/rindojs/rindo/commit/4954bc73da4fe6918578162d2c18f8d089e38b21))
- **renderer:** fix missing slot ref callback handling ([fcea686](https://github.com/rindojs/rindo/commit/fcea6869510c8d4fe068de0a7d7df2787337cb40))
- **runtime:** remove `forceUpdate` in `appendChild` patch ([9ecd395](https://github.com/rindojs/rindo/commit/9ecd395256602711d375c9ea89bc8eb9b5eb6f0b))
- **sys:** fix expected types for `createNodeLogger` and `createNodeSys` ([aa4e2cb](https://github.com/rindojs/rindo/commit/aa4e2cb5e59bd476ffe68d8c84dc962915bf899c))
- **testing:** use viewport for Puppeteer screenshot clip dimensions ([1418704](https://github.com/rindojs/rindo/commit/14187044e0dec0f121ffb8b0e06d3ef0de58fe47))

### Features

- **dev-server:** add ping route ([faae714](https://github.com/rindojs/rindo/commit/faae714837fa536e6a171bb81a6d4b32da88a634))
- **typescript:** Update dependency typescript to ~5.4.0 ([0079ad0](https://github.com/rindojs/rindo/commit/0079ad093bee40f5c373fe53fd808017228ebf28))

## 🚡 [4.12.6](https://github.com/rindojs/rindo/compare/v4.12.5...v4.12.6) (2024-04-22)

### Bug Fixes

- **cli:** move version logging earlier in CLI to allow `-v`, `--version` ([201e996](https://github.com/rindojs/rindo/commit/201e996ff770eb2a58a4c5b5e34c616e096d7ede))
- **compiler:** fix generated import statement ([b4eba42](https://github.com/rindojs/rindo/commit/b4eba4258acd817aa359a83046a326456a60f2ab))
- **test:** ensure screenshot dir is cleaned up ([ab87dcf](https://github.com/rindojs/rindo/commit/ab87dcfc34d7595b91ab0db92aaaf1076268fb83))

### Features

- **compiler:** update glob and minimatch dependencies ([beb02b1](https://github.com/rindojs/rindo/commit/beb02b10d72467cec3971ff384f80cef70f1741f))

## ⛳️ [4.12.5](https://github.com/rindojs/rindo/compare/v4.12.4...v4.12.5) (2024-04-22)

### Bug Fixes

- **custom-elements:** hydrate on client side ([73d6b84](https://github.com/rindojs/rindo/commit/73d6b84821125908e4ae99363489bfb53fda415c))

## 👒 [4.12.4](https://github.com/rindojs/rindo/compare/v4.12.3...v4.12.4) (2024-04-22)

### Bug Fixes

- **build:** address issue with dynamic import, wite, and lahm ([bc2f41a](https://github.com/rindojs/rindo/commit/bc2f41a1ed9571c3ab5b57392c241cd1cf3c8d7d))

## 🚃 [4.12.3](https://github.com/rindojs/rindo/compare/v4.12.2...v4.12.3) (2024-04-22)

### Bug Fixes

- **compiler:** point crypto import at `crypto` instead of `node:crypt` ([cd8a85a](https://github.com/rindojs/rindo/commit/cd8a85aa13e18ccaff4f2846ffb9f4a7bf1155b1))
- **runtime:** replace `innerHTML` with `textContent` for CSS injection ([b45211e](https://github.com/rindojs/rindo/commit/b45211e3beae40b968d383778cdf3a95022cc41b))

## 🌏 [4.12.2](https://github.com/rindojs/rindo/compare/v4.12.1...v4.12.2) (2024-04-22)

### Bug Fixes

- **compiler:** support async globalScripts functions ([84a875e](https://github.com/rindojs/rindo/commit/84a875e18731888217b2208711fc4ca67dfdae5b))
- **mock-doc:** overwrite parentElement in MockHTMLElement to return null ([bee97ef](https://github.com/rindojs/rindo/commit/bee97ef65dcb9590e2d607aea76adfaca1e299bc))

## 📻 [4.12.1](https://github.com/rindojs/rindo/compare/v4.12.0...v4.12.1) (2024-04-22)

### Bug Fixes

- **mock-doc:** improve error message when `:scope` selector is used ([764574b](https://github.com/rindojs/rindo/commit/764574bd6d82e90fab55facd712e28521f1b654d))
- **runtime:** dynamic slot name change ([c436b40](https://github.com/rindojs/rindo/commit/c436b40edef1ff218529252050061826c42cfcbc))
- **runtime:** only generate lazy build CSS when there are component tags ([8018841](https://github.com/rindojs/rindo/commit/801884199815f03975af98e3f302d444431a1a9e))

# 🐗 [4.12.0](https://github.com/rindojs/rindo/compare/v4.2.1...v4.12.0) (2024-04-22)

### Bug Fixes

- **compiler:** restrict config extras slot fix flags ([1503866](https://github.com/rindojs/rindo/commit/1503866346c4c98addae58f1b090eb1048a2cad1))

## 💯 [4.2.1](https://github.com/rindojs/rindo/compare/v4.2.0...v4.2.1) (2024-04-21)

### Bug Fixes

- **compiler:** add heritage clauses earlier in native transform ([6ed0665](https://github.com/rindojs/rindo/commit/6ed066506a4fab6f166654ac190d87cb17e3e95b))

# 🏕 [4.2.0](https://github.com/rindojs/rindo/compare/v4.2.0-0...v4.2.0) (2024-02-18)

### Bug Fixes

- **compiler:** resolve implicit enum types ([f22fae7](https://github.com/rindojs/rindo/commit/f22fae73737862eec14e2e2260486e0823eb2321))
- **runtime:** patch methods for scoped slot `append`, `prepend`, and `insertAdjacent` ([c14a31e](https://github.com/rindojs/rindo/commit/c14a31ecb2cedb9f112722196ddb96e98c7b3a48))

### Features

- **typescript:** upgrade to TypeScript 5.1 ([4582471](https://github.com/rindojs/rindo/commit/4582471fecf8beff423a7f73809ce3a8becb9833))

# 🐕 [4.2.0-0](https://github.com/rindojs/rindo/compare/v4.1.0...v4.2.0-0) (2024-02-18)

### Bug Fixes

- **compiler:** resolve implicit enum types ([f22fae7](https://github.com/rindojs/rindo/commit/f22fae73737862eec14e2e2260486e0823eb2321))
- **runtime:** patch methods for scoped slot `append`, `prepend`, and `insertAdjacent` ([c14a31e](https://github.com/rindojs/rindo/commit/c14a31ecb2cedb9f112722196ddb96e98c7b3a48))

### Features

- **typescript:** upgrade to TypeScript 5.1 ([4582471](https://github.com/rindojs/rindo/commit/4582471fecf8beff423a7f73809ce3a8becb9833))

# 🦀 [4.1.0](https://github.com/rindojs/rindo/compare/v4.0.5...v4.1.0) (2023-12-05)

### Bug Fixes

- **runtime:** adds a testing check to the forceUpdate method ([6c40192](https://github.com/rindojs/rindo/commit/6c401924e26c297250923c228db68c6f37cb6e2b))
- **typings:** add crossorigin html attr to img ([6a62cd8](https://github.com/rindojs/rindo/commit/6a62cd812035e14309fa032140e6017a3c8e5c6f))

### Features

- **compiler:** include `getAssetPath` in generated export statement ([6751fd9](https://github.com/rindojs/rindo/commit/6751fd9324887f57f293d12d7bfc816e5b9a55c3))
- **config:** add experimentalSlotFixes config value ([3f3f876](https://github.com/rindojs/rindo/commit/3f3f8767b1db42d77f1b2adf8720b7143dfaf830))

## 😋 [4.0.5](https://github.com/rindojs/rindo/compare/v4.0.4...v4.0.5) (2023-12-05)

### Bug Fixes

- **compiler:** match tsconfig include paths properly ([b51cec4](https://github.com/rindojs/rindo/commit/b51cec4ea97b0a9564e5ecd693827854ddc9d007))

### Reverts

- chore(deps): update dependency puppeteer to v21 ([8587f7a](https://github.com/rindojs/rindo/commit/8587f7a4514735f6a5f941bb09e7a363d2905b17))

## 🛥 [4.0.4](https://github.com/rindojs/rindo/compare/v4.0.3...v4.0.4) (2023-12-05)

### Bug Fixes

- **runtime:** `forceUpdate` calls only execute when in a browser env ([e1005b4](https://github.com/rindojs/rindo/commit/e1005b431541dd7d58cd691b755af98ad5eb477f))
- **typings:** add additional transition events to DOMAttributes ([8c21dd4](https://github.com/rindojs/rindo/commit/8c21dd4cc5eabc4c09585e398499a25457e8ee81))

## 🐖 [4.0.3](https://github.com/rindojs/rindo/compare/v4.0.2...v4.0.3) (2023-12-04)

### Bug Fixes

- **compiler:** custom elements relative typedef import paths ([055678b](https://github.com/rindojs/rindo/commit/055678b23735e23c82e4f188899a555338dd9a8b))
- **docs-json:** use dts-bundle-generator to bundle types for docs-json ([9404cb6](https://github.com/rindojs/rindo/commit/9404cb65dc51e27cc87af66ef6a098824f88f17a))
- **runtime:** add onSelect to textarea and input ([e35899f](https://github.com/rindojs/rindo/commit/e35899f38b83fef5a5741755425d10fdb000aaff))
- **runtime:** handle lazy-instance promises for connected & disconnected callbacks ([f9cf35f](https://github.com/rindojs/rindo/commit/f9cf35f3c05da10ab896ac897915782d33954249))
- **runtime:** override attrs set on Host with values from host element ([ec95b4f](https://github.com/rindojs/rindo/commit/ec95b4f9bd40847bb905528ea1edefa8c883ce7c))
- **testing:** remove use of `emulate` field in `E2EPage()` ([8c10e8b](https://github.com/rindojs/rindo/commit/8c10e8b0061f991313af05d1d2ff0b41d37f2dd4))

## 🍪 [4.0.2](https://github.com/rindojs/rindo/compare/v4.0.1...v4.0.2) (2023-12-03)

### Bug Fixes

- **compiler:** ensures transformed paths are relative paths for `dist-collection` ([ef14ded](https://github.com/rindojs/rindo/commit/ef14ded3e995e3ea1cf0d641302c4424169e8bf4))
- **compiler:** handle `[@supports](https://github.com/supports)` blocks when scoping css ([092d870](https://github.com/rindojs/rindo/commit/092d8707a2047c3678002fc1279ba754382d7ffc))
- **compiler:** only create one class member when transforming `@Element()` decorators ([c70c5a1](https://github.com/rindojs/rindo/commit/c70c5a16f715b1a3f468b8e70ebdaaa4e8e878f5))
- **compiler:** sourcemap errors for dist-custom-elements + dist-hydrate-script ([d0db3a7](https://github.com/rindojs/rindo/commit/d0db3a7de603f3b81cb4c94bc3949c5f213e0dea))
- **compiler:** sourcemap generation without ext runtime ([8a506bc](https://github.com/rindojs/rindo/commit/8a506bc9c4f38962adb2d9aaa2cba693696923e9))
- **lazy:** adjust the type of `defineCustomElements` ([3e2e12a](https://github.com/rindojs/rindo/commit/3e2e12a993b4a4f5c5879b64b2d9e6c6fb74051b))
- **mock-doc:** adjust matchMedia mock return ([9059bc0](https://github.com/rindojs/rindo/commit/9059bc0b5f5f5d5a33af40b1d1fb8d7ac22cc180))
- **output-targets:** fix path normalization logic ([ff46ece](https://github.com/rindojs/rindo/commit/ff46eceebece6775ec023e649b6346958ff0b5d7))
- **rollup-config:** deprecate BundlingConfig#namedExports ([60c1bbf](https://github.com/rindojs/rindo/commit/60c1bbf23d16b63a155f637955be99d120d088fc))
- **runtime:** properly type color-interpolation-filter ([e4ff49d](https://github.com/rindojs/rindo/commit/e4ff49d3e82f62f483745aef63fda55717404de2))

## 🏑 [4.0.1](https://github.com/rindojs/rindo/compare/v4.0.0...v4.0.1) (2023-07-17)

### Bug Fixes

- **compiler:** address when a home module cannot be found ([60c7d34](https://github.com/rindojs/rindo/commit/60c7d3406fce2d436e266c402566e3bb4eb7577a))
- **compiler:** normalize recommended path for validation ([2be9dce](https://github.com/rindojs/rindo/commit/2be9dce455101c2d3e638b50f4098fbb74b50c66))

# 🐹 [4.0.0](https://github.com/rindojs/rindo/compare/v3.4.1...v4.0.0) (2023-07-17)

# 🍬 [4.0.0-rc.0](https://github.com/rindojs/rindo/compare/v4.0.0-beta.2...v4.0.0-rc.0) (2023-07-16)

# 🐅 [4.0.0-beta.2](https://github.com/rindojs/rindo/compare/v4.0.0-beta.0...v4.0.0-beta.2) (2023-07-16)

# 👑 [4.0.0-beta.1](https://github.com/rindojs/rindo/compare/v4.0.0-beta.0...v4.0.0-beta.1) (2023-07-13)

# 🐇 [4.0.0-beta.0](https://github.com/rindojs/rindo/compare/v3.3.0...v4.0.0-beta.0) (2023-06-02)

### Bug Fixes

- **e2e:** honor devtools and browserDevtools settings ([4597d1f](https://github.com/rindojs/rindo/commit/4597d1f04bd2bdc4039234105f95206bbedb745a))

## 🎇 [3.4.1](https://github.com/rindojs/rindo/compare/v3.4.0...v3.4.1) (2023-07-16)

### Bug Fixes

- **compiler:** fix issue with aliased paths getting cut off ([e171f1f](https://github.com/rindojs/rindo/commit/e171f1f1f3bdb2cd0b9d863f8b763a07db9f0b96))
- **compiler:** reorder tsconfig#path transforms ([b4ac60d](https://github.com/rindojs/rindo/commit/b4ac60df6726e3ea750e415c2cbd6ac796db8023))

# 📺 [3.4.0](https://github.com/rindojs/rindo/compare/v3.3.1...v3.4.0) (2023-07-16)

### Bug Fixes

- **compiler:** handle static members with rindo decorators ([eda78b3](https://github.com/rindojs/rindo/commit/eda78b33b41c2cc4adbbb1bfb8e95ba2e78cbfb4))
- **runtime:** add autocomplete to textarea ([b258daf](https://github.com/rindojs/rindo/commit/b258daf550df4b740571144d678d0a99968b37e1))
- **runtime:** issue with update-component and patched Promise ([09357db](https://github.com/rindojs/rindo/commit/09357dbead4d1a656865d46863a24338301c1eb9))

### Features

- **compiler:** primary package output target validation ([45e5c6d](https://github.com/rindojs/rindo/commit/45e5c6dd7cd29534ab055550413f5ec7d08964bf))

## 🍈 [3.3.1](https://github.com/rindojs/rindo/compare/v3.3.0...v3.3.1) (2023-07-16)

### Bug Fixes

- **compiler:** handle ts 5.0 static members ([56e34a7](https://github.com/rindojs/rindo/commit/56e34a74eb186fe7870110b9eb3e467bf32589ae))
- **e2e:** honor devtools and browserDevtools settings ([4597d1f](https://github.com/rindojs/rindo/commit/4597d1f04bd2bdc4039234105f95206bbedb745a))

# 🍝 [3.3.0](https://github.com/rindojs/rindo/compare/v3.2.4...v3.3.0) (2023-06-01)

### Bug Fixes

- **compiler:** components typedef path aliases ([fc90275](https://github.com/rindojs/rindo/commit/fc90275eda26faee552b5b740c508d25cf05e977))

### Features

- **testing:** support puppeteer's 'headless': 'new' ([1fade6d](https://github.com/rindojs/rindo/commit/1fade6dcf2b0543e2102d8237435d034126a411e))
- **typescript:** upgrade to TypeScript 5 ([0edd70c](https://github.com/rindojs/rindo/commit/0edd70cc2a1894e9c93db9acc5c2ed1e6c226c8b))

### Reverts

- Revert "refactor(compiler): add a Result union type for polymorphic returns" ([1d45905](https://github.com/rindojs/rindo/commit/1d4590556f9b613861dc2689f2d7a12643fb4f81))

## 🎭 [3.2.4](https://github.com/rindojs/rindo/compare/v3.2.3...v3.2.4) (2023-06-01)

### Bug Fixes

- **declarations:** add `onCancel` to dialog attributes ([49c2d46](https://github.com/rindojs/rindo/commit/49c2d46c08092c92512e011fd30c61d1aeaa096c))
- **runtime:** initialize custom elements even when there is no styles ([2a19735](https://github.com/rindojs/rindo/commit/2a19735cf66fafdf35a879727c64c26e95fe72c6))
- **testing:** jest component disconnected callback ([3cfec43](https://github.com/rindojs/rindo/commit/3cfec4370777a48bfc0cb1679aebc05a3483ff1d))

## 🐰 [3.2.3](https://github.com/rindojs/rindo/compare/v3.2.2...v3.2.3) (2023-04-30)

## 🏒 [3.2.2](https://github.com/rindojs/rindo/compare/v3.2.1...v3.2.2) (2023-04-23)

## 🎉 [3.2.1](https://github.com/rindojs/rindo/compare/v3.2.0...v3.2.1) (2023-04-21)

### Bug Fixes

- **compiler:** sourcemap for dist-custom-elements generation ([7c04a83](https://github.com/rindojs/rindo/commit/7c04a836404ddd693e879d6e785d52bbcff4011f))
- **compiler:** write exports for defineCustomElement typedefs ([776bf96](https://github.com/rindojs/rindo/commit/776bf96fe3b9fe8290c5ccb3dd4cbb09ea98a874))
- **mock-doc:** add missing properties of object returned by matchMedia ([5a6d060](https://github.com/rindojs/rindo/commit/5a6d060537396ed0e564167aa91b3b76c6d92783))
- **test:** fix infinite loops w/ react ([19da147](https://github.com/rindojs/rindo/commit/19da147f5b9656dcbeab07da8b356f3c14c9da7f))

### Reverts

- **lint:** turn on the 'import/no-duplicates' rule ([036d65a](https://github.com/rindojs/rindo/commit/036d65a73e8cdfde144c88081a252ca2bbcac008))

# 🏙 [3.2.0](https://github.com/rindojs/rindo/compare/v3.1.0...v3.2.0) (2023-04-07)

### Bug Fixes

- **cli:** support Jest-specific CLI flag aliases ([79eb652](https://github.com/rindojs/rindo/commit/79eb6526fb53611f87517ac50cd3a2e64f9f2aa0))
- **compiler:** use file system polling events in watch mode ([e724316](https://github.com/rindojs/rindo/commit/e72431613fec15621392f7e84762422dc5b5dbae))
- **test:** support importing from ES modules in spec tests ([e965ff3](https://github.com/rindojs/rindo/commit/e965ff35d0f96e6095ba67ff71fb9a4bac00652f))
- **typo:** fix info task output ([eab32c5](https://github.com/rindojs/rindo/commit/eab32c509db6d717a082ba76cb1818b86efb602d))

### Features

- **config:** add `enableImportInjection` flag ([9619b0f](https://github.com/rindojs/rindo/commit/9619b0f927003ffbb46f081bcb06c92dcecda626))

# 💥 [3.1.0](https://github.com/rindojs/rindo/compare/v3.0.1...v3.1.0) (2023-04-07)

### Bug Fixes

- **browser:** polyfill assert, process ([e484c23](https://github.com/rindojs/rindo/commit/e484c236743170eabc3de5361b351ea514ce76a1))
- **runtime:** prevent null data-opts access ([3cb5697](https://github.com/rindojs/rindo/commit/3cb56978e7fc58d9ed8c839d69df4a8b6e89458d))

### Features

- **compiler:** transform module aliases in emitted js, typedefs ([e36e5f7](https://github.com/rindojs/rindo/commit/e36e5f7811153b0a505a148e2cc0f0393c25dbb6))
- **testing:** add support for transforming path aliases in spec tests ([a98e891](https://github.com/rindojs/rindo/commit/a98e891aa0027bdf1919a531e9c4ec39c75ed3a1))

## 🐸 [3.0.1](https://github.com/rindojs/rindo/compare/v3.0.0...v3.0.1) (2023-04-06)

### Bug Fixes

- **compiler:** ensure rollup outputs a single file for hydrateFactory ([28f8c60](https://github.com/rindojs/rindo/commit/28f8c602a11bc00dd2b0758177b68b5f98628057))

# 📣 [3.0.0](https://github.com/rindojs/rindo/compare/v3.0.0-rc.1...v3.0.0) (2023-04-05)

# 🐏 [3.0.0-rc.1](https://github.com/rindojs/rindo/compare/v3.0.0-rc.0...v3.0.0-rc.1) (2023-04-05)

# 🦄 [3.0.0-rc.0](https://github.com/rindojs/rindo/compare/v3.0.0-beta.0...v3.0.0-rc.0) (2023-04-05)

# 🐺 [3.0.0-beta.0](https://github.com/rindojs/rindo/compare/v3.0.0-alpha.2...v3.0.0-beta.0) (2023-04-05)

### Features

- **compiler:** remove inlineDynamicImports from custom elements targets ([b0f1f3a](https://github.com/rindojs/rindo/commit/b0f1f3a5371d55879b99ad7856a9c95f0604c831))

# 🐬 [3.0.0-alpha.2](https://github.com/rindojs/rindo/compare/v3.0.0-alpha.1...v3.0.0-alpha.2) (2023-04-05)

# 🏖 [3.0.0-alpha.1](https://github.com/rindojs/rindo/compare/v3.0.0-alpha.0...v3.0.0-alpha.1) (2023-04-05)

### Features

- **e2e:** add support for puppteer v19 ([cba47f5](https://github.com/rindojs/rindo/commit/cba47f5ef321e605529a60a378f4d6feb0067425))

# 🍌 [3.0.0-alpha.0](https://github.com/rindojs/rindo/compare/v2.22.2...v3.0.0-alpha.0) (2023-04-05)

### Bug Fixes

- **compiler:** destroy callback naming ([283bde7](https://github.com/rindojs/rindo/commit/283bde7235be927b7ac6847837ac7034c047f9d1))
- **declarations:** correct event handler names for composition events ([42a8e7e](https://github.com/rindojs/rindo/commit/42a8e7e5421868ebc82168ff96b8d7155c0cecc2))
- **runtime:** autocapitalize property is a string ([e921bf8](https://github.com/rindojs/rindo/commit/e921bf84e0cb1f7112f4d0be4df72dd4fc5bfa16))
- **runtime:** onInput event type ([110faf1](https://github.com/rindojs/rindo/commit/110faf1c94eb04802a0fe050b3f361fd70d164ae))

### Features

- **cli:** update flag defaults for V3 ([40c09c2](https://github.com/rindojs/rindo/commit/40c09c27363e9739f6b1f4a90b719f57e503333f))
- **compiler:** add `CustomElementExportBehavior` to custom elements … ([b59761d](https://github.com/rindojs/rindo/commit/b59761dd6aa9966e617ad6ddb6ce59a239143c8a))
- **compiler:** add `defineCustomElements` method & signature typedef ([3f7b9bc](https://github.com/rindojs/rindo/commit/3f7b9bc868d1967015c8e44e9ef2d838e8dc6a53))
- **compiler:** export custom types in compiled output ([42d5fa2](https://github.com/rindojs/rindo/commit/42d5fa2d05504c970ef66eab362257e65c8d6446))
- **compiler:** moves `autoDefineCustomElements` to an export behavior ([1ea058b](https://github.com/rindojs/rindo/commit/1ea058b2920de688613d6be7ac333bd2a381794f))
- **node:** drop node 12 support ([ba96132](https://github.com/rindojs/rindo/commit/ba96132cb986bc17cb62536e1871e370d751dc22))
- **output_targets:** remove legacy angular target ([bc35358](https://github.com/rindojs/rindo/commit/bc35358b03232956ca41e4e909bbd24d6ee6f01b))

## 🍿 [2.22.2](https://github.com/rindojs/rindo/compare/v2.18.0...v2.22.2) (2023-04-05)

### Bug Fixes

- **cli:** typo in telemetry command ([ef8af77](https://github.com/rindojs/rindo/commit/ef8af77680d85ea99e922ce981268308d1dc91c3))

# ☕️ [2.18.0](https://github.com/rindojs/rindo/compare/v2.17.4...v2.18.0) (2023-01-11)

### Bug Fixes

- **collection:** properly transform imports ([0cbb529](https://github.com/rindojs/rindo/commit/0cbb529ab9b5e2c081bd36a7b8efafe4ab0f6206))

### Features

- **loader:** add private field to loader's package.json ([1756b2c](https://github.com/rindojs/rindo/commit/1756b2cd9840bde5063c807b6e90779862319ce4))
- **typescript:** add support for typescript v4.7 ([40be168](https://github.com/rindojs/rindo/commit/40be1682be6aae0f5e7a0634a14d0f4ed7fb4c4b))

## 🏵 [2.17.4](https://github.com/rindojs/rindo/compare/v2.17.3...v2.17.4) (2023-01-11)

### Bug Fixes

- **compiler:** don't break HMR by mangling CSS ([aa5c1a6](https://github.com/rindojs/rindo/commit/aa5c1a6041f9e328e131cc5872fb8be2a9e64b45))
- **task:** consider config sys in task runner ([15143f0](https://github.com/rindojs/rindo/commit/15143f03e75e50c543561ea7f2a66d5093f822f0))

## 🌱 [2.17.3](https://github.com/rindojs/rindo/compare/v2.17.2...v2.17.3) (2023-01-11)

### Bug Fixes

- **validation:** update module location suggestion ([30fb63d](https://github.com/rindojs/rindo/commit/30fb63dc424e9e0e5c208c85688fc029f5a6f6c2))

## ⚽️ [2.17.2](https://github.com/rindojs/rindo/compare/v2.17.2-0...v2.17.2) (2023-01-11)

### Bug Fixes

- **cli:** fix bug with parsing --fooBar=baz type CLI flags ([93b2284](https://github.com/rindojs/rindo/commit/93b22840e03ed6219ef63ec9e62dc5a0b93b5448))
- **cli:** remove usage of deprecated npm env var from arg parser ([8be00ec](https://github.com/rindojs/rindo/commit/8be00ec7e39e582494b576eda597d452c0956153))
- **compiler:** update package.json validation for the 'module' field ([075d98a](https://github.com/rindojs/rindo/commit/075d98ada89439d08bf226a53f1a12dae4d2ef32))
- **mock-doc:** add missing methods to the element mock ([d5dafba](https://github.com/rindojs/rindo/commit/d5dafba7ea887ed286b057442a49bb62022228fd))

### Features

- **ci:** fail the browserstack tests if any files were changed or added ([bfd39e2](https://github.com/rindojs/rindo/commit/bfd39e29cc103e94788545d805a4bdfe77212ff6))

## 📬 [2.17.2-0](https://github.com/rindojs/rindo/compare/v2.17.1...v2.17.2-0) (2023-01-11)

### Bug Fixes

- **compiler:** fix typedef file generated for dist-custom-elements ([4a5ad6e](https://github.com/rindojs/rindo/commit/4a5ad6eae475ab8bec910cbf6a2591a70436c607))

### Features

- **mock-doc:** dispatch blur and focus events ([8f9d5c8](https://github.com/rindojs/rindo/commit/8f9d5c8b34be0b210cb3e96145112d372ef1db00))

## 🍏 [2.17.1](https://github.com/rindojs/rindo/compare/v2.17.0...v2.17.1) (2023-01-11)

### Bug Fixes

- **cli:** add explicit support for Jest CLI arguments ([0e7f285](https://github.com/rindojs/rindo/commit/0e7f285f56ff59f997642b9d4abdc92f57098e51))
- **compiler:** handle null window.location.origin ([9f1fc34](https://github.com/rindojs/rindo/commit/9f1fc34a00265f6ad5f156b3d6b5a52b02c45fa6))
- **github:** don't run prettier check ([2235217](https://github.com/rindojs/rindo/commit/22352177ce854eb1829cb1b1e320e8e5775b0257))
- **styles:** ensure styles are applied before paint ([502c120](https://github.com/rindojs/rindo/commit/502c1201f6c1628d2c5d75d6e27f77046c8b7650))

# 🏉 [2.17.0](https://github.com/rindojs/rindo/compare/v2.16.1...v2.17.0) (2022-08-12)

### Features

- **compiler:** export all built components from index.js w/ dist-custom-elements ([1e2d4cc](https://github.com/rindojs/rindo/commit/1e2d4cc74fe49f6fff89d99e66d4cdc0e9bdd47e))
- **compiler:** update generation of type declaration file w/ dist-custom-elements ([5774071](https://github.com/rindojs/rindo/commit/5774071df9529ed77695ea20266312b558c1446b))
- **mock-doc:** add matrix and tspan props for svgelement ([ec8dc82](https://github.com/rindojs/rindo/commit/ec8dc82c221b97d07101594bae73a74ee133c71a))
- **telemetry:** add rindo config to telemetry object ([46e3b61](https://github.com/rindojs/rindo/commit/46e3b6103314e0d854eca542505ca5cedc980789))

## 🚐 [2.16.1](https://github.com/rindojs/rindo/compare/v2.16.1-0...v2.16.1) (2022-08-12)

### Bug Fixes

- **config:** fix faulty build output w/ `--esm` flag ([33cac11](https://github.com/rindojs/rindo/commit/33cac113cab91ecf51f7c173153a482ec4a8350e))

## 🛠 [2.16.1-0](https://github.com/rindojs/rindo/compare/v2.16.0...v2.16.1-0) (2022-08-12)

### Bug Fixes

- **config:** fix faulty build output w/ `--esm` flag ([33cac11](https://github.com/rindojs/rindo/commit/33cac113cab91ecf51f7c173153a482ec4a8350e))
