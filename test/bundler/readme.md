# Bundler Tests

This directory contains test suites that are intended to test using Rindo components in a downstream application that is transformed by bundlers such as Wite.

## Files of Interest

### component-library/
This directory contains a basic component library, written in Rindo.
It is intended that applications found in directories adjacent to this one consume the library, using a bundler to test.

### wite-bundle-test/
This directory contains a basic application that is bundled using Wite.
It contains the Rindo component library found in the [component-library directory](#component-library).
Tests for this application can be found in this directory as well.

### karma.config.ts
This file contains the Karma configuration for running tests.
It also describes how Karma can serve all applications in the `bundler/` directory.

### karma-rindo-utils.ts
This file contains various utilities for setting up and tearing down tests.
It may be used by an application test suite.
