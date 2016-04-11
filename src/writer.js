"use strict";

var _ = require("lodash");

function getLineEndingType(inputString) {
    if (_.includes(inputString, "\r\n")) {
        return "\r\n";
    } else if (_.includes(inputString, "\r")) {
        return "\r";
    }

    return "\n";
}

function replaceSection(inputArray, section, lineEnding) {
    inputArray[section.startIndex] = section.rowGroups.join(lineEnding);
}

function clearReplacedRows(inputArray, section) {
    var range = _.range(section.startIndex + 1, section.endIndex + 1 );

    range.map(function(index) {
        inputArray[index] = null;
    });
}

function replaceSections(inputString, sectionArray) {
    var inputArray = inputString.split(/\r?\n/);
    var lineEnding = getLineEndingType(inputString);

    sectionArray.forEach(function(section) {
        section.rowGroups.forEach(function(group, index) {
            section.rowGroups[index] = group.join(lineEnding);
        });

        replaceSection(inputArray, section, lineEnding);
        clearReplacedRows(inputArray, section);
    });

    inputArray = _.without(inputArray, null).join(lineEnding);

    return inputArray;
}

module.exports = {
    replaceSections: replaceSections
};
