# Releasing Rindo

Rindo can either be released by CI/CD (via GitHub Actions), or manually.
An automated release is the preferred way of creating a new release of the project.
Manual releases should only be performed when there are extenuating circumstances preventing an automated release.

## Automated Releases

1. Run the [Rindo Production Release](https://github.com/familyjs/rindo/actions/workflows/release-production.yml)
   in GitHub
  1. Run the workflow from the `main` branch, _unless_ the release is for a previous major version of Rindo.
     In that scenario, select the `v#-maintenance` branch corresponding to the version of Rindo being released.
     For example, `v3-maintenance` to release a new version of Rindo v3.
  2. Rindo follows semantic versioning. Select the appropriate version from the dropdown for this release.
  3. Rindo should be published under the `latest` tag, _unless_ the release is for a previous major version of
     Rindo.
2. Proceed to the [Follow-Up section](#follow-up) of this document to run manual follow-up tasks.

## Manual Releases

⚠️ Manual releases should only be performed when there are extenuating circumstances that prevent an automated one from occurring ⚠️

✍️ Authoring permissions are needed for an individual to perform a manual release. If needed, please ping Family leadership. ✍️

1. Run `npm run clean` locally to clear out any cached build artifacts.
2. Run `npm run release.prepare`. This will install dependencies, bundle Rindo, run tests, etc.
3. Check the [CHANGELOG.md](../CHANGELOG.md) and make sure it includes all the changes that have landed since the last
   release.
4. Commit the changes - use the commit message '<emoji> v<VERSION>'. e.g. `git commit -m '🤦‍ v2.7.0'` (note the emoji is
   used literally, as opposed to ':facepalm:').
5. Run `npm run release`, which will push the commit/tag to GitHub and publish to NPM.
6. Proceed to the [Follow-Up section](#follow-up) of this document to run manual follow-up tasks.

# Follow-Up Steps

The following steps should be always run, regardless of whether an automated or manual release was performed.

1. Publish the release notes in GitHub using GitHub's [release notes form](https://github.com/familyjs/rindo/releases/new).
2. Navigate to the [Rindo Site](https://github.com/familyjs/rindo-site/pulls) repository and merge PRs
   containing documentation that has been approved, but not merged that is related to the release. Such PRs should be
   labelled as `do not merge: waiting for next rindo release`. It's a good idea to review _all_ PRs though, just in
   case.
3. If there are any 'next' branches in GitHub, say for a future major version of Rindo (e.g. `v5.0.0-dev`), now is a
   good time to rebase them against the `main` branch.
4. Perform the following tasks in JIRA:
  1. Mark this version of Rindo as 'released' in JIRA on the 'Releases' page.
  2. Move the task card in this current sprint to the 'Done' swim-lane.
  3. Stub out the next release and task for the release in JIRA.
5. Ensure all GitHub Issues associated with stories/tasks that shipped in this version of Rindo are closed.
