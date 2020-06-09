import { __read, __spread } from "tslib";
import { act, renderHook } from '@testing-library/react-hooks';
import useDebounce from '../index';
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
describe('useDebounce', function () {
    beforeEach(function () {
        jest.useFakeTimers();
    });
    afterEach(function () {
        jest.useRealTimers();
    });
    it('should be defined', function () {
        expect(useDebounce).toBeDefined();
    });
    it('useDebounce should work', function () {
        var mountedState = 1;
        act(function () {
            hook = renderHook(function () { return useDebounce(mountedState, 500); });
        });
        act(function () {
            expect(hook.result.current).toEqual(1);
            mountedState = 2;
            hook.rerender();
            mountedState = 3;
            hook.rerender();
            jest.runAllTimers();
            expect(hook.result.current).toEqual(3);
            mountedState = 4;
            hook.rerender();
            expect(hook.result.current).toEqual(3);
            jest.runAllTimers();
            expect(hook.result.current).toEqual(4);
        });
    });
});
//# sourceMappingURL=index.test.js.map