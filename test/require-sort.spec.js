"use strict";

var assert = require("assert");
var fs = require("fs");

var sorter = require("../src/require-sort");

describe("require-sort tests", function() {

    it("should handle null string", function() {
        var sortedString = sorter.sortString(null);

        assert.equal(sortedString, null);
    });

    it("should handle undefined string", function() {
        var sortedString = sorter.sortString(undefined);

        assert.equal(sortedString, undefined);
    });

    it("should handle empty string", function() {
        var sortedString = sorter.sortString("");

        assert.equal(sortedString, "");
    });

    it("should handle a one line string", function() {
        var inputString = "alpha beta gamma delta";
        var sortedString = sorter.sortString(inputString);

        assert.equal(sortedString, inputString);
    });

    it("should handle one require statement", function() {
        var inputString = "var foo = require(\"bar\");";
        var sortedString = sorter.sortString(inputString);

        assert.equal(sortedString, inputString);
    });

    it("should handle windows line endings", function() {
        var inputString = "var foo = require(\"bar\");\r\n";
        var sortedString = sorter.sortString(inputString);

        assert.equal(sortedString, inputString);
    });

    it("should handle mac line endings", function() {
        var inputString = "var foo = require(\"bar\");\r";
        var sortedString = sorter.sortString(inputString);

        assert.equal(sortedString, inputString);
    });

    it("should handle unix line endings", function() {
        var inputString = "var foo = require(\"bar\");\n";
        var sortedString = sorter.sortString(inputString);

        assert.equal(sortedString, inputString);
    });

    it("should sort basic input file", function() {
        var inputString = fs.readFileSync("./test/input/input-basic.js").toString();
        var outputString = fs.readFileSync("./test/output/output-basic.js").toString();

        var sortedString = sorter.sortString(inputString);

        assert.equal(sortedString, outputString);
    });

    it("should sort basic input file with emptyLines enabled", function() {
        var inputString = fs.readFileSync("./test/input/input-basic.js").toString();
        var outputString = fs.readFileSync("./test/output/output-basic-divided.js").toString();

        var sortedString = sorter.sortString(inputString, {emptyLines: true});

        assert.equal(sortedString, outputString);
    });

    it("should sort groups input file", function() {
        var inputString = fs.readFileSync("./test/input/input-groups.js").toString();
        var outputString = fs.readFileSync("./test/output/output-groups.js").toString();

        var sortedString = sorter.sortString(inputString);

        assert.equal(sortedString, outputString);
    });

    it("should sort groups input file with emptyLines enabled", function() {
        var inputString = fs.readFileSync("./test/input/input-groups.js").toString();
        var outputString = fs.readFileSync("./test/output/output-groups-divided.js").toString();

        var sortedString = sorter.sortString(inputString, {emptyLines: true});

        assert.equal(sortedString, outputString);
    });

});
