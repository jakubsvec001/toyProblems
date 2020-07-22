"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testCases_1 = require("./testCases");
const searchInSortedMatrix = (matrix, target) => {
    let result = [-1, -1];
    for (let i = 0; i < matrix.length; i += 1) {
        let min = matrix[i][0];
        let max = matrix[i][matrix[i].length - 1];
        if (target >= min && target <= max) {
            for (let j = 0; j < matrix[i].length; j += 1) {
                if (matrix[i][j] === target) {
                    return [i, j];
                }
            }
        }
    }
    return result;
};
const num = 0;
console.log(searchInSortedMatrix(testCases_1.matrixTests[num].matrix, testCases_1.matrixTests[num].target));
exports.default = searchInSortedMatrix;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoSW5Tb3J0ZWRNYXRyaXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2hJblNvcnRlZE1hdHJpeC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDJDQUF1RDtBQUd2RCxNQUFNLG9CQUFvQixHQUFHLENBQUMsTUFBaUIsRUFBRSxNQUFhLEVBQWtCLEVBQUU7SUFDaEYsSUFBSSxNQUFNLEdBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUVwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBRXpDLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLE1BQU0sSUFBSSxHQUFHLElBQUksTUFBTSxJQUFJLEdBQUcsRUFBRTtZQUVsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUU1QyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLEVBQUU7b0JBQzNCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7aUJBQ2Q7YUFDRjtTQUNGO0tBQ0Y7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUE7QUFFRCxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUE7QUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLHVCQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLHVCQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtBQUVuRixrQkFBZSxvQkFBb0IsQ0FBQyJ9