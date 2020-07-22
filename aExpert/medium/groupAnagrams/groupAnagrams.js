"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const groupAnagrams = (array) => {
    if (!array.length) {
        return [];
    }
    const fingerprints = {};
    for (let word of array) {
        const arr = word.split('');
        arr.sort((a, b) => {
            if (a.charCodeAt(0) < b.charCodeAt(0)) {
                return -1;
            }
            else {
                return 1;
            }
        });
        const serialized = arr.join('');
        if (fingerprints[serialized]) {
            fingerprints[serialized].push(word);
        }
        else {
            fingerprints[serialized] = [word];
        }
    }
    return Object.values(fingerprints);
};
console.log(groupAnagrams(['yo', 'act', 'flop', 'tac', 'cat', 'oy', 'olfp']));
exports.default = groupAnagrams;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBBbmFncmFtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyb3VwQW5hZ3JhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQWMsRUFBYSxFQUFFO0lBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ2pCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFLRCxNQUFNLFlBQVksR0FBaUIsRUFBRSxDQUFBO0lBQ3JDLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFO1FBRXRCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNYO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUVGLE1BQU0sVUFBVSxHQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkMsSUFBSSxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDNUIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQzthQUFNO1lBQ0wsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7S0FDRjtJQUNELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUE7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUU5RSxrQkFBZSxhQUFhLENBQUMifQ==