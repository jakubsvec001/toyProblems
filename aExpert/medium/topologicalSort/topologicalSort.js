"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const topologicalSort = (jobs, deps) => {
    const result = [];
    const adjacencyList = {};
    for (const job of jobs) {
        adjacencyList[job] = [];
    }
    for (const tup of deps) {
        if (!adjacencyList[tup[1]]) {
            return [];
        }
        adjacencyList[tup[1]].push(tup[0]);
    }
    while (true) {
        const canComplete = [];
        for (const key in adjacencyList) {
            const list = adjacencyList[key];
            if (!list.length) {
                canComplete.push(+key);
            }
        }
        if (!canComplete.length) {
            return [];
        }
        result.push(...canComplete);
        for (let completed of canComplete) {
            delete adjacencyList[completed];
        }
        if (!Object.keys(adjacencyList).length) {
            return result;
        }
        for (let key in adjacencyList) {
            let list = adjacencyList[key];
            for (let completed of canComplete) {
                list = list.filter((item) => {
                    if (item !== completed)
                        return true;
                });
            }
            adjacencyList[key] = list;
        }
    }
    if (jobs.length) {
        return [];
    }
    return result;
};
console.log(topologicalSort([1, 2, 3, 4, 5], [
    [5, 1],
    [5, 3],
    [5, 2],
    [5, 4],
    [3, 4],
    [4, 1],
    [3, 2],
    [2, 1],
]));
exports.default = topologicalSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wb2xvZ2ljYWxTb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9wb2xvZ2ljYWxTb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxlQUFlLEdBQUcsQ0FBQyxJQUFhLEVBQUUsSUFBZSxFQUFXLEVBQUU7SUFDbEUsTUFBTSxNQUFNLEdBQVksRUFBRSxDQUFDO0lBSzNCLE1BQU0sYUFBYSxHQUFrQixFQUFFLENBQUM7SUFFeEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDdEIsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUN6QjtJQUVELEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDbkM7SUFNRCxPQUFPLElBQUksRUFBRTtRQUVYLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN2QixLQUFLLE1BQU0sR0FBRyxJQUFJLGFBQWEsRUFBRTtZQUMvQixNQUFNLElBQUksR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hCLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUN2QjtTQUNGO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDdkIsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQTtRQUUzQixLQUFLLElBQUksU0FBUyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxPQUFPLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBQztZQUNyQyxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBRUQsS0FBSyxJQUFJLEdBQUcsSUFBSSxhQUFhLEVBQUU7WUFDN0IsSUFBSSxJQUFJLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLEtBQUssSUFBSSxTQUFTLElBQUksV0FBVyxFQUFFO2dCQUNqQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBQyxFQUFFO29CQUN6QixJQUFJLElBQUksS0FBSyxTQUFTO3dCQUFFLE9BQU8sSUFBSSxDQUFDO2dCQUN0QyxDQUFDLENBQUMsQ0FBQTthQUNIO1lBQ0QsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMzQjtLQU9GO0lBTUQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ2YsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQTtBQUVELE9BQU8sQ0FBQyxHQUFHLENBQ1QsZUFBZSxDQUNiLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNmO0lBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ1AsQ0FDRixDQUNGLENBQUE7QUFFRCxrQkFBZSxlQUFlLENBQUMifQ==