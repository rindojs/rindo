# Contributing

Thanks for your interest in contributing to Rindo! :tada:


## Contributing Etiquette

Please see our [Contributor Code of Conduct](https://github.com/familyjs/rindo/blob/main/CODE_OF_CONDUCT.md) for information on our rules of conduct.


## Creating an Issue

* It is required that you clearly describe the steps necessary to reproduce the issue you are running into. Although we would love to help our users as much as possible, diagnosing issues without clear reproduction steps is extremely time-consuming and simply not sustainable.

* The issue list of this repository is exclusively for bug reports and feature requests. Non-conforming issues will be closed immediately.

* Issues with no clear steps to reproduce will not be triaged. If an issue is labeled with "Awaiting Reply" and receives no further replies from the author of the issue for more than 5 days, it will be closed.

* If you think you have found a bug, or have a new feature idea, please start by making sure it hasn't already been [reported](https://github.com/familyjs/rindo/issues?utf8=%E2%9C%93&q=is%3Aissue). You can search through existing issues to see if there is a similar one reported. Include closed issues as it may have been closed with a solution.

* Next, [create a new issue](https://github.com/familyjs/rindo/issues/new) that thoroughly explains the problem. Please fill out the populated issue form before submitting the issue.


## Creating a Pull Request

* We appreciate you taking the time to contribute! Before submitting a pull request, we ask that you please [create an issue](#creating-an-issue) that explains the bug or feature request and let us know that you plan on creating a pull request for it. If an issue already exists, please comment on that issue letting us know you would like to submit a pull request for it. This helps us to keep track of the pull request and make sure there isn't duplicated effort.

### Setup

1. Fork the repo.
2. Clone your fork.
3. Make a branch for your change.
4. Rindo uses [volta](https://volta.sh) to manage its npm and Node versions.
   [Install it](https://docs.volta.sh/guide/getting-started) before proceeding.
  1. There's no need to install a specific version of npm or Node right now, it shall be done automatically for you in
     the next step
5. Run `npm install`


### Commit Message Format

We strive to adhere to a consistent commit message format that is consistent with the
[Angular variant of Conventional Commits](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular),
with a few exceptions.

This enables:
- Anyone to easily understand *what* a commit does without reading the change itself
- The history of changes to the project to be reviewed easily using tools such as `git log`
- Automated tooling to be developed for important, if mundane tasks (e.g. change log generation)

#### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
* **revert**: Reverts a previous commit

#### Scope
The scope can be anything specifying place of the commit change. For example `renderer`, `compiler`, etc.

#### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* do not capitalize first letter
* do not place a period `.` at the end
* entire length of the subject must not go over 50 characters
* describe what the commit does, not what issue it relates to or fixes
* **be brief, yet descriptive** - we should have a good understanding of what the commit does by reading the subject

#### Footer

Members of the Rindo engineering team should take care to add the JIRA ticket associated with a PR in the footer of
the git commit. Community members need not worry about adding a footer.

If your pull request contains a *breaking change*, please add the text 'BREAKING CHANGE:' followed by a brief
description. This description will be used in Rindo's auto-generated changelog under the `BREAKING CHANGES` section.
This syntax must be used over the 'exclamation' syntax that other projects using conventional commits may follow.

#### Example

Below is an example commit message that follows the guidance listed above:

```
fix(runtime): prevent watchers from prematurely firing

Wait for the CustomElementRegistry to mark the component as ready
before setting `isWatchReady`. Otherwise, watchers may fire prematurely
if `customElements.get()` or `customElements.whenDefined()` resolve
_before_ Rindo has completed instantiating a component

RINDO-147: Watchers Not Firing as Expected when using the Custom Elements Build

BREAKING CHANGE: Watchers may appear to not fire in existing applications, when this is the expected behavior.
```

where:
- the type is "fix"
- the scope is "runtime"
- the PR subject describes _what_ the PR is doing when applied
- the PR body describes _what_ and _why_, rather than _how_
- this PR is a breaking change

which generates the following in the `CHANGELOG.md`:

```markdown
### Bug Fixes

* **runtime:** ...


### BREAKING CHANGES

* **runtime:** ...
```

### Adding & Updating Documentation

Please see the [rindo-site](https://github.com/familyjs/rindo-site) repo to update documentation.


## License

By contributing your code to the familyjs/rindo GitHub Repository, you agree to license your contribution under the MIT license.
