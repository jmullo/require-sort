# require-sort

A utility for sorting require() statements.

[![NPM Version](https://img.shields.io/npm/v/require-sort.svg)](https://www.npmjs.com/package/require-sort)
[![Build Status](https://travis-ci.org/jmullo/require-sort.svg?branch=master)](https://travis-ci.org/jmullo/require-sort)
[![Dependencies Status](https://david-dm.org/jmullo/require-sort.svg)](https://david-dm.org/jmullo/require-sort)
[![Dev Dependencies Status](https://david-dm.org/jmullo/require-sort/dev-status.svg)](https://david-dm.org/jmullo/require-sort#info=devDependencies)

## Installation

```
$ npm install require-sort
```

## Functionality

- Sorts based on required name, not variable name
- Sorts into groups based on directory location
- Sorts all sections of require statements

```js
var alpha = require("alpha");           // external group
var xalpha = require("xalpha");
var beta = require("beta/beta");        // path group
var xbeta = require("xbeta/xbeta");
var gamma = require("/gamma");          // absolute group
var xgamma = require("/xgamma");
var delta = require("./delta");         // relative group
var xdelta = require("./xdelta");
var epsilon = require("../epsilon");    // parent group
var xepsilon = require("../xepsilon");
```

## Usage

```js
var sorter = require("require-sort");

// file content in inputString
var sortedString = sorter.sortString(inputString);

// custom options object
var sortedString = sorter.sortString(inputString, options);
```

## Options

```js
var options = {
    emptyLines: false   // separate require statement groups with empty lines
};
```

## License

[The MIT License (MIT)](https://github.com/jmullo/require-sort/blob/master/LICENSE)
