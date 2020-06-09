/**
 * title: Default usage
 * desc: Please click button or outside of button to show effects.
 *
 * title.zh-CN: 基本用法
 * desc.zh-CN: 请点击按钮或按钮外查看效果。
 */
import { __read } from "tslib";
import React, { useState } from 'react';
import { Button } from 'antd';
import { useClickAway } from '@umijs/hooks';
export default (function () {
    var _a = __read(useState(0), 2), counter = _a[0], setCounter = _a[1];
    var ref = useClickAway(function () {
        setCounter(function (s) { return s + 1; });
    });
    return (React.createElement("div", null,
        React.createElement("span", { ref: ref },
            React.createElement(Button, { type: "primary" }, "box1")),
        React.createElement("p", null,
            "counter: ",
            counter)));
});
//# sourceMappingURL=demo1.js.map