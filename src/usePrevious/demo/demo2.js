/**
 * title: Using compare function
 * desc: The stored previous value update only when the compare function returns true.
 *
 * title.zh-CN: 使用 compare function
 * desc.zh-CN: 只有 compare function 返回 true 时，才会记录值的变化
 */
import { __assign, __read } from "tslib";
import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { usePrevious } from '@umijs/hooks';
var nameCompareFunction = function (prev, next) {
    if (!prev) {
        return true;
    }
    if (prev.name !== next.name) {
        return true;
    }
    return false;
};
var jobCompareFunction = function (prev, next) {
    if (!prev) {
        return true;
    }
    if (prev.job !== next.job) {
        return true;
    }
    return false;
};
export default (function () {
    var _a = __read(useState({ name: 'Jack', job: 'student' }), 2), state = _a[0], setState = _a[1];
    var _b = __read(useState(''), 2), nameInput = _b[0], setNameInput = _b[1];
    var _c = __read(useState(''), 2), jobInput = _c[0], setJobInput = _c[1];
    var previousName = usePrevious(state, nameCompareFunction);
    var previousJob = usePrevious(state, jobCompareFunction);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: { margin: 8, border: '1px solid #e8e8e8', padding: 8 } },
            "current state:",
            React.createElement("div", null,
                "name: ",
                state.name),
            React.createElement("div", null,
                "job: ",
                state.job)),
        React.createElement("div", null,
            state.name,
            "'s previous name: ",
            (previousName || {}).name),
        React.createElement("div", { style: { marginBottom: 16 } },
            state.name,
            "'s previous job: ",
            (previousJob || {}).job),
        React.createElement(Input.Group, { compact: true },
            React.createElement(Input, { style: { width: 220 }, value: nameInput, onChange: function (e) { return setNameInput(e.target.value); }, placeholder: state.name + "'s new name" }),
            React.createElement(Button, { onClick: function () {
                    setState(function (s) { return (__assign(__assign({}, s), { name: nameInput })); });
                } }, "update")),
        React.createElement(Input.Group, { compact: true, style: { marginTop: 16 } },
            React.createElement(Input, { style: { width: 220 }, value: jobInput, onChange: function (e) { return setJobInput(e.target.value); }, placeholder: state.name + "'s new job" }),
            React.createElement(Button, { onClick: function () {
                    setState(function (s) { return (__assign(__assign({}, s), { job: jobInput })); });
                } }, "update"))));
});
//# sourceMappingURL=demo2.js.map