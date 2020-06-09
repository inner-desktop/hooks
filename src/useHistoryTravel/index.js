import { __read, __spread } from "tslib";
import { useState, useCallback } from 'react';
var dumpIndex = function (step, arr) {
    var index = step > 0
        ? step - 1 // move forward
        : arr.length + step; // move backward
    if (index >= arr.length - 1) {
        index = arr.length - 1;
    }
    if (index < 0) {
        index = 0;
    }
    return index;
};
var split = function (step, targetArr) {
    var index = dumpIndex(step, targetArr);
    return {
        _current: targetArr[index],
        _before: targetArr.slice(0, index),
        _after: targetArr.slice(index + 1)
    };
};
export default function useHistoryTravel(initialValue) {
    var _a = __read(useState({
        present: initialValue,
        past: [],
        future: []
    }), 2), history = _a[0], setHistory = _a[1];
    var present = history.present, past = history.past, future = history.future;
    var updateValue = useCallback(function (val) {
        setHistory({
            present: val,
            future: [],
            past: __spread(past, [present])
        });
    }, [history, setHistory]);
    var _forward = useCallback(function (step) {
        if (step === void 0) { step = 1; }
        if (future.length === 0) {
            return;
        }
        var _a = split(step, future), _before = _a._before, _current = _a._current, _after = _a._after;
        setHistory({
            past: __spread(past, [present], _before),
            present: _current,
            future: _after
        });
    }, [history, setHistory]);
    var _backward = useCallback(function (step) {
        if (step === void 0) { step = -1; }
        if (past.length === 0) {
            return;
        }
        var _a = split(step, past), _before = _a._before, _current = _a._current, _after = _a._after;
        setHistory({
            past: _before,
            present: _current,
            future: __spread(_after, [present], future)
        });
    }, [history, setHistory]);
    var go = useCallback(function (step) {
        if (step === 0) {
            return;
        }
        if (step > 0) {
            return _forward(step);
        }
        _backward(step);
    }, [_backward, _forward]);
    return {
        value: present,
        setValue: updateValue,
        backLength: past.length,
        forwardLength: future.length,
        go: go,
        back: useCallback(function () {
            go(-1);
        }, [go]),
        forward: useCallback(function () {
            go(1);
        }, [go])
    };
}
//# sourceMappingURL=index.js.map