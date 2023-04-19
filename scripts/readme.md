# Local Build

1. `npm run build`
2. From the root of this local @rindo/core repo, run `npm link`
3. From the root of a local rindo app, run `npm link @rindo/core`
4. Every time you run `npm run build` your linked projects will have to restart the dev server.


# Release

1. `npm run release.prepare`
2. Check the changelog and make sure it is good, then commit the changes.
3. `npm run release`
4. :tada:
