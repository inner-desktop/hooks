import { __read } from "tslib";
import { useState } from 'react';
import useDebounceFn from '../useDebounceFn';
function useDebounce(value, wait) {
    var _a = __read(useState(value), 2), state = _a[0], setState = _a[1];
    useDebounceFn(function () {
        setState(value);
    }, [value], wait);
    return state;
}
export default useDebounce;
//# sourceMappingURL=index.js.map