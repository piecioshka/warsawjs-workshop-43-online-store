# warsawjs-workshop-43-online-store

⛩️ WarsawJS Workshop #43 — JavaScript (Intermediate Level)

## Preview 🎉

<https://piecioshka.github.io/warsawjs-workshop-43-online-store/>

## Motivation

Project based on:

-   <https://github.com/piecioshka/boilerplate-babel-webpack>
-   <https://github.com/piecioshka/boilerplate-husky-lint-staged-prettier>
-   <https://github.com/piecioshka/test-jest-typescript>

## Features

-   :white_check_mark: Tooling: Prettier + Jest + http-server
-   :white_check_mark: Modules (4: IIFE, AMD, CommonJS, ESM)
-   :white_check_mark: Classes
-   :white_check_mark: Tooling: Webpack + webpack-dev-server
-   :white_check_mark: Promise API
-   :white_check_mark: Fetch API
-   :white_check_mark: RegExp

## Step by step 👣

### 00-Setup

-   Prettier
    -   lint-staged + husky
    -   <https://github.com/piecioshka/boilerplate-husky-lint-staged-prettier>
-   Jest
    -   How to start test runner?
-   http-server
    -   Test app in browser

### 01-Modules

-   IIFE, 1999
-   CommonJS, 2009
-   AMD, 2010
-   ECMAScript Module, 2015

### 00-Tooling

-   [ES2015] `Object.assign` vs `Spread Operator`
    -   Transpile Spread
        -   <https://babeljs.io/repl>
        -   <https://beautifier.io/>
-   Webpack
-   webpack-dev-server

### 02-Classes

-   [Functions] Create function which will be a component constructor
-   [Class] Convert previous function to a class
    -   File: `src/components/component.js`
    -   Requirements:
        -   Component could be render
        -   Component should have a template
-   [Class][getter]
    -   Requirements:
        -   Template should be a field which can be only "get"
-   [Class][static]
    -   Requirements:
        -   Product should have image inside
-   [Class][extends] Create component: Product
    -   File: `src/components/product.js`
    -   Requirements:
        -   It should have class "product" on top of the DOM
-   [Class][super] Create component: Cart
    -   File: `src/components/cart.js`
    -   Requirements:
        -   This module should have a list of products (initial empty)
-   [Loop] Iteration through list of products

### 03-Promise API

-   [Promise.resolve]
    -   Adding product should based on Promise
-   [Promise.reject]
    -   Adding non-product should finish failure
-   [Async/await]
    -   Display Toast when Product will be added to Cart
    -   Install `node-snackbar` form npm registry
    -   <https://www.polonel.com/snackbar/>
-   Error handling: `try...catch`

### 04-Fetch API

-   [window.fetch]
-   new [Response]
-   [isomorphic-fetch]
-   Fixtures
-   <https://fakes.piecioshka.io/products>

### 05-RegExp

-   Tasks
    -   When Product name has "er" string, do not add it to Cart and display Toast with error message
-   [RegExp#test]
-   Parts:
    -   [Quantifiers]: `*`, `+`, `?`, `{n}`
    -   [Matchers]: `.`, `\w`, `\d`, `\n`
-   <https://regex101.com/>

## Development

```bash
npm run build # generate dist/
npm run watch # generate dist/ & listen for changes
npm run dev   # do not generate anything & listen for changes
```

## Unit tests

```bash
npm test
npm test -- test/specs/XX # XX => 01...05
```

## Code coverage

```bash
npm run coverage
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/piecioshka/warsawjs-workshop-43-online-store/issues/).

## Show your support

Give a ⭐️ if this project helped you!

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2020
