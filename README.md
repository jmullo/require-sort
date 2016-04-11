# require-sort

A utility for sorting require() statements.

## Installation

```
$ npm install require-sort
```
## Usage

```js
var sorter = require("require-sort");

// file content in inputString
var sortedString = sorter.sortString(inputString);
```

## Functionality

- Sorts based on required name, not variable name
- Sorts all sections of require statements

```js
var alpha = require("alpha");
var beta = require("beta/beta");
var gamma = require("/gamma");
var delta = require("./delta");
var epsilon = require("../epsilon");
```

## License

[The MIT License (MIT)](https://github.com/jmullo/require-sort/blob/master/LICENSE)
