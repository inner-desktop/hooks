import { __read } from "tslib";
import { useMemo, useState } from 'react';
import useCreation from '../useCreation';
function useCounter(initialValue, options) {
    if (initialValue === void 0) { initialValue = 0; }
    if (options === void 0) { options = {}; }
    var min = options.min, max = options.max;
    // get init value
    var init = useCreation(function () {
        if (typeof max === 'number') {
            return Math.min(max, initialValue);
        }
        if (typeof min === 'number') {
            return Math.max(min, initialValue);
        }
        return initialValue;
    }, []);
    var _a = __read(useState(init), 2), current = _a[0], setCurrent = _a[1];
    var actions = useMemo(function () {
        var setValue = function (value) {
            setCurrent(function (c) {
                // get target value
                var target = typeof value === 'number' ? value : value(c);
                if (typeof max === 'number') {
                    target = Math.min(max, target);
                }
                if (typeof min === 'number') {
                    target = Math.max(min, target);
                }
                return target;
            });
        };
        var inc = function (delta) {
            if (delta === void 0) { delta = 1; }
            setValue(function (c) { return c + delta; });
        };
        var dec = function (delta) {
            if (delta === void 0) { delta = 1; }
            setValue(function (c) { return c - delta; });
        };
        var set = function (value) {
            setValue(value);
        };
        var reset = function () {
            setValue(init);
        };
        return { inc: inc, dec: dec, set: set, reset: reset };
    }, []);
    return [current, actions];
}
export default useCounter;
//# sourceMappingURL=index.js.map