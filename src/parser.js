"use strict";

var _ = require("lodash");

function newSection() {
    return {
        rows: []
    };
}

function isRequireRow(row) {
    return _.includes(row, "require(") && _.endsWith(row.trim(), ";");
}

function isSectionEnd(row, section) {
    return _.isNumber(section.startIndex) && !_.isEmpty(row.trim())
}

function isLastSection(section, index, array) {
    return _.isNumber(section.startIndex) && index === array.length - 1;
}

function getRequireSections(inputString) {
    var inputArray = inputString.split(/\r?\n/);
    var section = newSection();
    var sections = [];

    inputArray.forEach(function(row, index) {
        if (isRequireRow(row)) {
            section.startIndex = _.isUndefined(section.startIndex) ? index : section.startIndex;
            section.endIndex = index;
            section.rows.push(row);
        } else if (isSectionEnd(row, section)) {
            sections.push(section);
            section = newSection();
        }

        if (isLastSection(section, index, inputArray)) {
            sections.push(section);
        }
    });

    return sections;
}

module.exports = {
    getRequireSections: getRequireSections
};
