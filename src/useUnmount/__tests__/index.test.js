import { __awaiter, __generator } from "tslib";
import { renderHook } from '@testing-library/react-hooks';
import useUnmount from '../index';
describe('useUnmount', function () {
    it('should be defined', function () {
        expect(useUnmount).toBeDefined();
    });
    it('test unmount', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fn, hook;
        return __generator(this, function (_a) {
            fn = jest.fn();
            hook = renderHook(function () {
                return useUnmount(fn);
            });
            expect(fn).toBeCalledTimes(0);
            hook.rerender();
            expect(fn).toBeCalledTimes(0);
            hook.unmount();
            expect(fn).toBeCalledTimes(1);
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=index.test.js.map