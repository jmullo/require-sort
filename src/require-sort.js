"use strict";

var _ = require("lodash");

var parser = require("./parser");
var sorter = require("./sorter");
var writer = require("./writer");

function sortString(inputString) {
    var requireSections = parser.getRequireSections(inputString);
    var sortedSections = sorter.sortSections(requireSections);
    var outputString = writer.replaceSections(inputString, sortedSections);

    return outputString;
}

module.exports = {
    sortString: sortString
};
