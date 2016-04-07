"use strict";

var assert = require("assert");
var fs = require("fs");

var sorter = require("../src/require-sort");

describe("require-sort tests", function() {

    it("should sort basic input file", function() {
        var inputString = fs.readFileSync("./test/input/input-basic.js").toString();
        var outputString = fs.readFileSync("./test/output/output-basic.js").toString();

        var sortedString = sorter.sortString(inputString);

        assert.equal(sortedString, outputString);
    });

    it("should sort groups input file", function() {
        var inputString = fs.readFileSync("./test/input/input-groups.js").toString();
        var outputString = fs.readFileSync("./test/output/output-groups.js").toString();

        var sortedString = sorter.sortString(inputString);

        assert.equal(sortedString, outputString);
    });

});
