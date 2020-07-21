"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tests = void 0;
const tests = {
    1: {
        input: [
            [1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0]
        ],
        output: [1, 2, 2, 2, 5],
    },
    2: {
        input: [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
        ],
        output: [12],
    },
    3: {
        input: [
            [],
        ],
        output: []
    },
    4: {
        input: [
            [0, 0, 0, 0],
        ],
        output: []
    },
    5: {
        input: [
            [1, 0, 1, 1],
        ],
        output: [1, 2]
    },
    6: {
        input: [
            [1],
            [0],
            [1],
            [1],
        ],
        output: [1, 2]
    },
    7: {
        input: [
            [0, 1, 0, 1],
            [1, 1, 0, 1],
            [1, 0, 1, 1],
            [1, 1, 1, 0],
        ],
        output: [11]
    },
};
exports.tests = tests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFPQSxNQUFNLEtBQUssR0FBaUI7SUFDMUIsQ0FBQyxFQUFFO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQ1o7UUFDRCxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsQ0FBQyxFQUFFO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUNSO1FBQ0QsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO0tBQ2I7SUFDRCxDQUFDLEVBQUU7UUFDRCxLQUFLLEVBQUU7WUFDTCxFQUFFO1NBQ0g7UUFDRCxNQUFNLEVBQUUsRUFBRTtLQUNYO0lBQ0QsQ0FBQyxFQUFFO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7U0FDVjtRQUNELE1BQU0sRUFBRSxFQUFFO0tBQ1g7SUFDRCxDQUFDLEVBQUU7UUFDRCxLQUFLLEVBQUU7WUFDTCxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUNWO1FBQ0QsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNmO0lBQ0QsQ0FBQyxFQUFFO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDZjtJQUNELENBQUMsRUFBRTtRQUNELEtBQUssRUFBRTtZQUNMLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2I7UUFDRCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7S0FDYjtDQUNGLENBQUE7QUFFUSxzQkFBSyJ9