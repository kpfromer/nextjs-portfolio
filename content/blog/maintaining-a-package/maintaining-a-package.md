---
title: 'My Journey to Better Git Messages'
date: '2020-03-15'
---

[![bad git commit messages](git_commit.png)](https://xkcd.com/1296/) Another great comic from
[xkcd](https://xkcd.com/1296/).

Amid the COVID-19 pandemic I have been stuck at home programming.

Ever since I started programming in High School, I have used lousy git commit messages and branch
names. I have tried to improve them by using the imperative mood and following
[Chris Beams wonderful article about Git commit messages.](https://chris.beams.io/posts/git-commit/)
But my message was still lacking. I felt that my messages had no rythm or reason to them, which made
reading the future more difficult because they were not that descriptive.

## Conventional commits

Unfortunately, it does not discuss branch naming conventions. Some bad git commit messages include:
`Demo angular app` and `Fix misc`. Those messages convey no meaning, even with the project context.
These messages are pretty shameful and I want to improve. So recently I have been reading about how
one should write branch names and commit messages. I have seen others using messages like
`chore(deps): update mongoose to 5.7.9` and decided to look into it. It turns out that this message
schema comes from [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) which is
heavily based on the
[angular commit guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

Why I like using conventional commits:

- messages are more readable
- easy to understand in the future when looking through the project history
- it allows for tools to automate versioning, changelogs, and releases

# Enforcing It

## [commitlint](https://commitlint.js.org)

commitlint is pretty self explanitory. It will lint commit messages, ensuring that they follow the
conventional commit message pattern.

### In Practice

In the root directory I created a file called `commitlint.config.js` with the contents:

```javascript
module.exports = { extends: ['@commitlint/config-conventional'] };
```

This will make sure commitlint will lint for the conventional commit pattern. You can customize
commitlint to do what you want if needed.

## [husky](https://github.com/typicode/husky)

husky will handle [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks). A git hook
trigger scripts before certain git events, such as committing a commit with a message or pushing a
branch. husky allows for you to automatically run tests before committing/pushing and can run
commitlint to lint your commit messages.

### In Practice

```javascript
{
  // ... the rest of package.json
  "husky": {
    "pre-commit": "yarn test",
    "pre-push": "yarn test",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

## [prettier](https://prettier.io)

### In Practice

## [semantic-release](https://github.com/semantic-release/semantic-release)

For NPM open source projects I used `semantic-release` to handle versions.

Getting all of this to work was a little bit of pain since `semantic-release-cli` was not working
with travis. I was able to get around the issue by not generate for travis ci, instead I used the
`other` option that just returns the npm and github tokens.

### In Practice

#### For existing projects

I had some trouble and worrys that adding semantic-release would mess up the current version number
for my open source project.

I tested intgrating it with a simple github repo by add a basic project will a couple commits (that
do not follow the conventional pattern) and version of `2.1.1`.

I am happy to say that it worked out great **as long as you make sure to run the following before
adding it.**

```bash
git tag v2.1.1
git push --tags
```

Where `2.1.1` is your current version number.

Resources:

https://www.npmjs.com/package/commitizen
https://github.com/conventional-changelog/conventional-changelog

- https://survivejs.com/maintenance/preface/
- https://www.conventionalcommits.org/en/v1.0.0/
