# Rindo Continuous Integration (CI)

Continuous integration (CI) is an important aspect of any project, and is used to verify and validate the changes to the
codebase work as intended, to avoid introducing regressions (bugs), and to adhere to coding standards (e.g. formatting
rules). It provides a consistent means of performing a series of checks over the entire codebase on behalf of the team.

This document explains Rindo's CI setup. 

## CI Environment

Rindo's CI system runs on GitHub Actions.
GitHub Actions allow developers to declare a series of _workflows_ to run following an _event_ in the repository, or on
a set schedule.

The workflows that are run as a part of Rindo's CI process are declared as YAML files, and are stored in the same
directory as this file.
Each workflow file is explained in greater depth in the [workflows section](#workflows) of this document.

## Workflows

This section describes each of Rindo's GitHub Actions workflows.
Each of these tasks below are codified as [reusable workflows](https://docs.github.com/en/actions/using-workflows/reusing-workflows).

Generally speaking, workflows are designed to be declarative in nature.
As such, this section does not intend to duplicate the details of each workflow, but rather give a high level overview
of each one and mention nuances of each.

### Main (`main.yml`)

The main workflow for Rindo can be found in `main.yml` in this directory.
This workflow is the entrypoint of Rindo's CI system, and initializes every workflow & job that runs.

### Build (`build.yml`)

This workflow is responsible for building Rindo and validating the resultant artifact.

### Format (`format.yml`)

This workflow is responsible for validating that the code adheres to the Rindo team's formatting configuration before
a pull request is merged.

### Dev Release (`release-dev.yml`)

This workflow initiates a developer build of Rindo from the `main` branch.
It is intended to be manually invoked by a member of the Rindo team.

#### Concurrency

When a `git push` is made to a branch, Rindo's CI is designed to stop existing job(s) associated with the workflow + 
branch.
A new CI run (of each workflow) will begin upon stopping the existing job(s) using the new `HEAD` of the branch.

### BrowserStack (`browserstack.yml`)

This workflow is used to run a series of integration tests using [BrowserStack](https://www.browserstack.com).

Running this workflow requires a username + access key in order to access BrowserStack.
These credentials are stored as secrets in GitHub.

This workflow differs from most in that it is designed to run on `pull_request_target` triggers.
This allows community provided pull requests to run BrowserStack tests. 

## Repository Configuration

Each of the workflows described in the [workflows section](#workflows) of this document must be configured in the
Rindo GitHub repository to be _required_ to pass in order to land code in the `main` branch.
