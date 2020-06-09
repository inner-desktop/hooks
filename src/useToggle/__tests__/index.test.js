import { __awaiter, __generator } from "tslib";
import { renderHook, act } from '@testing-library/react-hooks';
import useToggle from '../index';
var callToggle = function (hook) {
    act(function () {
        hook.result.current.toggle();
    });
};
describe('useToggle', function () {
    it('should be defined', function () {
        expect(useToggle).toBeDefined();
    });
    it('test on init', function () { return __awaiter(void 0, void 0, void 0, function () {
        var hook;
        return __generator(this, function (_a) {
            hook = renderHook(function () { return useToggle(); });
            expect(hook.result.current.state).toBeFalsy();
            return [2 /*return*/];
        });
    }); });
    it('test on methods', function () { return __awaiter(void 0, void 0, void 0, function () {
        var hook;
        return __generator(this, function (_a) {
            hook = renderHook(function () { return useToggle('Hello'); });
            expect(hook.result.current.state).toEqual('Hello');
            act(function () {
                hook.result.current.toggle();
            });
            expect(hook.result.current.state).toBeFalsy();
            act(function () {
                hook.result.current.setLeft();
            });
            expect(hook.result.current.state).toEqual('Hello');
            act(function () {
                hook.result.current.setRight();
            });
            expect(hook.result.current.state).toBeFalsy();
            return [2 /*return*/];
        });
    }); });
    it('test on optional', function () {
        var hook = renderHook(function () { return useToggle('Hello', 'World'); });
        callToggle(hook);
        expect(hook.result.current.state).toEqual('World');
        act(function () {
            hook.result.current.toggle('World');
        });
        expect(hook.result.current.state).toEqual('World');
        callToggle(hook);
        expect(hook.result.current.state).toEqual('Hello');
    });
});
//# sourceMappingURL=index.test.js.map