import { __read, __spread } from "tslib";
import { act, renderHook } from '@testing-library/react-hooks';
import useThrottle from '../index';
/* 暂时关闭 act 警告  见：https://github.com/testing-library/react-testing-library/issues/281#issuecomment-480349256 */
var originalError = console.error;
beforeAll(function () {
    console.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (/Warning.*not wrapped in act/.test(args[0])) {
            return;
        }
        originalError.call.apply(originalError, __spread([console], args));
    };
});
afterAll(function () {
    console.error = originalError;
});
var hook;
describe('useThrottle', function () {
    beforeEach(function () {
        jest.useFakeTimers();
    });
    afterEach(function () {
        jest.useRealTimers();
    });
    it('should be defined', function () {
        expect(useThrottle).toBeDefined();
    });
    it('useThrottle should work', function () {
        var mountedState = 1;
        act(function () {
            hook = renderHook(function () { return useThrottle(mountedState, 500); });
        });
        act(function () {
            expect(hook.result.current).toEqual(1);
            mountedState = 2;
            hook.rerender();
            mountedState = 3;
            hook.rerender();
            jest.advanceTimersByTime(250);
            expect(hook.result.current).toEqual(1);
            mountedState = 4;
            hook.rerender();
            jest.advanceTimersByTime(260);
            expect(hook.result.current).toEqual(4);
        });
    });
});
//# sourceMappingURL=index.test.js.map