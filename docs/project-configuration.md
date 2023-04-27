# Project Configuration

This application has been bootstrapped with [Next.js](https://nextjs.org/); a framework for [React Library](https://es.react.dev/), which extends and enhances React features, some features included into Next.js are images optimization and server side rendering, this last one, improves in great way the SEO of a web page, something that cannot be achieved by using plain React.

## Development Dependencies

#### [Eslint](https://eslint.org/)

ESlint is a tool to ensure code standarization, it enhances code style and sets a set of rules that have to be followed during the development process. ESlint analyzes the code to quickly find problems.

Configuration used in this project [here](../.eslintrc.js)

#### [Prettier](https://prettier.io/)

Prettier is an oppinionated code formatted that supports many languages and can be integrated with most code editors, Prettier will ensure that format across code will be the same, this helps the developers to avoid code that has multiple formats across code files by creating standars with Prettier rules.

Configuration used in this project [here](../.prettierrc)

#### [TypeScript](https://www.typescriptlang.org/)

TypeScript is a superset for JavaScript programming language, since JavaScript is not a strong-typed language, TypeScript can be used for achieving this purpose. It is runs type-checks in runtime to make sure that everything is working as intended, and reports issues with types if these exist. by having an strong-typed language, development gets more predictable, since a developer know what to expect in certain situations.

e.g:

**JavaScript**:

```
    const awesomeFunction = (input) => {
        // Some awesome operations

        return awesomeResult;
    }
```

**TypeScript**

```
    const awesomeFunction = (input: string): string => {
        // Some awesome operations

        return awesomeResult;
    }
```

In JavaScript, we could not figure out the input type, neither the output type, which makes it hard to developers to figure out what has to be passed to this function so that it can work correctly.

This does not occurs in TypeScript, in which the input and output types are declared and developers know what are the input type that the function will accept and the return type.

Configuration used in this project [here](../tsconfig.json)

#### [Husky](https://typicode.github.io/husky/)

Husky is a tool that runs git hooks, the git hook that is being used in this project, is git pre-commit hook, will run some actions on commit, if this actions do not passes the checking, husky will throw an error and will not allow the developer to commit the code to any remote repository.

**Important**: If when trying to commit you get prompted with these messages:

```
hint: The '.husky/pre-commit' hook was ignored because it's not set as executable.
hint: You can disable this warning with git config advice.ignoredHook false.
```

run the next command in your terminal (relative to the project root):

```
chmod ug+x .husky/*
```

Now husky will be working as intended.

Configuration used in this project [here](../.husky/pre-commit)

#### [LintStaged](https://github.com/okonet/lint-staged)

LintStaged is a tool that can be used along with Husky, natively, Husky anytime that a commit is triggered, will run the action checks for all of the project files, LintStaged avoids this by tracking the files that were changed since the last commit, and will make Husky to run only for these files, improving the performance of Husky as a tool.

Configuration used in this project [here](../.lintstagedrc.json)

#### Absolute imports

Absolute imports should always be configured and used because it makes it easier to move files around and avoid messy import paths such as ../../../Component. Wherever you move the file, all the imports will remain intact.

Absolute imports example:

from:

```
import { MyAwesomeComponent } from '../../../../components/my-awesome-component';
```

to:

```
import { MyAwesomeComponent } from '@/components/my-awesome-component';
```

Configuration used in this project [here](../tsconfig.paths.json)

#### Continuous Integration (Github Actions)

CI or Continuous Integration is about creating automatic workflows to detect errors at an early stage of development, for this purpose, Github Actions are being used by using the `.github/workflows` folder to create jobs that will be executed at a specific moment defined by the developer (e.g: on push, on pull request).

This project implements a CI workflow for checking the code on push and on pull_request, it lints and checks the format of the code, finally, creates the production build to make sure that build is created by no issues.

CI used in this project [here](../.github/workflows/ci.yml)

#### Internationalization

Internationalization makes that all the pages support many languages, languages are defined by a locale list found in a `next-i18next.config.js` file where the locales to be used within the application are defined.

[Here](../next-i18next.config.js) is the Internationalization file that is being used in the project.  
[Here](../next.config.js) is specified the integration with Next.js.

**IMPORTANT**: For more information, read [Internationalization docs](./internationalization.md) 

#### [Tailwind CSS](https://tailwindcss.com/)

Tailwind is a CSS framework that is utility-first driven, meaning that can be composed to build any design. Tailwind supports dark mode, which is being used in this project.

Configuration for this project [here](../tailwind.config.js)

#### [SVGr for Next.js](https://react-svgr.com/docs/next/)

SVGr gives Next.js the ability to import SVG files and convert them to React Components on the fly, it also gives the option to import SVG files as URL (original behaviour) if required.

Examples: 

```
import Image from 'next/image';
import StarIcon from './star.svg' // As React Component
import starUrl from './star.svg?url' // As URL

const Example = (): JSX.Element => (
  <div>
    <Star />

    <Image alt="Star icon" src={starUrl} />
  </div>
);
```
