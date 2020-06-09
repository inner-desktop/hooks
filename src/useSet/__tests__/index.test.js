import { __read } from "tslib";
import { renderHook, act } from '@testing-library/react-hooks';
import useSet from '../index';
var setUp = function (initialSet) { return renderHook(function () { return useSet(initialSet); }); };
it('should init set and utils', function () {
    var result = setUp([1, 2]).result;
    var _a = __read(result.current, 2), set = _a[0], utils = _a[1];
    expect(set).toEqual(new Set([1, 2]));
    expect(utils).toStrictEqual({
        has: expect.any(Function),
        add: expect.any(Function),
        remove: expect.any(Function),
        reset: expect.any(Function),
    });
});
it('should init empty set if no initial set provided', function () {
    var result = setUp().result;
    expect(result.current[0]).toEqual(new Set());
});
it('should have an initially provided key', function () {
    var result = setUp(['a']).result;
    var _a = __read(result.current, 2), utils = _a[1];
    var value;
    act(function () {
        value = utils.has('a');
    });
    expect(value).toBe(true);
});
it('should have an added key', function () {
    var result = setUp().result;
    act(function () {
        result.current[1].add('newKey');
    });
    var value;
    act(function () {
        value = result.current[1].has('newKey');
    });
    expect(value).toBe(true);
});
it('should get false for non-existing key', function () {
    var result = setUp(['a']).result;
    var _a = __read(result.current, 2), utils = _a[1];
    var value;
    act(function () {
        value = utils.has('nonExisting');
    });
    expect(value).toBe(false);
});
it('should add a new key', function () {
    var result = setUp(['oldKey']).result;
    var _a = __read(result.current, 2), utils = _a[1];
    act(function () {
        utils.add('newKey');
    });
    expect(result.current[0]).toEqual(new Set(['oldKey', 'newKey']));
});
it('should work if setting existing key', function () {
    var result = setUp(['oldKey']).result;
    var _a = __read(result.current, 2), utils = _a[1];
    act(function () {
        utils.add('oldKey');
    });
    expect(result.current[0]).toEqual(new Set(['oldKey']));
});
it('should remove existing key', function () {
    var result = setUp([1, 2]).result;
    var _a = __read(result.current, 2), utils = _a[1];
    act(function () {
        utils.remove(2);
    });
    expect(result.current[0]).toEqual(new Set([1]));
});
it('should do nothing if removing non-existing key', function () {
    var result = setUp(['a', 'b']).result;
    var _a = __read(result.current, 2), utils = _a[1];
    act(function () {
        utils.remove('nonExisting');
    });
    expect(result.current[0]).toEqual(new Set(['a', 'b']));
});
it('should reset to initial set provided', function () {
    var result = setUp([1]).result;
    var _a = __read(result.current, 2), utils = _a[1];
    act(function () {
        utils.add(2);
    });
    expect(result.current[0]).toEqual(new Set([1, 2]));
    act(function () {
        utils.reset();
    });
    expect(result.current[0]).toEqual(new Set([1]));
});
it('should memoized its utils methods', function () {
    var result = setUp(['a', 'b']).result;
    var _a = __read(result.current, 2), utils = _a[1];
    var add = utils.add, remove = utils.remove, reset = utils.reset;
    act(function () {
        add('foo');
    });
    expect(result.current[1].add).toBe(add);
    expect(result.current[1].remove).toBe(remove);
    expect(result.current[1].reset).toBe(reset);
});
//# sourceMappingURL=index.test.js.map