import { __awaiter, __generator } from "tslib";
import { renderHook } from '@testing-library/react-hooks';
import useUpdateEffect from '../index';
describe('useUpdateEffect', function () {
    it('should be defined', function () {
        expect(useUpdateEffect).toBeDefined();
    });
    it('test on mounted', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mountedState, hook;
        return __generator(this, function (_a) {
            mountedState = 1;
            hook = renderHook(function () {
                return useUpdateEffect(function () {
                    mountedState = 2;
                });
            });
            expect(mountedState).toEqual(1);
            hook.rerender();
            expect(mountedState).toEqual(2);
            return [2 /*return*/];
        });
    }); });
    it('test on optional', function () {
        var mountedState = 1;
        var hook = renderHook(function () {
            return useUpdateEffect(function () {
                mountedState = 3;
            }, [mountedState]);
        });
        expect(mountedState).toEqual(1);
        mountedState = 2;
        hook.rerender();
        expect(mountedState).toEqual(3);
    });
});
//# sourceMappingURL=index.test.js.map