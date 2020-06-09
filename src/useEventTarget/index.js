import { __read } from "tslib";
import { useState, useCallback, useRef } from 'react';
export default (function (initialValue, transformer) {
    var _a = __read(useState(initialValue), 2), value = _a[0], setValue = _a[1];
    var reset = useCallback(function () { return setValue(initialValue); }, [setValue]);
    var transformerRef = useRef(transformer);
    transformerRef.current = transformer;
    var onChange = useCallback(function (e) {
        var _value = e.target.value;
        if (typeof transformerRef.current === 'function') {
            return setValue(transformerRef.current(_value));
        }
        // no transformer => U and T should be the same
        return setValue(_value);
    }, [setValue]);
    return [{
            value: value,
            onChange: onChange,
        }, reset];
});
//# sourceMappingURL=index.js.map