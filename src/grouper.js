"use strict";

var _ = require("lodash");

var partitionFunctions = [
    function(name) {
        if (!_.startsWith(name, ".") && !_.startsWith(name, "/") && !_.includes(name, "/")) {
            return true;
        }
    },
    function(name) {
        if (!_.startsWith(name, ".") && !_.startsWith(name, "/") && _.includes(name, "/")) {
            return true;
        }
    },
    function(name) {
        if (_.startsWith(name, "/")) {
            return true;
        }
    },
    function(name) {
        if (_.startsWith(name, "./")) {
            return true;
        }
    },
    function(name) {
        if (_.startsWith(name, "../")) {
            return true;
        }
    }
];

function getRequireName(row) {
    return row.split("require(\"")[1].split("\")")[0];
}

function groupRows(rows) {
    var groups = [];
    var partitioned = [];
    var requireName = null;

    partitionFunctions.forEach(function(func) {
        var partitioned = _.partition(rows, function(row) {
            return func(getRequireName(row));
        });

        if (!_.isEmpty(partitioned[0])) {
            groups.push(partitioned[0]);
        }
    });

    return groups;
}

module.exports = {
    groupRows: groupRows
};
