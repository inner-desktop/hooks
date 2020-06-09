import { __read, __spread } from "tslib";
import { useCallback, useRef, useEffect } from 'react';
function usePersistFn(fn, dependencies) {
    if (dependencies === void 0) { dependencies = []; }
    var ref = useRef(function () {
        throw new Error('Cannot call an event handler while rendering.');
    });
    useEffect(function () {
        ref.current = fn;
    }, __spread([fn], dependencies));
    var persist = useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var refFn = ref.current;
        if (refFn) {
            return refFn.apply(void 0, __spread(args));
        }
    }, [ref]);
    if (typeof fn === 'function') {
        return persist;
    }
    return undefined;
}
export default usePersistFn;
//# sourceMappingURL=usePersistFn.js.map