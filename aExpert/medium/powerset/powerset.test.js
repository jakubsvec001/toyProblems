"use strict";
exports.__esModule = true;
var powerset_1 = require("./powerset");
var tests_1 = require("./tests");
describe('deepSort', function () {
    it('1', function () {
        expect(tests_1.deepSort([[2, 3], [], [2], [1, 2, 3], [1, 2], [1, 3], [3], [1]])).toEqual([[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]);
    });
});
describe('powerset', function () {
    it('1', function () {
        expect(tests_1.deepSort(powerset_1["default"]([1, 2, 3]))).toEqual(tests_1.deepSort([[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]));
    });
    it('2', function () {
        expect(powerset_1["default"]([1, 2])).toEqual([[], [1], [2], [1, 2]]);
    });
    it('3', function () {
        expect(tests_1.deepSort(powerset_1["default"]([1, 2, 3, 4]))).toEqual(tests_1.deepSort([
            [],
            [1],
            [2],
            [1, 2],
            [3],
            [1, 3],
            [2, 3],
            [1, 2, 3],
            [4],
            [1, 4],
            [2, 4],
            [1, 2, 4],
            [3, 4],
            [1, 3, 4],
            [2, 3, 4],
            [1, 2, 3, 4],
        ]));
    });
    it('4', function () {
        expect(tests_1.deepSort(powerset_1["default"]([1, 2, 3, 4, 5]))).toEqual(tests_1.deepSort([
            [],
            [1],
            [2],
            [1, 2],
            [3],
            [1, 3],
            [2, 3],
            [1, 2, 3],
            [4],
            [1, 4],
            [2, 4],
            [1, 2, 4],
            [3, 4],
            [1, 3, 4],
            [2, 3, 4],
            [1, 2, 3, 4],
            [5],
            [1, 5],
            [2, 5],
            [1, 2, 5],
            [3, 5],
            [1, 3, 5],
            [2, 3, 5],
            [1, 2, 3, 5],
            [4, 5],
            [1, 4, 5],
            [2, 4, 5],
            [1, 2, 4, 5],
            [3, 4, 5],
            [1, 3, 4, 5],
            [2, 3, 4, 5],
            [1, 2, 3, 4, 5],
        ]));
    });
});
