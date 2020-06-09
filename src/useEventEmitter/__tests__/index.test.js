import { __read } from "tslib";
import { renderHook, act } from '@testing-library/react-hooks';
import { useState } from 'react';
import useEventEmitter from '../index';
describe('useEventEmitter', function () {
    it('should be defined', function () {
        expect(useEventEmitter).toBeDefined();
    });
    var setUp = function () {
        return renderHook(function () {
            var event$ = useEventEmitter();
            var _a = __read(useState(0), 2), count = _a[0], setCount = _a[1];
            event$.useSubscription(function (val) {
                setCount(function (c) { return c + val; });
            });
            event$.useSubscription(function (val) {
                setCount(function (c) { return c + val + 10; });
            });
            return {
                event$: event$,
                count: count,
            };
        });
    };
    it('emit and subscribe should work', function () {
        var hook = setUp();
        act(function () {
            hook.result.current.event$.emit(1);
        });
        expect(hook.result.current.count).toEqual(12);
        act(function () {
            hook.result.current.event$.emit(2);
        });
        expect(hook.result.current.count).toEqual(26);
    });
});
//# sourceMappingURL=index.test.js.map