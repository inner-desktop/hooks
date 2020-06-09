/**
 * title: Default usage
 * desc: DebouncedValue will change after the input ends 500ms.
 *
 * title.zh-CN: 基础使用
 * desc.zh-CN: DebouncedValue 只会在输入结束 500ms 后变化。
 */
import { __read } from "tslib";
import { Input } from 'antd';
import React, { useState } from 'react';
import { useDebounce } from '@umijs/hooks';
export default (function () {
    var _a = __read(useState(), 2), value = _a[0], setValue = _a[1];
    var debouncedValue = useDebounce(value, 500);
    return (React.createElement("div", null,
        React.createElement(Input, { value: value, onChange: function (e) { return setValue(e.target.value); }, placeholder: "Typed value", style: { width: 280 } }),
        React.createElement("p", { style: { marginTop: 16 } },
            "DebouncedValue: ",
            debouncedValue)));
});
//# sourceMappingURL=demo1.js.map