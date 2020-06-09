/**
 * title: Advanced
 * desc: Supports receiving a Boolean callback function to handle preprocessing operations.
 *
 * title.zh-CN: 进阶使用
 * desc.zh-CN: 支持接收一个返回 boolean 的回调函数，处理预处理操作。
 */
import { __read } from "tslib";
import React, { useState } from 'react';
import { useKeyPress } from '@umijs/hooks';
export default (function () {
    var _a = __read(useState(), 2), key = _a[0], setKey = _a[1];
    var filterKey = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    useKeyPress(function (event) { return !filterKey.includes(event.key); }, function (event) {
        if (event.type === 'keyup') {
            setKey(event.key);
        }
    }, {
        events: ['keydown', 'keyup'],
    });
    return (React.createElement("div", null,
        "Pressing key except number key\uFF1A",
        React.createElement("span", { style: { color: '#f00' } }, key)));
});
//# sourceMappingURL=demo4.js.map