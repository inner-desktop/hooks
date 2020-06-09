import { __read } from "tslib";
import { useCallback, useState, useMemo } from 'react';
function useToggle(defaultValue, reverseValue) {
    if (defaultValue === void 0) { defaultValue = false; }
    var _a = __read(useState(defaultValue), 2), state = _a[0], setState = _a[1];
    var reverseValueOrigin = useMemo(function () { return (reverseValue === undefined ? !defaultValue : reverseValue); }, [reverseValue]);
    // 切换返回值
    var toggle = useCallback(function (value) {
        setState(function (oldState) {
            // 强制返回状态值，适用于点击操作
            if (value !== undefined) {
                return value;
            }
            return oldState === defaultValue ? reverseValueOrigin : defaultValue;
        });
    }, []);
    // 设置默认值
    var setLeft = useCallback(function () {
        setState(defaultValue);
    }, [setState]);
    // 设置取反值
    var setRight = useCallback(function () {
        setState(reverseValueOrigin);
    }, [setState]);
    return {
        state: state,
        toggle: toggle,
        setLeft: setLeft,
        setRight: setRight,
    };
}
export default useToggle;
//# sourceMappingURL=index.js.map