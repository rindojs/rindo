# 🏖 [3.0.0-alpha.1](https://github.com/familyjs/rindo/compare/v3.0.0-alpha.0...v3.0.0-alpha.1) (2023-04-05)


### Features

* **e2e:** add support for puppteer v19 ([cba47f5](https://github.com/familyjs/rindo/commit/cba47f5ef321e605529a60a378f4d6feb0067425))



# 🍌 [3.0.0-alpha.0](https://github.com/familyjs/rindo/compare/v2.22.2...v3.0.0-alpha.0) (2023-04-05)


### Bug Fixes

* **compiler:** destroy callback naming ([283bde7](https://github.com/familyjs/rindo/commit/283bde7235be927b7ac6847837ac7034c047f9d1))
* **declarations:** correct event handler names for composition events ([42a8e7e](https://github.com/familyjs/rindo/commit/42a8e7e5421868ebc82168ff96b8d7155c0cecc2))
* **runtime:** autocapitalize property is a string ([e921bf8](https://github.com/familyjs/rindo/commit/e921bf84e0cb1f7112f4d0be4df72dd4fc5bfa16))
* **runtime:** onInput event type ([110faf1](https://github.com/familyjs/rindo/commit/110faf1c94eb04802a0fe050b3f361fd70d164ae))


### Features

* **cli:** update flag defaults for V3 ([40c09c2](https://github.com/familyjs/rindo/commit/40c09c27363e9739f6b1f4a90b719f57e503333f))
* **compiler:** add `CustomElementExportBehavior` to custom elements … ([b59761d](https://github.com/familyjs/rindo/commit/b59761dd6aa9966e617ad6ddb6ce59a239143c8a))
* **compiler:** add `defineCustomElements` method & signature typedef ([3f7b9bc](https://github.com/familyjs/rindo/commit/3f7b9bc868d1967015c8e44e9ef2d838e8dc6a53))
* **compiler:** export custom types in compiled output ([42d5fa2](https://github.com/familyjs/rindo/commit/42d5fa2d05504c970ef66eab362257e65c8d6446))
* **compiler:** moves `autoDefineCustomElements` to an export behavior ([1ea058b](https://github.com/familyjs/rindo/commit/1ea058b2920de688613d6be7ac333bd2a381794f))
* **node:** drop node 12 support ([ba96132](https://github.com/familyjs/rindo/commit/ba96132cb986bc17cb62536e1871e370d751dc22))
* **output_targets:** remove legacy angular target ([bc35358](https://github.com/familyjs/rindo/commit/bc35358b03232956ca41e4e909bbd24d6ee6f01b))



## 🍿 [2.22.2](https://github.com/familyjs/rindo/compare/v2.18.0...v2.22.2) (2023-04-05)


### Bug Fixes

* **cli:** typo in telemetry command ([ef8af77](https://github.com/familyjs/rindo/commit/ef8af77680d85ea99e922ce981268308d1dc91c3))



# ☕️ [2.18.0](https://github.com/familyjs/rindo/compare/v2.17.4...v2.18.0) (2023-01-11)


### Bug Fixes

* **collection:** properly transform imports ([0cbb529](https://github.com/familyjs/rindo/commit/0cbb529ab9b5e2c081bd36a7b8efafe4ab0f6206))


### Features

* **loader:** add private field to loader's package.json ([1756b2c](https://github.com/familyjs/rindo/commit/1756b2cd9840bde5063c807b6e90779862319ce4))
* **typescript:** add support for typescript v4.7 ([40be168](https://github.com/familyjs/rindo/commit/40be1682be6aae0f5e7a0634a14d0f4ed7fb4c4b))



## 🏵 [2.17.4](https://github.com/familyjs/rindo/compare/v2.17.3...v2.17.4) (2023-01-11)


### Bug Fixes

* **compiler:** don't break HMR by mangling CSS ([aa5c1a6](https://github.com/familyjs/rindo/commit/aa5c1a6041f9e328e131cc5872fb8be2a9e64b45))
* **task:** consider config sys in task runner ([15143f0](https://github.com/familyjs/rindo/commit/15143f03e75e50c543561ea7f2a66d5093f822f0))



## 🌱 [2.17.3](https://github.com/familyjs/rindo/compare/v2.17.2...v2.17.3) (2023-01-11)


### Bug Fixes

* **validation:** update module location suggestion ([30fb63d](https://github.com/familyjs/rindo/commit/30fb63dc424e9e0e5c208c85688fc029f5a6f6c2))



## ⚽️ [2.17.2](https://github.com/familyjs/rindo/compare/v2.17.2-0...v2.17.2) (2023-01-11)


### Bug Fixes

* **cli:** fix bug with parsing --fooBar=baz type CLI flags ([93b2284](https://github.com/familyjs/rindo/commit/93b22840e03ed6219ef63ec9e62dc5a0b93b5448))
* **cli:** remove usage of deprecated npm env var from arg parser ([8be00ec](https://github.com/familyjs/rindo/commit/8be00ec7e39e582494b576eda597d452c0956153))
* **compiler:** update package.json validation for the 'module' field ([075d98a](https://github.com/familyjs/rindo/commit/075d98ada89439d08bf226a53f1a12dae4d2ef32))
* **mock-doc:** add missing methods to the element mock ([d5dafba](https://github.com/familyjs/rindo/commit/d5dafba7ea887ed286b057442a49bb62022228fd))


### Features

* **ci:** fail the browserstack tests if any files were changed or added ([bfd39e2](https://github.com/familyjs/rindo/commit/bfd39e29cc103e94788545d805a4bdfe77212ff6))



## 📬 [2.17.2-0](https://github.com/familyjs/rindo/compare/v2.17.1...v2.17.2-0) (2023-01-11)


### Bug Fixes

* **compiler:** fix typedef file generated for dist-custom-elements ([4a5ad6e](https://github.com/familyjs/rindo/commit/4a5ad6eae475ab8bec910cbf6a2591a70436c607))


### Features

* **mock-doc:** dispatch blur and focus events ([8f9d5c8](https://github.com/familyjs/rindo/commit/8f9d5c8b34be0b210cb3e96145112d372ef1db00))



## 🍏 [2.17.1](https://github.com/familyjs/rindo/compare/v2.17.0...v2.17.1) (2023-01-11)


### Bug Fixes

* **cli:** add explicit support for Jest CLI arguments ([0e7f285](https://github.com/familyjs/rindo/commit/0e7f285f56ff59f997642b9d4abdc92f57098e51))
* **compiler:** handle null window.location.origin ([9f1fc34](https://github.com/familyjs/rindo/commit/9f1fc34a00265f6ad5f156b3d6b5a52b02c45fa6))
* **github:** don't run prettier check ([2235217](https://github.com/familyjs/rindo/commit/22352177ce854eb1829cb1b1e320e8e5775b0257))
* **styles:** ensure styles are applied before paint ([502c120](https://github.com/familyjs/rindo/commit/502c1201f6c1628d2c5d75d6e27f77046c8b7650))



# 🏉 [2.17.0](https://github.com/familyjs/rindo/compare/v2.16.1...v2.17.0) (2022-08-12)


### Features

* **compiler:** export all built components from index.js w/ dist-custom-elements ([1e2d4cc](https://github.com/familyjs/rindo/commit/1e2d4cc74fe49f6fff89d99e66d4cdc0e9bdd47e))
* **compiler:** update generation of type declaration file w/ dist-custom-elements ([5774071](https://github.com/familyjs/rindo/commit/5774071df9529ed77695ea20266312b558c1446b))
* **mock-doc:** add matrix and tspan props for svgelement ([ec8dc82](https://github.com/familyjs/rindo/commit/ec8dc82c221b97d07101594bae73a74ee133c71a))
* **telemetry:** add rindo config to telemetry object ([46e3b61](https://github.com/familyjs/rindo/commit/46e3b6103314e0d854eca542505ca5cedc980789))



## 🚐 [2.16.1](https://github.com/familyjs/rindo/compare/v2.16.1-0...v2.16.1) (2022-08-12)


### Bug Fixes

* **config:** fix faulty build output w/ `--esm` flag ([33cac11](https://github.com/familyjs/rindo/commit/33cac113cab91ecf51f7c173153a482ec4a8350e))



## 🛠 [2.16.1-0](https://github.com/familyjs/rindo/compare/v2.16.0...v2.16.1-0) (2022-08-12)


### Bug Fixes

* **config:** fix faulty build output w/ `--esm` flag ([33cac11](https://github.com/familyjs/rindo/commit/33cac113cab91ecf51f7c173153a482ec4a8350e))



