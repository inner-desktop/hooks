import { __assign, __read, __spread } from "tslib";
import { useState, useMemo, useCallback } from 'react';
function useSet(initialValue) {
    var initialSet = useMemo(function () { return (initialValue === undefined ? new Set() : new Set(initialValue)); }, [initialValue]);
    var _a = __read(useState(initialSet), 2), set = _a[0], setSet = _a[1];
    var stableActions = useMemo(function () { return ({
        add: function (key) { return setSet(function (prevSet) { return new Set(__spread(Array.from(prevSet), [key])); }); },
        remove: function (key) { return setSet(function (prevSet) { return new Set(Array.from(prevSet).filter(function (i) { return i !== key; })); }); },
        reset: function () { return setSet(initialSet); },
    }); }, [setSet]);
    var utils = __assign({ has: useCallback(function (key) { return set.has(key); }, [set]) }, stableActions);
    return [set, utils];
}
;
export default useSet;
//# sourceMappingURL=index.js.map