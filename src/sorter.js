"use strict";

var _ = require("lodash");

var grouper = require("./grouper");

function getRequireName(row) {
    return row.split("require(\"")[1].split("\")")[0];
}

function pathSorter(a, b) {
    var nameA = getRequireName(a);
    var nameB = getRequireName(b);

    return nameA.localeCompare(nameB);
}

function sortSections(sectionArray) {
    sectionArray.forEach(function(section) {
        section.rowGroups = grouper.groupRows(section.rows);

        section.rowGroups.forEach(function(rows) {
            rows.sort(pathSorter);
        });
    });

    return sectionArray;
}

module.exports = {
    sortSections: sortSections
};
