import { renderHook } from '@testing-library/react-hooks';
import usePrevious from '..';
describe('usePrevious', function () {
    it('should be defined', function () {
        expect(usePrevious).toBeDefined();
    });
    function getHook(initialValue, compareFunction) {
        return renderHook(function (_a) {
            var val = _a.val, cmp = _a.cmp;
            return usePrevious(val, cmp);
        }, {
            initialProps: {
                val: initialValue || 0,
                cmp: compareFunction,
            },
        });
    }
    it('should return undefined on init', function () {
        expect(getHook().result.current).toBeUndefined();
    });
    it('should update previous value only after render with different value', function () {
        var hook = getHook(0, function () { return true; });
        expect(hook.result.current).toBeUndefined();
        hook.rerender({ val: 1 });
        expect(hook.result.current).toBe(0);
        hook.rerender({ val: 2 });
        expect(hook.result.current).toBe(1);
        hook.rerender({ val: 3 });
        expect(hook.result.current).toBe(2);
        hook.rerender({ val: 4 });
        expect(hook.result.current).toBe(3);
        hook.rerender({ val: 5 });
        expect(hook.result.current).toBe(4);
    });
    it('should work fine with `undefined` values', function () {
        var hook = renderHook(function (_a) {
            var value = _a.value;
            return usePrevious(value);
        }, {
            initialProps: { value: undefined },
        });
        expect(hook.result.current).toBeUndefined();
        hook.rerender({ value: 1 });
        expect(hook.result.current).toBeUndefined();
        hook.rerender({ value: undefined });
        expect(hook.result.current).toBe(1);
        hook.rerender({ value: 2 });
        expect(hook.result.current).toBeUndefined();
    });
    it('should receive a predicate as a second parameter that will compare prev and current', function () {
        var obj1 = { label: 'John', value: 'john' };
        var obj2 = { label: 'Jonny', value: 'john' };
        var obj3 = { label: 'Kate', value: 'kate' };
        var predicate = function (a, b) { return (a ? a.value !== b.value : true); };
        var hook = getHook(obj1, predicate);
        expect(hook.result.current).toBeUndefined();
        hook.rerender({ val: obj2, cmp: predicate });
        expect(hook.result.current).toBeUndefined();
        hook.rerender({ val: obj3, cmp: predicate });
        expect(hook.result.current).toBe(obj1);
    });
});
//# sourceMappingURL=index.test.js.map