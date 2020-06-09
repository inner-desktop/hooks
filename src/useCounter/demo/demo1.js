/**
 * title: Default usage
 * desc: Simple count management example.
 *
 * title.zh-CN: 基础使用
 * desc.zh-CN: 简单的 count 管理示例。
 */
import { __read } from "tslib";
import { Button } from 'antd';
import React from 'react';
import { useCounter } from '@umijs/hooks';
export default (function () {
    var _a = __read(useCounter(100, { min: 1, max: 10 }), 2), current = _a[0], _b = _a[1], inc = _b.inc, dec = _b.dec, set = _b.set, reset = _b.reset;
    return (React.createElement("div", null,
        React.createElement("p", null,
            current,
            " [max: 10; min: 0;]"),
        React.createElement(Button.Group, null,
            React.createElement(Button, { onClick: function () { inc(); } }, "inc()"),
            React.createElement(Button, { onClick: function () { dec(); } }, "dec()"),
            React.createElement(Button, { onClick: function () { set(3); } }, "set(3)"),
            React.createElement(Button, { onClick: function () { reset(); } }, "reset()"))));
});
//# sourceMappingURL=demo1.js.map