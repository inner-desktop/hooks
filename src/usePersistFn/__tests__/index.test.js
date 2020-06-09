import { __read } from "tslib";
import { act, renderHook } from '@testing-library/react-hooks';
import { useState } from 'react';
import usePersistFn from '..';
// 函数变化，但是地址不变
var testHooks = function () {
    var _a = __read(useState(0), 2), count = _a[0], setCount = _a[1];
    var addCount = function () {
        setCount(function (c) { return c + 1; });
    };
    var persistFn = usePersistFn(function () { return count; });
    return { addCount: addCount, persistFn: persistFn };
};
var hook;
describe('usePersistFn', function () {
    it('should be defined', function () {
        expect(usePersistFn).toBeDefined();
    });
    it('usePersistFn should work', function () {
        act(function () {
            hook = renderHook(function () { return testHooks(); });
        });
        var currentFn = hook.result.current.persistFn;
        expect(hook.result.current.persistFn()).toEqual(0);
        act(function () {
            hook.result.current.addCount();
        });
        expect(currentFn).toEqual(hook.result.current.persistFn);
        expect(hook.result.current.persistFn()).toEqual(1);
    });
});
//# sourceMappingURL=index.test.js.map