/**
 * title: Default usage
 * desc: With usePersistFn, function references never change.
 *
 * title.zh-CN: 基本用法
 * desc.zh-CN: 通过 usePersistFn, 函数引用永远不会变化。
 */
import { __read } from "tslib";
import React, { useState, useCallback, useRef } from 'react';
import { Button, message } from 'antd';
import { usePersistFn } from '@umijs/hooks';
export default (function () {
    var _a = __read(useState(0), 2), count = _a[0], setCount = _a[1];
    var showCountPersistFn = usePersistFn(function () {
        message.info("Current count is " + count);
    });
    var showCountCommon = useCallback(function () {
        message.info("Current count is " + count);
    }, [count]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { onClick: function () { setCount(function (c) { return c + 1; }); } }, "Add Count"),
        React.createElement("p", null, "You can click the button to see the number of sub-component renderings"),
        React.createElement("div", { style: { marginTop: 32 } },
            React.createElement("h4", null, "Component with persist function:"),
            React.createElement(ExpensiveTree, { showCount: showCountPersistFn })),
        React.createElement("div", { style: { marginTop: 32 } },
            React.createElement("h4", null, "Component without persist function:"),
            React.createElement(ExpensiveTree, { showCount: showCountCommon }))));
});
// some expensive component with React.memo
var ExpensiveTree = React.memo(function (_a) {
    var showCount = _a.showCount;
    var renderCountRef = useRef(0);
    renderCountRef.current += 1;
    return (React.createElement("div", null,
        React.createElement("p", null,
            "Render Count: ",
            renderCountRef.current),
        React.createElement(Button, { onClick: showCount }, "showParentCount")));
});
//# sourceMappingURL=demo1.js.map