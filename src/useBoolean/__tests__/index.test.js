import { __awaiter, __generator } from "tslib";
import { renderHook, act } from '@testing-library/react-hooks';
import useBoolean from '../index';
var callToggle = function (hook) {
    act(function () {
        hook.result.current.toggle();
    });
};
describe('useBoolean', function () {
    it('should be defined', function () {
        expect(useBoolean).toBeDefined();
    });
    it('test on methods', function () { return __awaiter(void 0, void 0, void 0, function () {
        var hook;
        return __generator(this, function (_a) {
            hook = renderHook(function () { return useBoolean(); });
            expect(hook.result.current.state).toBeFalsy();
            act(function () {
                hook.result.current.toggle(true);
            });
            expect(hook.result.current.state).toBeTruthy();
            act(function () {
                hook.result.current.setFalse();
            });
            expect(hook.result.current.state).toBeFalsy();
            act(function () {
                hook.result.current.setTrue();
            });
            expect(hook.result.current.state).toBeTruthy();
            return [2 /*return*/];
        });
    }); });
    it('test on optional', function () {
        var hook = renderHook(function () { return useBoolean(true); });
        expect(hook.result.current.state).toBeTruthy();
    });
});
//# sourceMappingURL=index.test.js.map