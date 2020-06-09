/**
 * title: Default usage
 * desc: Store the previous value.
 *
 * title.zh-CN: 基本用法
 * desc.zh-CN: 记录上次的 count 值
 */
import { __read } from "tslib";
import React, { useState } from 'react';
import { Button } from 'antd';
import { usePrevious } from '@umijs/hooks';
export default (function () {
    var _a = __read(useState(0), 2), count = _a[0], setCount = _a[1];
    var previous = usePrevious(count);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            "counter current value: ",
            count),
        React.createElement("div", null,
            "counter previous value: ",
            previous),
        React.createElement(Button.Group, null,
            React.createElement(Button, { onClick: function () { return setCount(function (c) { return c + 1; }); } }, " increase "),
            React.createElement(Button, { onClick: function () { return setCount(function (c) { return c - 1; }); } }, " decrease "))));
});
//# sourceMappingURL=demo1.js.map