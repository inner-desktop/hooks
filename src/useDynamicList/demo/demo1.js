/**
 * title: Default usage
 * desc: a form that can add/remove fields dynamically.
 *
 * title.zh-CN: 动态列表
 * desc.zh-CN: 可增删的不定条数表单
 */
import { __read } from "tslib";
import React, { useState } from 'react';
import { Form, Button, Input, Icon } from 'antd';
import { useDynamicList } from '@umijs/hooks';
export default Form.create()(function (props) {
    var _a = useDynamicList(['David', 'Jack']), list = _a.list, remove = _a.remove, getKey = _a.getKey, push = _a.push;
    var _b = props.form, getFieldDecorator = _b.getFieldDecorator, validateFields = _b.validateFields;
    var _c = __read(useState(''), 2), result = _c[0], setResult = _c[1];
    var Row = function (index, item) { return (React.createElement(Form.Item, { key: getKey(index) },
        getFieldDecorator("names[" + getKey(index) + "]", {
            initialValue: item,
            rules: [
                {
                    required: true,
                    message: 'required',
                },
            ],
        })(React.createElement(Input, { style: { width: 300 }, placeholder: "Please enter your name" })),
        list.length > 1 && (React.createElement(Icon, { type: "minus-circle-o", style: { marginLeft: 8 }, onClick: function () {
                remove(index);
            } })),
        React.createElement(Icon, { type: "plus-circle-o", style: { marginLeft: 8 }, onClick: function () {
                push('');
            } }))); };
    return (React.createElement(React.Fragment, null,
        React.createElement(Form, null, list.map(function (ele, index) { return Row(index, ele); })),
        React.createElement(Button, { style: { marginTop: 8 }, type: "primary", onClick: function () {
                return validateFields(function (err, val) {
                    if (!err) {
                        setResult(JSON.stringify((val || {}).names.filter(function (e) { return !!e; })));
                    }
                });
            } }, "Submit"),
        React.createElement("div", null, result)));
});
//# sourceMappingURL=demo1.js.map