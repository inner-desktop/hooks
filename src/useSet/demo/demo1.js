/**
 * title: Default usage
 * desc: Pass in a Set acceptable parameter.
 *
 * title.zh-CN: 默认用法
 * desc.zh-CN: 传入一个 Set 可接受的参数。
 */
import { __read } from "tslib";
import React from 'react';
import { Button } from 'antd';
import { useSet } from '@umijs/hooks';
export default (function () {
    var _a = __read(useSet(['Hello']), 2), set = _a[0], _b = _a[1], add = _b.add, has = _b.has, remove = _b.remove, reset = _b.reset;
    return (React.createElement("div", null,
        React.createElement(Button, { type: "primary", onClick: function () { return add(String(Date.now())); } }, "Add Timestamp"),
        React.createElement(Button, { type: "default", onClick: function () { return remove('Hello'); }, disabled: !has('Hello'), style: { margin: '0 16px' } }, "Remove Hello"),
        React.createElement(Button, { type: "danger", onClick: function () { return reset(); } }, "Reset"),
        React.createElement("div", { style: { marginTop: 16 } },
            React.createElement("pre", null, JSON.stringify(Array.from(set), null, 2)))));
});
//# sourceMappingURL=demo1.js.map