/**
 * title: Basic usage
 * desc: This hook is exactly the same as useLayoutEffect, except it omits the first render and only runs when dependencies update.
 *
 * title.zh-CN: 基础使用
 * desc.zh-CN: 使用上与 useLayoutEffect 完全相同，只是它忽略了首次渲染，且只在依赖项更新时运行。
 */
import { __read } from "tslib";
import { Button } from 'antd';
import React, { useLayoutEffect, useState } from 'react';
import { useUpdateLayoutEffect } from '@umijs/hooks';
export default (function () {
    var _a = __read(useState(0), 2), count = _a[0], setCount = _a[1];
    var _b = __read(useState(0), 2), layoutEffectCount = _b[0], setLayoutEffectCount = _b[1];
    var _c = __read(useState(0), 2), updateLayoutEffectCount = _c[0], setUpdateLayoutEffectCount = _c[1];
    useLayoutEffect(function () {
        setLayoutEffectCount(function (c) { return c + 1; });
    }, [count]);
    useUpdateLayoutEffect(function () {
        setUpdateLayoutEffectCount(function (c) { return c + 1; });
        return function () {
            // do something
        };
    }, [count]); // you can include deps array if necessary
    return (React.createElement("div", null,
        React.createElement("p", null,
            "layoutEffectCount: ",
            layoutEffectCount),
        React.createElement("p", null,
            "updateLayoutEffectCount: ",
            updateLayoutEffectCount),
        React.createElement("p", null,
            React.createElement(Button, { type: "primary", onClick: function () { return setCount(function (c) { return c + 1; }); } }, "reRender"))));
});
//# sourceMappingURL=demo1.js.map