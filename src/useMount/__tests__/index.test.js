import { __awaiter, __generator } from "tslib";
import { renderHook } from '@testing-library/react-hooks';
import useMount from '../index';
describe('useMount', function () {
    it('should be defined', function () {
        expect(useMount).toBeDefined();
    });
    it('test mount', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fn, hook;
        return __generator(this, function (_a) {
            fn = jest.fn();
            hook = renderHook(function () {
                return useMount(fn);
            });
            expect(fn).toBeCalledTimes(1);
            hook.rerender();
            expect(fn).toBeCalledTimes(1);
            hook.unmount();
            expect(fn).toBeCalledTimes(1);
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=index.test.js.map