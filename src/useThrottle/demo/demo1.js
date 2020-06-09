/**
 * title: Default usage
 * desc: ThrottledValue will change every 500ms.
 *
 * title.zh-CN: 基础使用
 * desc.zh-CN: ThrottledValue 每隔 500ms 变化一次。
 */
import { __read } from "tslib";
import { Input } from 'antd';
import React, { useState } from 'react';
import { useThrottle } from '@umijs/hooks';
export default (function () {
    var _a = __read(useState(), 2), value = _a[0], setValue = _a[1];
    var throttledValue = useThrottle(value, 500);
    return (React.createElement("div", null,
        React.createElement(Input, { value: value, onChange: function (e) { return setValue(e.target.value); }, placeholder: "Typed value", style: { width: 280 } }),
        React.createElement("p", { style: { marginTop: 16 } },
            "throttledValue: ",
            throttledValue)));
});
//# sourceMappingURL=demo1.js.map