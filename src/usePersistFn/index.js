import { __read, __spread } from "tslib";
import { useCallback, useRef } from 'react';
function usePersistFn(fn) {
    var ref = useRef(function () {
        throw new Error('Cannot call function while rendering.');
    });
    ref.current = fn;
    var persistFn = useCallback((function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return ref.current.apply(ref, __spread(args));
    }), [ref]);
    return persistFn;
}
export default usePersistFn;
//# sourceMappingURL=index.js.map