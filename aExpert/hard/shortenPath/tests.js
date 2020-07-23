"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tests = {
    0: {
        input: '/foo/../test/../test/../foo//bar/./baz',
        output: '/foo/bar/baz',
    },
    1: {
        input: '/../../foo/../../../',
        output: '/',
    },
    2: {
        input: '/./foo/bar/baz/../../.',
        output: '/foo',
    },
    3: {
        input: '/foo/bar/baz',
        output: '/foo/bar/baz',
    },
    4: {
        input: '/foo/bar//////////baz',
        output: '/foo/bar/baz',
    },
    5: {
        input: '../../../this////one/./../../is/../../going/../../to/be/./././../../../just/eight/double/dots/../../../../../../foo',
        output: '../../../../../../../../foo',
    },
    6: {
        input: '../../../this////one/./../../is/../../going/../../to/be/./././../../../just/eight/double/dots/../../../../../../',
        output: '../../../../../../../..'
    }
};
exports.default = tests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLE1BQU0sS0FBSyxHQUFTO0lBQ2xCLENBQUMsRUFBRTtRQUNELEtBQUssRUFBRSx3Q0FBd0M7UUFDL0MsTUFBTSxFQUFFLGNBQWM7S0FDdkI7SUFDRCxDQUFDLEVBQUU7UUFDRCxLQUFLLEVBQUUsc0JBQXNCO1FBQzdCLE1BQU0sRUFBRSxHQUFHO0tBQ1o7SUFDRCxDQUFDLEVBQUU7UUFDRCxLQUFLLEVBQUUsd0JBQXdCO1FBQy9CLE1BQU0sRUFBRSxNQUFNO0tBQ2Y7SUFDRCxDQUFDLEVBQUU7UUFDRCxLQUFLLEVBQUUsY0FBYztRQUNyQixNQUFNLEVBQUUsY0FBYztLQUN2QjtJQUNELENBQUMsRUFBRTtRQUNELEtBQUssRUFBRSx1QkFBdUI7UUFDOUIsTUFBTSxFQUFFLGNBQWM7S0FDdkI7SUFDRCxDQUFDLEVBQUU7UUFDRCxLQUFLLEVBQUUscUhBQXFIO1FBQzVILE1BQU0sRUFBRSw2QkFBNkI7S0FDdEM7SUFDRCxDQUFDLEVBQUU7UUFDRCxLQUFLLEVBQUUsa0hBQWtIO1FBQ3pILE1BQU0sRUFBRSx5QkFBeUI7S0FDbEM7Q0FDRixDQUFBO0FBRUQsa0JBQWUsS0FBSyxDQUFDIn0=