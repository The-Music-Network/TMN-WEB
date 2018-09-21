# The Music Network Frontend

Please refer to the wiki page here on github.
Please remember that all code will auto reformat with prettier on commit, so if your getting a ton of ESLINT errors, don't worry they will resolve when you commit.

## Requirements

- node 8+
- npm or yarn installed

## Instructions

- Fork this repository first and then clone, DO NOT clone the repository directly.
- run `npm install` in a command line inside of the repo's main directory
- run `npm run dev` to start the dev server
- Always create an issue before making a pull request to better document ideas and keep feature short and concise. If you do a bugfix, you should only
  have a PR with said bugfix, do NOT make a PR fixing multiple issues in one.
- There are a few aliases available via webpack to make pathing to your files easier. Every folder has its own
  alias, for example to automatically import the styles folder use:

```scss
@import "styles/index.scss";
```

- To import a component from the components folder use:

```javascript
import myComponent from "components/myComponent";
```

- Please always try to use these aliases, as the codebase grows, it will be easy to move around folder structure if need be this way, all folders
  you will use will have an alias.
- A good example to understand vue single file components can be found here https://vegibit.com/single-file-components-in-vuejs/
- Please refer to this guide for branching off of develop, make sure when you push you add --no-ff https://stackoverflow.com/questions/4470523/create-a-branch-in-git-from-another-branch

## Testing

- All features should have a unit test within tests folder, we use jest and kermit (a team created puppeteer wrapper). The docs for each can be found here:
- Remember that kermit is a global variable within each test file, this way every test is using the same instance of kermit throughout.
  https://pptr.dev/ https://mochajs.org/ https://www.chaijs.com/ https://github.com/theRealScoobaSteve/kermit-pptr

## Commands (npm run ...)

- dev - runs the dev server configured with hot reloading
- build - builds the project for production
- build:server - builds the server
- build:client - builds the client
- test - runs all tests
- test:show - runs kermit with the browser enabled
- test:slow - runs kermit slowly with the browser enabled for debugging tests
- start:server - runs the server for production

## Style Guide

### SCSS

- For this project we use BEM css. Here is a great article if you are unfamiliar with BEM style guide https://css-tricks.com/bem-101/
- All css is required to be written in SASS, more specifically SCSS, if you are unfamiliar with SASS here is a quick guide. https://sass-lang.com/guid
- All style sheets may be inlined using the

```html
<style lang="scss">
    // your scss here
</style>
```

however, if you create general selector, it would be best to add it to main.scss in ./public/styles/main.scss so other devs can use it

- All pull request's must be reviewed and approved by two people, this way we can identify best practices and give advice to each other to optimize the code base
- If you add another .scss file inside of styles, always remember to import it inside of index.scss so its all files can be made available in one call.
