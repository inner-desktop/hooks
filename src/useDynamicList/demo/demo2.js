/**
 * title: Nesting forms
 * desc: nesting dynamic forms in a set of form groups.
 *
 * title.zh-CN: 嵌套表单
 * desc.zh-CN: 动态表单内部嵌套动态表单
 */
import { __read } from "tslib";
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useDynamicList } from '@umijs/hooks';
var Card = function (props) {
    var _a = useDynamicList(props.list || [1]), list = _a.list, getKey = _a.getKey, push = _a.push;
    return (React.createElement("div", { style: { border: '1px solid #e8e8e8', padding: 16, marginBottom: 16 } },
        React.createElement(Form.Item, { label: "Group Name" }, props.form.getFieldDecorator("params[" + props.index + "].groupName", {
            initialValue: props.name,
        })(React.createElement(Input, { placeholder: "Please enter group name" }))),
        React.createElement(Form.Item, { label: "frequency" }, list.map(function (ele, index) { return (React.createElement("div", { style: { marginBottom: 16 }, key: getKey(index) },
            props.form.getFieldDecorator("params[" + props.index + "].ad[" + getKey(index) + "].name", {
                initialValue: ele.name,
            })(React.createElement(Input, { placeholder: "Please enter the advertisement name", addonBefore: "name\uFF1A" })),
            props.form.getFieldDecorator("params[" + props.index + "].ad[" + getKey(index) + "].frequency", {
                initialValue: ele.value,
            })(React.createElement(Input, { placeholder: "Please entery the frequency", addonAfter: "times/day" })))); })),
        React.createElement(Button, { block: true, onClick: push }, "Add advertisement")));
};
export default Form.create()(function (props) {
    var _a = __read(useState(''), 2), result = _a[0], setResult = _a[1];
    var _b = useDynamicList([
        {
            name: 'Group 1',
            list: [{ name: 'ad1', value: 2 }, { name: 'ad2', value: 1 }],
        },
    ]), list = _b.list, push = _b.push, getKey = _b.getKey, sortForm = _b.sortForm;
    return (React.createElement("div", { style: { width: 800, margin: 'auto', display: 'flex' } },
        React.createElement("div", { style: { width: 400, marginRight: 16 } },
            list.map(function (ele, index) { return (React.createElement(Card, { form: props.form, key: getKey(index), list: ele.list, name: ele.name, index: getKey(index) })); }),
            React.createElement(Button, { style: { marginTop: 16 }, block: true, onClick: function () { return push({}); } }, "Add Group")),
        React.createElement("div", null,
            React.createElement(Button, { onClick: function () {
                    var res = props.form.getFieldsValue().params;
                    var sortedResult = sortForm(res);
                    setResult(JSON.stringify(sortedResult, null, 2));
                } }, "Retrieve form data"),
            React.createElement("div", null,
                React.createElement("pre", null, result)))));
});
//# sourceMappingURL=demo2.js.map