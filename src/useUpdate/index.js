import { __read } from "tslib";
import { useCallback, useState } from 'react';
var useUpdate = function () {
    var _a = __read(useState(0), 2), setState = _a[1];
    return useCallback(function () { return setState(function (num) { return num + 1; }); }, []);
};
export default useUpdate;
//# sourceMappingURL=index.js.map