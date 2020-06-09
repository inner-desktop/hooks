import { __read, __spread } from "tslib";
import { useCallback, useEffect, useRef } from 'react';
import useUpdateEffect from '../useUpdateEffect';
function useDebounceFn(fn, deps, wait) {
    var _deps = (Array.isArray(deps) ? deps : []);
    var _wait = typeof deps === 'number' ? deps : wait || 0;
    var timer = useRef();
    var fnRef = useRef(fn);
    fnRef.current = fn;
    var cancel = useCallback(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
    }, []);
    var run = useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        cancel();
        timer.current = setTimeout(function () {
            fnRef.current.apply(fnRef, __spread(args));
        }, _wait);
    }, [_wait, cancel]);
    useUpdateEffect(function () {
        run();
        return cancel;
    }, __spread(_deps, [run]));
    useEffect(function () { return cancel; }, []);
    return {
        run: run,
        cancel: cancel,
    };
}
export default useDebounceFn;
//# sourceMappingURL=index.js.map