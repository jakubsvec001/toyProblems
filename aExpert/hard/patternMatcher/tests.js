"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tests = {
    0: {
        input: ['xxyxxy', 'gogopowerrangergogopowerranger'],
        output: ['go', 'powerranger']
    },
    1: {
        input: ['xyxy', 'ahabwhaleahabwhale'],
        output: ['ahab', 'whale'],
    },
    2: {
        input: ['xyx', 'billiondollarbillion'],
        output: ['billion', 'dollar'],
    },
    3: {
        input: ['xxy', 'hahaha'],
        output: [],
    },
    4: {
        input: ['xyy', 'adoozydoozy'],
        output: ['a', 'doozy'],
    },
    5: {
        input: ['xxx', 'stringhere'],
        output: [],
    },
    6: {
        input: ['yy', 'stringhere'],
        output: [],
    },
    7: {
        input: ['xy', 'stringhere'],
        output: [],
    },
    8: {
        input: ['xx', 'stringhere'],
        output: [],
    },
    9: {
        input: ['yy', 'stringstring'],
        output: [],
    },
    10: {
        input: ['y', 'stringhere'],
        output: [],
    },
    11: {
        input: ['x', 'stringhere'],
        output: [],
    },
    12: {
        input: ['xyxy', 'angelinaanistonangelinaaniston'],
        output: ['angelinaan', 'iston'],
    },
    13: {
        input: ['xxyy', 'angelinaangelinanistonniston'],
        output: ['angelina', 'niston'],
    },
};
exports.default = tests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLE1BQU0sS0FBSyxHQUFVO0lBQ25CLENBQUMsRUFBRTtRQUNELEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxnQ0FBZ0MsQ0FBQztRQUNuRCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDO0tBQzlCO0lBQ0QsQ0FBQyxFQUFFO1FBQ0QsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLG9CQUFvQixDQUFDO1FBQ3JDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7S0FDMUI7SUFDRCxDQUFDLEVBQUU7UUFDRCxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsc0JBQXNCLENBQUM7UUFDdEMsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQztLQUM5QjtJQUNELENBQUMsRUFBRTtRQUNELEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7UUFDeEIsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNELENBQUMsRUFBRTtRQUNELEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUM7UUFDN0IsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQztLQUN2QjtJQUNELENBQUMsRUFBRTtRQUNELEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUM7UUFDNUIsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNELENBQUMsRUFBRTtRQUNELEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUM7UUFDM0IsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNELENBQUMsRUFBRTtRQUNELEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUM7UUFDM0IsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNELENBQUMsRUFBRTtRQUNELEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUM7UUFDM0IsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNELENBQUMsRUFBRTtRQUNELEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUM7UUFDN0IsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNELEVBQUUsRUFBRTtRQUNGLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUM7UUFDMUIsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNELEVBQUUsRUFBRTtRQUNGLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUM7UUFDMUIsTUFBTSxFQUFFLEVBQUU7S0FDWDtJQUNELEVBQUUsRUFBRTtRQUNGLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxnQ0FBZ0MsQ0FBQztRQUNqRCxNQUFNLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDO0tBQ2hDO0lBQ0QsRUFBRSxFQUFFO1FBQ0YsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLDhCQUE4QixDQUFDO1FBQy9DLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUM7S0FDL0I7Q0FDRixDQUFBO0FBRUQsa0JBQWUsS0FBSyxDQUFDIn0=