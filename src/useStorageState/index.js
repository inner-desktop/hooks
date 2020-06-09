import { __read } from "tslib";
import { useState } from 'react';
import useUpdateEffect from '../useUpdateEffect';
function isFunction(obj) {
    return typeof obj === 'function';
}
function useStorageState(storage, key, defaultValue) {
    var _a = __read(useState(function () { return getStoredValue(); }), 2), state = _a[0], setState = _a[1];
    function getStoredValue() {
        var raw = storage.getItem(key);
        if (raw) {
            return JSON.parse(raw);
        }
        if (isFunction(defaultValue)) {
            return defaultValue();
        }
        return defaultValue;
    }
    function updateState(value) {
        if (typeof value === 'undefined') {
            storage.removeItem(key);
            setState(undefined);
        }
        else if (isFunction(value)) {
            var previousState = getStoredValue();
            var currentState = value(previousState);
            storage.setItem(key, JSON.stringify(currentState));
            setState(currentState);
        }
        else {
            storage.setItem(key, JSON.stringify(value));
            setState(value);
        }
    }
    useUpdateEffect(function () {
        setState(getStoredValue());
    }, [key]);
    return [state, updateState];
}
export default useStorageState;
//# sourceMappingURL=index.js.map