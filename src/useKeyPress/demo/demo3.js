/**
 * title: Compound mode
 * desc: |
 *  Support for receiving a set of input keys or passing parameters as a combination of keys.
 *
 *  Attention：Key combination only supports the use of modified key + key alias + key in keyboard events, [See detail](#remarks)
 *
 * title.zh-CN: 组合方式
 * desc.zh-CN: |
 *  支持接收一组输入键，或以组合键的方式传递参数。
 *
 *  请注意：组合键方式只支持使用修饰键 + 键位别名 + 键盘事件中的 key 进行组合，更多内容请[查看备注](#备注)。
 */
import { __read } from "tslib";
import React, { useState } from 'react';
import { Icon } from 'antd';
import { useKeyPress } from '@umijs/hooks';
export default (function () {
    var _a = __read(useState(), 2), num = _a[0], setNum = _a[1];
    var _b = __read(useState(), 2), key = _b[0], setKey = _b[1];
    var _c = __read(useState(), 2), state = _c[0], setState = _c[1];
    var filterKey = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    useKeyPress(filterKey, function (event) {
        setNum(event.key);
    });
    // a s d f, Backspace, 8
    useKeyPress([65, 83, 68, 70, 8, '8'], function (event) {
        setKey(event.key);
    });
    useKeyPress(['shift.c'], function (event) {
        setState(1);
    });
    useKeyPress(['meta'], function (event) {
        setState(2);
    });
    useKeyPress('ctrl.alt.c', function (event) {
        setState(3);
    });
    useKeyPress('ctrl.alt.space', function (event) {
        setState(4);
    });
    // Attention: event.key === '0'
    useKeyPress('ctrl.alt.0', function (event) {
        setState(5);
    });
    return (React.createElement("div", null,
        React.createElement("p", null, "Try pressing the following: "),
        React.createElement("div", null,
            "1. Number key [0-9]: ",
            React.createElement("span", { style: { color: '#f00' } }, num)),
        React.createElement("div", null,
            "2. Press key [a, s, d, f, Backspace, 8]: ",
            React.createElement("span", { style: { color: '#f00' } }, key)),
        React.createElement("div", null,
            "3. Modifier key [shift.c]: ",
            state === 1 && React.createElement(Icon, { type: "check", style: { color: '#f00' } })),
        React.createElement("div", null,
            "4. Modifier key [meta]: ",
            state === 2 && React.createElement(Icon, { type: "check", style: { color: '#f00' } })),
        React.createElement("div", null,
            "5. Modifier key [ctrl.alt.c]:",
            ' ',
            state === 3 && React.createElement(Icon, { type: "check", style: { color: '#f00' } })),
        React.createElement("div", null,
            "6. Modifier key [ctrl.alt.space]:",
            ' ',
            state === 4 && React.createElement(Icon, { type: "check", style: { color: '#f00' } })),
        React.createElement("div", null,
            "7. Modifier key [ctrl.alt.0]:",
            ' ',
            state === 5 && React.createElement(Icon, { type: "check", style: { color: '#f00' } }))));
});
//# sourceMappingURL=demo3.js.map