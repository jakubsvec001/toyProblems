"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shortenPath = (path) => {
    const longPath = path.split('/');
    const stack = [];
    let upDir = 0;
    for (let dir of longPath) {
        if (dir === '.' || dir === '') {
            continue;
        }
        else if (dir === '..') {
            if (!stack.length) {
                upDir += 1;
            }
            else {
                stack.pop();
            }
        }
        else {
            stack.push(dir);
        }
    }
    const res = stack.join('/');
    if (path[0] === '/') {
        return '/' + res;
    }
    else {
        for (let i = 0; i < upDir; i += 1) {
            stack.unshift('..');
        }
        return stack.join('/');
    }
};
exports.default = shortenPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnRlblBhdGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaG9ydGVuUGF0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLE1BQU0sV0FBVyxHQUFHLENBQUMsSUFBVyxFQUFTLEVBQUU7SUFDekMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDakIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsS0FBSyxJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUU7UUFDeEIsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFDN0IsU0FBUztTQUNWO2FBQU0sSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNqQixLQUFLLElBQUksQ0FBQyxDQUFDO2FBQ1o7aUJBQU07Z0JBQ0wsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2I7U0FDRjthQUFNO1lBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjtLQUNGO0lBQ0QsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDbkIsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFBO0tBQ2pCO1NBQU07UUFDTCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNwQjtRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN4QjtBQUNILENBQUMsQ0FBQTtBQUdELGtCQUFlLFdBQVcsQ0FBQyJ9