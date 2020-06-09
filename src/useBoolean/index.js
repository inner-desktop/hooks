import { useCallback } from 'react';
import useToggle from '../useToggle';
var useBoolean = function (defaultValue) {
    if (defaultValue === void 0) { defaultValue = false; }
    var _a = useToggle(defaultValue), state = _a.state, toggle = _a.toggle;
    var setTrue = useCallback(function () { return toggle(true); }, [toggle]);
    var setFalse = useCallback(function () { return toggle(false); }, [toggle]);
    return {
        state: state,
        toggle: toggle,
        setTrue: setTrue,
        setFalse: setFalse,
    };
};
export default useBoolean;
//# sourceMappingURL=index.js.map