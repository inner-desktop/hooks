import { __read, __spread } from "tslib";
import { useCallback, useEffect, useRef } from 'react';
import useUpdateEffect from '../useUpdateEffect';
function useThrottleFn(fn, deps, wait) {
    var _deps = (Array.isArray(deps) ? deps : []);
    var _wait = typeof deps === 'number' ? deps : wait || 0;
    var timer = useRef();
    var fnRef = useRef(fn);
    fnRef.current = fn;
    var currentArgs = useRef([]);
    var cancel = useCallback(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = undefined;
    }, []);
    var run = useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        currentArgs.current = args;
        if (!timer.current) {
            timer.current = setTimeout(function () {
                fnRef.current.apply(fnRef, __spread(currentArgs.current));
                timer.current = undefined;
            }, _wait);
        }
    }, [_wait, cancel]);
    useUpdateEffect(function () {
        run();
    }, __spread(_deps, [run]));
    useEffect(function () { return cancel; }, []);
    return {
        run: run,
        cancel: cancel,
    };
}
export default useThrottleFn;
//# sourceMappingURL=index.js.map