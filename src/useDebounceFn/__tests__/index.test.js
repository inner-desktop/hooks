import { __read, __spread } from "tslib";
import { act, renderHook } from '@testing-library/react-hooks';
import useDebounceFn from '../index';
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
    return renderHook(function () { return useDebounceFn(fn, wait); });
};
var hook;
describe('useDebounceFn', function () {
    beforeEach(function () {
        jest.useFakeTimers();
    });
    afterEach(function () {
        jest.useRealTimers();
    });
    it('should be defined', function () {
        expect(useDebounceFn).toBeDefined();
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
            jest.runAllTimers();
            expect(count).toBe(2);
            hook.result.current.run(4);
            jest.runAllTimers();
            expect(count).toBe(6);
            hook.result.current.run(4);
            hook.result.current.cancel();
            jest.runAllTimers();
            expect(count).toBe(6);
        });
    });
    it('deps should work', function () {
        var c = 0;
        var mountedState = 1;
        act(function () {
            hook = renderHook(function () {
                return useDebounceFn(function () {
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
            jest.runAllTimers();
            expect(c).toEqual(1);
            mountedState = 4;
            hook.rerender();
            expect(c).toEqual(1);
            jest.runAllTimers();
            expect(c).toEqual(2);
        });
    });
});
//# sourceMappingURL=index.test.js.map