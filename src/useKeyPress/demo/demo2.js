/**
 * title: Use key aliases
 * desc: Support using key aliases. Please refer to the [document](#remarks) below.
 *
 * title.zh-CN: 使用别名
 * desc.zh-CN: 支持使用别名，更多内容请[查看备注](#备注)。
 */
import { __read } from "tslib";
import React, { useState } from 'react';
import { useKeyPress } from '@umijs/hooks';
export default (function () {
    var _a = __read(useState(0), 2), counter = _a[0], setCounter = _a[1];
    useKeyPress('left', function (event) {
        setCounter(function (s) { return s - 1; });
    });
    useKeyPress('right', function (event) {
        setCounter(function (s) { return s + 1; });
    });
    return (React.createElement("div", null,
        React.createElement("p", null, "Try pressing the following: "),
        React.createElement("div", null, "1. Press ArrowLeft to decrease"),
        React.createElement("div", null, "2. Press ArrowRight to increase"),
        React.createElement("div", null,
            "counter: ",
            React.createElement("span", { style: { color: '#f00' } }, counter))));
});
//# sourceMappingURL=demo2.js.map