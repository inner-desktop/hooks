import { __awaiter, __generator } from "tslib";
import { renderHook, act } from '@testing-library/react-hooks';
import useHistoryTravel from '../index';
describe('useHistoryTravel', function () {
    it('should be defined', function () {
        expect(useHistoryTravel).toBeDefined();
    });
    it('should work without initial value', function () { return __awaiter(void 0, void 0, void 0, function () {
        var hook;
        return __generator(this, function (_a) {
            hook = renderHook(function () { return useHistoryTravel(); });
            expect(hook.result.current.value).toEqual(undefined);
            act(function () {
                hook.result.current.setValue('test');
            });
            expect(hook.result.current.value).toEqual('test');
            return [2 /*return*/];
        });
    }); });
    it('should work with null and undefined without initial value', function () { return __awaiter(void 0, void 0, void 0, function () {
        var nullHook, undefHook;
        return __generator(this, function (_a) {
            nullHook = renderHook(function () { return useHistoryTravel(); });
            expect(nullHook.result.current.value).toEqual(undefined);
            act(function () {
                nullHook.result.current.setValue(null);
            });
            expect(nullHook.result.current.value).toEqual(null);
            undefHook = renderHook(function () { return useHistoryTravel(); });
            expect(undefHook.result.current.value).toEqual(undefined);
            act(function () {
                undefHook.result.current.setValue('def');
            });
            act(function () {
                undefHook.result.current.setValue(undefined);
            });
            expect(undefHook.result.current.value).toEqual(undefined);
            expect(undefHook.result.current.backLength).toEqual(2);
            return [2 /*return*/];
        });
    }); });
    it('should work with initial value', function () { return __awaiter(void 0, void 0, void 0, function () {
        var hook;
        return __generator(this, function (_a) {
            hook = renderHook(function () { return useHistoryTravel('abc'); });
            expect(hook.result.current.value).toEqual('abc');
            act(function () {
                hook.result.current.setValue('def');
            });
            expect(hook.result.current.value).toEqual('def');
            return [2 /*return*/];
        });
    }); });
    it('should work with null and undefined with initial value', function () { return __awaiter(void 0, void 0, void 0, function () {
        var nullHook, undefHook;
        return __generator(this, function (_a) {
            nullHook = renderHook(function () { return useHistoryTravel('abc'); });
            act(function () {
                nullHook.result.current.setValue(null);
            });
            expect(nullHook.result.current.value).toEqual(null);
            undefHook = renderHook(function () { return useHistoryTravel('abc'); });
            act(function () {
                undefHook.result.current.setValue(undefined);
            });
            expect(undefHook.result.current.value).toEqual(undefined);
            expect(undefHook.result.current.backLength).toEqual(1);
            return [2 /*return*/];
        });
    }); });
    it('back and forward should work', function () {
        var hook = renderHook(function () { return useHistoryTravel(); });
        act(function () {
            hook.result.current.setValue('ddd');
        });
        act(function () {
            hook.result.current.setValue('abc');
        });
        expect(hook.result.current.value).toEqual('abc');
        act(function () {
            hook.result.current.setValue('def');
        });
        expect(hook.result.current.value).toEqual('def');
        act(function () {
            hook.result.current.back();
        });
        expect(hook.result.current.value).toEqual('abc');
        act(function () {
            hook.result.current.forward();
        });
        expect(hook.result.current.value).toEqual('def');
    });
    it('go should work for negative step', function () {
        var hook = renderHook(function () { return useHistoryTravel('init'); });
        act(function () {
            hook.result.current.setValue('abc');
        });
        act(function () {
            hook.result.current.setValue('def');
        });
        act(function () {
            hook.result.current.setValue('hij');
        });
        act(function () {
            hook.result.current.go(-2);
        });
        expect(hook.result.current.value).toEqual('abc');
        act(function () {
            hook.result.current.go(-100);
        });
        expect(hook.result.current.value).toEqual('init');
    });
    it('go should work for positive step', function () {
        var hook = renderHook(function () { return useHistoryTravel('init'); });
        act(function () {
            hook.result.current.setValue('abc');
        });
        act(function () {
            hook.result.current.setValue('def');
        });
        act(function () {
            hook.result.current.setValue('hij');
        });
        act(function () {
            hook.result.current.go(-3);
        });
        expect(hook.result.current.value).toEqual('init');
        act(function () {
            hook.result.current.go(2);
        });
        expect(hook.result.current.value).toEqual('def');
        act(function () {
            hook.result.current.go(100);
        });
        expect(hook.result.current.value).toEqual('hij');
    });
});
//# sourceMappingURL=index.test.js.map