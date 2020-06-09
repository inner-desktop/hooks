/**
 * title: Custom DOM
 * desc: |
 *  By default, you listen for events that are mounted on the window. You can also pass in a DOM object or return an object via function.
 *
 *  Supports multiple DOM callbacks, such as the common listening for input box events.
 *
 * title.zh-CN: 自定义 DOM
 * desc.zh-CN: |
 *  默认监听挂载在 window 上的事件，你也可以传入 DOM 对象或通过 function 返回一个对象的方式引入。
 *
 *  如常见的监听输入框事件，支持多种 DOM 回调。
 */
import { __read } from "tslib";
import React, { useState } from 'react';
import { useKeyPress } from '@umijs/hooks';
export default (function () {
    var _a = __read(useState(''), 2), text = _a[0], setText = _a[1];
    var _b = __read(useState(''), 2), textRef = _b[0], setTextRef = _b[1];
    var _c = __read(useState(''), 2), textSync = _c[0], setTextSync = _c[1];
    useKeyPress('enter', function (event) {
        var value = event.target.value;
        setText(value);
    }, {
        events: ['keyup'],
        target: function () { return document.getElementById('input'); },
    });
    var InputRef = useKeyPress('enter', function (event) {
        var value = event.target.value;
        setTextRef(value);
    });
    // Make sure the DOM exists
    useKeyPress(function () { return true; }, function (event) {
        var value = event.target.value;
        setTextSync(value);
    }, {
        events: ['keyup'],
        target: document.getElementById('input2'),
    });
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("p", null,
                "Input and pressing enter: ",
                text),
            React.createElement("input", { id: "input", style: { width: 300, marginRight: 24 } })),
        React.createElement("div", { style: { marginTop: 24 } },
            React.createElement("p", null,
                "Input and pressing enter: ",
                textRef),
            React.createElement("input", { ref: InputRef, style: { width: 300, marginRight: 24 } })),
        React.createElement("div", { style: { marginTop: 24 } },
            React.createElement("p", null,
                "Input after enter change: ",
                textSync),
            React.createElement("input", { id: "input2", style: { width: 300, marginRight: 24 } }))));
});
//# sourceMappingURL=demo5.js.map