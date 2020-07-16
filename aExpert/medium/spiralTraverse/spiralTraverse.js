"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spiralTraverse = (array) => {
    let result = [];
    let rStart = 0;
    let cStart = 0;
    let rEnd = array.length - 1;
    let cEnd = array[0].length - 1;
    let step = 1;
    let i;
    const processes = {
        right: () => {
            for (i = cStart; i <= cEnd; i += 1) {
                result.push(array[rStart][i]);
            }
            rStart += 1;
        },
        down: () => {
            for (i = rStart; i <= rEnd; i += 1) {
                result.push(array[i][cEnd]);
            }
            cEnd -= 1;
        },
        left: () => {
            for (i = cEnd; i >= cStart; i -= 1) {
                result.push(array[rEnd][i]);
            }
            rEnd -= 1;
        },
        up: () => {
            for (let i = rEnd; i >= rStart; i -= 1) {
                result.push(array[i][cStart]);
            }
            cStart += 1;
        },
    };
    while (rStart <= rEnd && cStart <= cEnd) {
        if (step % 4 === 1)
            processes.right();
        else if (step % 4 === 2)
            processes.down();
        else if (step % 4 === 3)
            processes.left();
        else if (step % 4 === 0)
            processes.up();
        step += 1;
    }
    return result;
};
exports.default = spiralTraverse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BpcmFsVHJhdmVyc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGlyYWxUcmF2ZXJzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWdCQSxNQUFNLGNBQWMsR0FBRyxDQUFDLEtBQVksRUFBVyxFQUFFO0lBQy9DLElBQUksTUFBTSxHQUFZLEVBQUUsQ0FBQztJQUN6QixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1QixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFFLENBQUMsQ0FBQztJQUM5QixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLENBQUMsQ0FBQztJQUdOLE1BQU0sU0FBUyxHQUFHO1FBR2hCLEtBQUssRUFBRyxHQUFHLEVBQUU7WUFDWCxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQzlCO1lBQ0QsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUNkLENBQUM7UUFHRCxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQ1QsS0FBSyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUM3QjtZQUNELElBQUksSUFBSSxDQUFDLENBQUM7UUFDWixDQUFDO1FBR0QsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUNULEtBQUssQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0I7WUFDRCxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQ1osQ0FBQztRQUdELEVBQUUsRUFBRSxHQUFHLEVBQUU7WUFDUCxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDL0I7WUFDRCxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2QsQ0FBQztLQUNGLENBQUE7SUFHRCxPQUFPLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtRQUN2QyxJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQztZQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNqQyxJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQztZQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNyQyxJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQztZQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNyQyxJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQztZQUFFLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN4QyxJQUFJLElBQUksQ0FBQyxDQUFBO0tBQ1Y7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFHRixrQkFBZSxjQUFjLENBQUMifQ==