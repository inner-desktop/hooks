import { __read } from "tslib";
import { useState, useEffect } from 'react';
var getVisibility = function () {
    // 如果是服务端渲染，直接返回true
    if (typeof document === 'undefined')
        return true;
    return document.visibilityState;
};
function useDocumentVisibility() {
    var _a = __read(useState(getVisibility()), 2), documentVisibility = _a[0], setDocumentVisibility = _a[1];
    useEffect(function () {
        var handleVisibilityChange = function () {
            setDocumentVisibility(getVisibility());
        };
        window.addEventListener('visibilitychange', handleVisibilityChange);
        return function () {
            window.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);
    return documentVisibility;
}
export default useDocumentVisibility;
//# sourceMappingURL=index.js.map