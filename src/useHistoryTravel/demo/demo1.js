/**
 * title: Basic usage
 * desc: redo and undo operations
 *
 * title.zh-CN: 基本用法
 * desc.zh: 撤销跟重做操作.
 */
import { __assign, __read, __spread } from "tslib";
import React, { useState } from 'react';
import { Input, Button, List, InputNumber } from 'antd';
import { useEventTarget, useHistoryTravel } from '@umijs/hooks';
var Item = List.Item;
export default (function () {
    var _a = useHistoryTravel(['do homework']), value = _a.value, setValue = _a.setValue, backLength = _a.backLength, forwardLength = _a.forwardLength, back = _a.back, forward = _a.forward, go = _a.go;
    var _b = __read(useEventTarget(''), 2), valueProps = _b[0], reset = _b[1];
    var _c = __read(useState(0), 2), step = _c[0], setStep = _c[1];
    var onAdd = function () {
        setValue(__spread(value, [
            valueProps.value
        ]));
        reset();
    };
    var onGo = function () {
        go(step);
        setStep(0);
    };
    return (React.createElement("div", null,
        React.createElement(Input, __assign({}, valueProps, { placeholder: "Please enter TODO name", style: { width: 200, marginRight: 20 } })),
        React.createElement(Button, { onClick: onAdd }, " Add TODO "),
        React.createElement(List, { header: React.createElement("div", null, " TODO list "), dataSource: value, renderItem: function (it) { return React.createElement(Item, null,
                " ",
                it); } }),
        React.createElement("div", { style: { marginBottom: 20 } },
            React.createElement(Button, { disabled: backLength <= 0, onClick: back, style: { marginRight: 20 } }, " undo "),
            React.createElement(Button, { disabled: forwardLength <= 0, onClick: forward }, " redo ")),
        React.createElement("div", null,
            React.createElement(InputNumber, { value: step, onChange: setStep, max: forwardLength, min: backLength * -1, style: { marginRight: 20 } }),
            React.createElement(Button, { onClick: onGo }, " Go "))));
});
//# sourceMappingURL=demo1.js.map