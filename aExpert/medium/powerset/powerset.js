"use strict";
// given an array X of unique integers, a powerset function returns the set of all subsets of X.
exports.__esModule = true;
var powerset = function (array) {
    var subsets = [[]];
    var ele;
    for (var i = 0; i < array.length; i += 1) {
        ele = array[i];
        var length_1 = subsets.length;
        for (var j = 0; j < length_1; j += 1) {
            var currentSubset = subsets[j];
            subsets.push(currentSubset.concat(ele));
        }
    }
    return subsets;
};
console.log(powerset([1, 2, 3, 4]));
exports["default"] = powerset;
