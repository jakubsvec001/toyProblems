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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sS0FBSyxHQUFHO0lBQ1osQ0FBQyxFQUFFO1FBQ0QsS0FBSyxFQUFFLHdDQUF3QztRQUMvQyxNQUFNLEVBQUUsY0FBYztLQUN2QjtJQUNELENBQUMsRUFBRTtRQUNELEtBQUssRUFBRSxzQkFBc0I7UUFDN0IsTUFBTSxFQUFFLEdBQUc7S0FDWjtJQUNELENBQUMsRUFBRTtRQUNELEtBQUssRUFBRSx3QkFBd0I7UUFDL0IsTUFBTSxFQUFFLE1BQU07S0FDZjtJQUNELENBQUMsRUFBRTtRQUNELEtBQUssRUFBRSxjQUFjO1FBQ3JCLE1BQU0sRUFBRSxjQUFjO0tBQ3ZCO0lBQ0QsQ0FBQyxFQUFFO1FBQ0QsS0FBSyxFQUFFLHVCQUF1QjtRQUM5QixNQUFNLEVBQUUsY0FBYztLQUN2QjtJQUNELENBQUMsRUFBRTtRQUNELEtBQUssRUFBRSxxSEFBcUg7UUFDNUgsTUFBTSxFQUFFLDZCQUE2QjtLQUN0QztJQUNELENBQUMsRUFBRTtRQUNELEtBQUssRUFBRSxrSEFBa0g7UUFDekgsTUFBTSxFQUFFLHlCQUF5QjtLQUNsQztDQUNGLENBQUE7QUFFRCxrQkFBZSxLQUFLLENBQUMifQ==