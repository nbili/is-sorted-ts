# is-sorted-ts ![NPM version](https://img.shields.io/npm/v/is-sorted-ts.svg?style=flat) ![Linux Build Status](https://travis-ci.com/nbili/is-sorted-ts.svg?branch=master)

A small module to check if an Array is sorted

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save is-sorted-ts
```

## Usage

```js
const isSorted = require('is-sorted-ts')

console.log(isSorted([])) // true
console.log(isSorted([1, 2, 3])) // true
console.log(isSorted([3, 2, 1], (a, b) => b - a)) // false 
```