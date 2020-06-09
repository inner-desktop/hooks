import { __awaiter, __generator } from "tslib";
import { renderHook, act } from '@testing-library/react-hooks';
import useMouse from '../index';
// test about Resize Observer see https://github.com/que-etc/resize-observer-polyfill/tree/master/tests
describe('useSize', function () {
    function moveMouse(x, y) {
        act(function () {
            document.dispatchEvent(new MouseEvent('mousemove', {
                clientX: x,
                clientY: y,
                screenX: x,
                screenY: y,
            }));
        });
    }
    it('should be defined', function () {
        expect(useMouse).toBeDefined();
    });
    it('on mouseMove', function () { return __awaiter(void 0, void 0, void 0, function () {
        var hook;
        return __generator(this, function (_a) {
            hook = renderHook(function () { return useMouse(); });
            expect(hook.result.current.pageX).toEqual(NaN);
            expect(hook.result.current.pageY).toEqual(NaN);
            moveMouse(10, 10);
            // can't manually set pageX & pageY for mouseEvent, default undefined here.
            expect(hook.result.current.pageX).toEqual(undefined);
            expect(hook.result.current.pageY).toEqual(undefined);
            expect(hook.result.current.clientX).toEqual(10);
            expect(hook.result.current.clientY).toEqual(10);
            expect(hook.result.current.screenX).toEqual(10);
            expect(hook.result.current.screenY).toEqual(10);
            hook.unmount();
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=index.test.js.map