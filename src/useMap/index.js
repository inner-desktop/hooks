import { __assign, __read, __spread } from "tslib";
import { useState, useMemo, useCallback } from 'react';
function useMap(initialValue) {
    var initialMap = useMemo(function () { return (initialValue === undefined ? new Map() : new Map(initialValue)); }, [initialValue]);
    var _a = __read(useState(initialMap), 2), map = _a[0], set = _a[1];
    var stableActions = useMemo(function () { return ({
        set: function (key, entry) {
            map.set(key, entry);
            set(new Map(__spread(map)));
        },
        setAll: function (newMap) {
            set(new Map(newMap));
        },
        remove: function (key) {
            map.delete(key);
            set(new Map(__spread(map)));
        },
        reset: function () { return set(initialMap); },
    }); }, [map, set]);
    var utils = __assign({ get: useCallback(function (key) { return map.get(key); }, [map]) }, stableActions);
    return [map, utils];
}
;
export default useMap;
//# sourceMappingURL=index.js.map