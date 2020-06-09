/**
 * title: Basic usage
 * desc: Supported Key and keyCode in keyboard events, pressing ArrowUp or ArrowDown to show effect.
 *
 * title.zh-CN: 基本用法
 * desc.zh-CN: 支持键盘事件中的 key 和 keyCode，请按 ArrowUp 或 ArrowDown 键进行演示。
 */
import { __read } from "tslib";
import React, { useState } from 'react';
import { useKeyPress } from '@umijs/hooks';
export default (function () {
    var _a = __read(useState(0), 2), counter = _a[0], setCounter = _a[1];
    useKeyPress('ArrowUp', function (event) {
        setCounter(function (s) { return s + 1; });
    });
    // keyCode value for ArrowDown
    useKeyPress(40, function (event) {
        setCounter(function (s) { return s - 1; });
    });
    return (React.createElement("div", null,
        React.createElement("p", null, "Try pressing the following: "),
        React.createElement("div", null, "1. Press ArrowUp by key to increase"),
        React.createElement("div", null, "2. Press ArrowDown by keyCode to decrease"),
        React.createElement("div", null,
            "counter: ",
            React.createElement("span", { style: { color: '#f00' } }, counter))));
});
//# sourceMappingURL=demo1.js.map