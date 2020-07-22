"use strict";
exports.__esModule = true;
exports.tests = exports.deepSort = void 0;
exports.deepSort = function (array) {
    // first sort by length;
    var byLength = {};
    array.forEach(function (item, i) {
        if (!byLength[item.length]) {
            byLength[item.length] = [item];
        }
        else {
            byLength[item.length].push(item);
        }
    });
    // sort within each length
    var result = [];
    for (var key in byLength) {
        var values = byLength[key];
        values.sort(function (a, b) {
            for (var i = 0; i < a.length; i += 1) {
                if (a[i] !== b[i]) {
                    return a[i] > b[i];
                }
            }
        });
        result.push.apply(result, values);
    }
    return result;
};
exports.tests = {
    1: {
        input: [1, 2, 3],
        output: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
    },
    2: {}
};
// console.log(deepSort([[2,3],[],[2],[1,2,3],[1,2],[1,3],[3],[1]));
// console.log(tests[1].output)
