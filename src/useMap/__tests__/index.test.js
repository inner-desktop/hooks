import { __read, __spread } from "tslib";
import { act, renderHook } from '@testing-library/react-hooks';
import useMap from '../index';
var setUp = function (initialMap) { return renderHook(function () { return useMap(initialMap); }); };
it('should init map and utils', function () {
    var result = setUp([["foo", "bar"], ["a", 1]]).result;
    var _a = __read(result.current, 2), map = _a[0], utils = _a[1];
    expect(Array.from(map)).toEqual([["foo", "bar"], ["a", 1]]);
    expect(utils).toStrictEqual({
        get: expect.any(Function),
        set: expect.any(Function),
        setAll: expect.any(Function),
        remove: expect.any(Function),
        reset: expect.any(Function),
    });
});
it('should init empty map if not initial object provided', function () {
    var result = setUp().result;
    expect(__spread(result.current[0])).toEqual([]);
});
it('should get corresponding value for initial provided key', function () {
    var result = setUp([["foo", "bar"], ["a", 1]]).result;
    var _a = __read(result.current, 2), utils = _a[1];
    var value;
    act(function () {
        value = utils.get('a');
    });
    expect(value).toBe(1);
});
it('should get corresponding value for existing provided key', function () {
    var result = setUp([["foo", "bar"], ["a", 1]]).result;
    act(function () {
        result.current[1].set('a', 99);
    });
    var value;
    act(function () {
        value = result.current[1].get('a');
    });
    expect(value).toBe(99);
});
it('should get undefined for non-existing provided key', function () {
    var result = setUp([["foo", "bar"], ["a", 1]]).result;
    var _a = __read(result.current, 2), utils = _a[1];
    var value;
    act(function () {
        value = utils.get('nonExisting');
    });
    expect(value).toBeUndefined();
});
it('should set new key-value pair', function () {
    var result = setUp([["foo", "bar"], ["a", 1]]).result;
    var _a = __read(result.current, 2), utils = _a[1];
    act(function () {
        utils.set('newKey', 99);
    });
    expect(__spread(result.current[0])).toEqual([['foo', 'bar'], ['a', 1], ['newKey', 99]]);
});
it('should override current value if setting existing key', function () {
    var result = setUp([["foo", "bar"], ["a", 1]]).result;
    var _a = __read(result.current, 2), utils = _a[1];
    act(function () {
        utils.set('foo', 'qux');
    });
    expect(__spread(result.current[0])).toEqual([['foo', 'qux'], ['a', 1]]);
});
it('should set new map', function () {
    var result = setUp([["foo", "bar"], ["a", 1]]).result;
    var _a = __read(result.current, 2), utils = _a[1];
    act(function () {
        utils.setAll([['foo', 'foo'], ['a', 2]]);
    });
    expect(__spread(result.current[0])).toEqual([['foo', 'foo'], ['a', 2]]);
});
//# sourceMappingURL=index.test.js.map