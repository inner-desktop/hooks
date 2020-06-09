/**
 * title: Custom DOM
 * desc: Support pass in a DOM element directly or a function that returns the DOM element.
 *
 * title.zh-CN: 自定义 DOM
 * desc.zh-CN: 支持直接传入 DOM 对象或通过 function 返回一个对象的方式引入。
 */
import { __read } from "tslib";
import React, { useState } from 'react';
import { Button } from 'antd';
import { useClickAway } from '@umijs/hooks';
export default (function () {
    var _a = __read(useState(0), 2), counter = _a[0], setCounter = _a[1];
    useClickAway(function () {
        setCounter(function (s) { return s + 1; });
    }, function () { return document.getElementById('box2'); });
    return (React.createElement("div", null,
        React.createElement(Button, { type: "primary", id: "box2" }, "box2"),
        React.createElement("p", null,
            "counter: ",
            counter)));
});
//# sourceMappingURL=demo2.js.map