"use strict";

var _ = require("lodash");

var options = require("./options");
var parser = require("./parser");
var sorter = require("./sorter");
var writer = require("./writer");

function sortString(inputString, customOptions) {
    if (inputString === null) {
        return null;
    } else if (inputString === undefined) {
        return undefined;
    }

    var combinedOptions = _.extend({}, options, customOptions);
    var requireSections = parser.getRequireSections(inputString);
    var sortedSections = sorter.sortSections(requireSections);
    var outputString = writer.replaceSections(inputString, sortedSections, combinedOptions);

    return outputString;
}

module.exports = {
    sortString: sortString
};
