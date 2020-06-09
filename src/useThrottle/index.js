import { __read } from "tslib";
import { useState } from 'react';
import useThrottleFn from '../useThrottleFn';
function useThrottle(value, wait) {
    var _a = __read(useState(value), 2), state = _a[0], setState = _a[1];
    useThrottleFn(function () {
        setState(value);
    }, [value], wait);
    return state;
}
export default useThrottle;
//# sourceMappingURL=index.js.map