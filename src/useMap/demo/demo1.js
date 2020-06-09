/**
 * title: Default usage
 * desc: Pass in a Map acceptable parameter.
 *
 * title.zh-CN: 默认用法
 * desc.zh-CN: 传入一个 Map 可接受的参数。
 */
import { __read } from "tslib";
import React from 'react';
import { Button } from 'antd';
import { useMap } from '@umijs/hooks';
export default (function () {
    var _a = __read(useMap([['msg', 'hello world'], [123, 'number type']]), 2), map = _a[0], _b = _a[1], set = _b.set, setAll = _b.setAll, remove = _b.remove, reset = _b.reset, get = _b.get;
    return (React.createElement("div", null,
        React.createElement(Button, { type: "primary", onClick: function () { return set(String(Date.now()), new Date().toJSON()); } }, "Add"),
        React.createElement(Button, { onClick: function () { return setAll([['text', 'this is a new Map']]); }, style: { margin: '0 16px' } }, "Set new Map"),
        React.createElement(Button, { onClick: function () { return remove('msg'); }, disabled: !get('msg') }, "Remove 'msg'"),
        React.createElement(Button, { type: "danger", onClick: function () { return reset(); }, style: { margin: '0 16px' } }, "Reset"),
        React.createElement("div", { style: { marginTop: 16 } },
            React.createElement("pre", null, JSON.stringify(Array.from(map), null, 2)))));
});
//# sourceMappingURL=demo1.js.map