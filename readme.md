# Sample Angular App Lazy loading from different package

This is a sample app with 2 sub-packages.

1. packages/main.app
2. packages/library

the goal is to have a library package with different modules of the app and have some specific modules lazy loaded.

## root package.json

The root package.json has some scripts and dependencies to install, build and launch the packages within the packages folder.

Every package is a independent project that can be in a different repo and the plan is to publish each package to its own NPM.

## main.app

This will be the entry point for the application and will import all the library packages and consume them. 

To consume a library package we need the next steeps: 

1. A dependency to the package has to be installed and added to this project package.json.
2. A route is needed in the file `packages/main.app/src/app/app.module.ts` to be able to call all the child routes included in the library/package.

# running the app

1. clone the repo
2. npm install
3. npm run dev:library

this will install all dependencies, compile the library, install the library in the main.app and build the main.app.