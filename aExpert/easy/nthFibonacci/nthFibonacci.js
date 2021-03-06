"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoizedGetNthFib = void 0;
function getNthFib(n) {
    if (n <= 1) {
        return 0;
    }
    else if (n === 2) {
        return 1;
    }
    return getNthFib(n - 2) + getNthFib(n - 1);
}
let memoizedGetNthFib;
exports.memoizedGetNthFib = memoizedGetNthFib;
exports.memoizedGetNthFib = memoizedGetNthFib = function (n) {
    const memo = {};
    const memoize = (n) => {
        if (!memo[n]) {
            memo[n] = memoizedGetNthFib(n);
        }
        return memo[n];
    };
    const recurse = (n) => {
        if (n <= 1) {
            return 0;
        }
        else if (n === 2) {
            return 1;
        }
        const a = memoize(n - 1);
        const b = memoize(n - 2);
        return a + b;
    };
    return recurse(n);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnRoRmlib25hY2NpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibnRoRmlib25hY2NpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLFNBQVMsU0FBUyxDQUFDLENBQVM7SUFDMUIsSUFBSSxDQUFDLElBQUUsQ0FBQyxFQUFDO1FBQ1AsT0FBTyxDQUFDLENBQUM7S0FDVjtTQUFNLElBQUksQ0FBQyxLQUFHLENBQUMsRUFBRTtRQUNoQixPQUFPLENBQUMsQ0FBQztLQUNWO0lBQ0QsT0FBTyxTQUFTLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUE7QUFDeEMsQ0FBQztBQUVELElBQUksaUJBQXdDLENBQUM7QUEyQnBDLDhDQUFpQjtBQXpCMUIsNEJBQUEsaUJBQWlCLEdBQUcsVUFBVSxDQUFDO0lBSTdCLE1BQU0sSUFBSSxHQUFTLEVBQUUsQ0FBQztJQUN0QixNQUFNLE9BQU8sR0FBRyxDQUFDLENBQVMsRUFBVSxFQUFFO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDWixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDL0I7UUFDRCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixDQUFDLENBQUE7SUFDRCxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQVMsRUFBVSxFQUFFO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7YUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUc7WUFDbkIsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUNELE1BQU0sQ0FBQyxHQUFXLE9BQU8sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLEdBQVcsT0FBTyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUU7SUFDaEIsQ0FBQyxDQUFBO0lBRUQsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFBIn0=