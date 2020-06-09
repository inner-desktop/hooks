import { __awaiter, __generator } from "tslib";
import { renderHook, act } from '@testing-library/react-hooks';
import useEventTarget from '../index';
describe('useEventTarget', function () {
    it('should be defined', function () {
        expect(useEventTarget).toBeDefined();
    });
    it('should work without initial value', function () { return __awaiter(void 0, void 0, void 0, function () {
        var hook;
        return __generator(this, function (_a) {
            hook = renderHook(function () { return useEventTarget(); });
            expect(hook.result.current[0].value).toEqual(undefined);
            act(function () {
                hook.result.current[0].onChange({ target: { value: 'abc' } });
            });
            expect(hook.result.current[0].value).toEqual('abc');
            return [2 /*return*/];
        });
    }); });
    it('should work with initial value', function () { return __awaiter(void 0, void 0, void 0, function () {
        var hook;
        return __generator(this, function (_a) {
            hook = renderHook(function () { return useEventTarget('abc'); });
            expect(hook.result.current[0].value).toEqual('abc');
            act(function () {
                hook.result.current[0].onChange({ target: { value: 'def' } });
            });
            expect(hook.result.current[0].value).toEqual('def');
            act(function () {
                hook.result.current[1]();
            });
            expect(hook.result.current[0].value).toEqual('abc');
            return [2 /*return*/];
        });
    }); });
    it('should work with transformer', function () {
        var hook = renderHook(function () { return useEventTarget('', function (str) { return str.toUpperCase(); }); });
        expect(hook.result.current[0].value).toEqual('');
        act(function () {
            hook.result.current[0].onChange({ target: { value: 'def' } });
        });
        expect(hook.result.current[0].value).toEqual('DEF');
    });
    it('should be able to transform to any type', function () {
        var hook = renderHook(function () { return useEventTarget('', function (num) { return String(num); }); });
        expect(hook.result.current[0].value).toEqual('');
        act(function () {
            hook.result.current[0].onChange({ target: { value: 123 } });
        });
        expect(hook.result.current[0].value).toEqual('123');
    });
});
//# sourceMappingURL=index.test.js.map