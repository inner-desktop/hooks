/**
 * title: Using deps properly
 * desc: Use deps can achieve the same effect as run. If the deps changes, the function will be executed once all changes have been completed for 1000ms.
 *
 * title.zh-CN: 合理利用 deps
 * desc.zh-CN: 使用 deps 可以实现和 run 一样的效果。如果 deps 变化，会在所有变化完成 1000ms 后执行一次相关函数。
 */
import { __read } from "tslib";
import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { useDebounceFn } from '@umijs/hooks';
export default (function () {
    var _a = __read(useState(), 2), value = _a[0], setValue = _a[1];
    var _b = __read(useState(), 2), debouncedValue = _b[0], setDebouncedValue = _b[1];
    var cancel = useDebounceFn(function () {
        setDebouncedValue(value);
    }, [value], 1000).cancel;
    return (React.createElement("div", null,
        React.createElement(Input, { value: value, onChange: function (e) { return setValue(e.target.value); }, placeholder: "Typed value", style: { width: 280 } }),
        React.createElement("p", { style: { margin: '16px 0' } },
            React.createElement(Button, { onClick: cancel }, "Cancel Debounce")),
        React.createElement("p", null,
            "DebouncedValue: ",
            debouncedValue)));
});
//# sourceMappingURL=demo2.js.map