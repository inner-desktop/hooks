import { __assign, __read } from "tslib";
import { useState, useEffect, useRef } from 'react';
var initRect = {
    top: NaN,
    left: NaN,
    bottom: NaN,
    right: NaN,
    height: NaN,
    width: NaN,
};
var initState = __assign({ text: '' }, initRect);
function getRectFromSelection(selection) {
    if (!selection) {
        return initRect;
    }
    if (selection.rangeCount < 1) {
        return initRect;
    }
    var range = selection.getRangeAt(0);
    var _a = range.getBoundingClientRect(), height = _a.height, width = _a.width, top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
    return {
        height: height,
        width: width,
        top: top,
        left: left,
        right: right,
        bottom: bottom,
    };
}
function useTextSelection() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var hasPassedInArg = args.length === 1;
    var arg = useRef(args[0]);
    var ref = useRef();
    var _a = __read(useState(initState), 2), state = _a[0], setState = _a[1];
    var stateRef = useRef(state);
    stateRef.current = state;
    useEffect(function () {
        // 获取 target 需要放在 useEffect 里，否则存在组件未加载好的情况而导致元素获取不到
        var passedInArg = typeof arg.current === 'function' ? arg.current() : arg.current;
        var target = hasPassedInArg ? passedInArg : ref.current;
        if (!target) {
            return function () { };
        }
        var mouseupHandler = function () {
            var selObj = null;
            var text = '';
            var rect = initRect;
            if (!window.getSelection)
                return;
            selObj = window.getSelection();
            text = selObj ? selObj.toString() : '';
            if (text) {
                rect = getRectFromSelection(selObj);
                setState(__assign(__assign(__assign({}, state), { text: text }), rect));
            }
        };
        // 任意点击都需要清空之前的 range
        var mousedownHandler = function () {
            if (!window.getSelection)
                return;
            if (stateRef.current.text) {
                setState(__assign({}, initState));
            }
            var selObj = window.getSelection();
            if (!selObj)
                return;
            selObj.removeAllRanges();
        };
        target.addEventListener('mouseup', mouseupHandler);
        document.addEventListener('mousedown', mousedownHandler);
        return function () {
            target.removeEventListener('mouseup', mouseupHandler);
            document.removeEventListener('mousedown', mousedownHandler);
        };
    }, [ref.current, typeof arg.current === 'function' ? undefined : arg.current]);
    if (hasPassedInArg) {
        return [state];
    }
    return [state, ref];
}
export default useTextSelection;
//# sourceMappingURL=index.js.map