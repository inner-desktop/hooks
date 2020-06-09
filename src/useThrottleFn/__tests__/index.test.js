import { __read, __spread } from "tslib";
import { act, renderHook } from '@testing-library/react-hooks';
import useThrottleFn from '../index';
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
var count = 0;
var debounceFn = function (gap) {
    count += gap;
};
var setUp = function (_a) {
    var fn = _a.fn, wait = _a.wait;
    return renderHook(function () { return useThrottleFn(fn, wait); });
};
var hook;
describe('useThrottleFn', function () {
    beforeEach(function () {
        jest.useFakeTimers();
    });
    afterEach(function () {
        jest.useRealTimers();
    });
    it('should be defined', function () {
        expect(useThrottleFn).toBeDefined();
    });
    it('run and cancel should work', function () {
        act(function () {
            hook = setUp({
                fn: debounceFn,
                wait: 500,
            });
        });
        act(function () {
            hook.result.current.run(2);
            hook.result.current.run(2);
            hook.result.current.run(2);
            hook.result.current.run(2);
            jest.advanceTimersByTime(250);
            expect(count).toBe(0);
            hook.result.current.run(4);
            jest.advanceTimersByTime(250);
            expect(count).toBe(4);
            hook.result.current.run(4);
            hook.result.current.cancel();
            jest.runAllTimers();
            expect(count).toBe(4);
        });
    });
    it('deps should work', function () {
        var c = 0;
        var mountedState = 1;
        act(function () {
            hook = renderHook(function () {
                return useThrottleFn(function () {
                    c += 1;
                }, [mountedState], 500);
            });
        });
        act(function () {
            expect(c).toEqual(0);
            mountedState = 2;
            hook.rerender();
            mountedState = 3;
            hook.rerender();
            jest.advanceTimersByTime(250);
            expect(c).toEqual(0);
            mountedState = 4;
            hook.rerender();
            expect(c).toEqual(0);
            jest.advanceTimersByTime(250);
            expect(c).toEqual(1);
        });
    });
});
//# sourceMappingURL=index.test.js.map