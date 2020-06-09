/**
 * title: Dyanmic table(draggable)
 * desc: using antd table to build dynamic table form.
 *
 * title.zh-CN: 动态表格(可拖拽)
 * desc.zh-CN: 使用 antd table 构建动态表格
 */
import { __read } from "tslib";
import React, { useState } from 'react';
import { Form, Button, Input, Icon, Table } from 'antd';
import ReactDragListView from 'react-drag-listview';
import { useDynamicList } from '@umijs/hooks';
export default Form.create()(function (props) {
    var _a = useDynamicList([
        { name: 'my bro', age: '23', memo: "he's my bro" },
        { name: 'my sis', age: '21', memo: "she's my sis" },
        {},
    ]), list = _a.list, remove = _a.remove, getKey = _a.getKey, move = _a.move, push = _a.push, sortForm = _a.sortForm;
    var _b = props.form, getFieldDecorator = _b.getFieldDecorator, getFieldsValue = _b.getFieldsValue;
    var _c = __read(useState(''), 2), result = _c[0], setResult = _c[1];
    var columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: function (text, row, index) { return (React.createElement(React.Fragment, null,
                React.createElement(Icon, { style: { cursor: 'move', marginRight: 8 }, type: "drag" }),
                getFieldDecorator("params[" + getKey(index) + "].name", { initialValue: text })(React.createElement(Input, { style: { width: 120, marginRight: 16 }, placeholder: "name" })))); },
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            render: function (text, row, index) { return (React.createElement(React.Fragment, null, getFieldDecorator("params[" + getKey(index) + "].age", { initialValue: text })(React.createElement(Input, { style: { width: 120, marginRight: 16 }, placeholder: "age" })))); },
        },
        {
            key: 'memo',
            title: 'Memo',
            dataIndex: 'memo',
            render: function (text, row, index) { return (React.createElement(React.Fragment, null,
                getFieldDecorator("params[" + getKey(index) + "].memo", { initialValue: text })(React.createElement(Input, { style: { width: 300, marginRight: 16 }, placeholder: "please input the memo" })),
                React.createElement(Button.Group, null,
                    React.createElement(Button, { type: "danger", onClick: function () { return remove(index); } }, "Delete")))); },
        },
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement(ReactDragListView, { onDragEnd: function (oldIndex, newIndex) { return move(oldIndex, newIndex); }, handleSelector: 'i[aria-label="icon: drag"]' },
            React.createElement(Table, { columns: columns, dataSource: list, rowKey: function (r, index) { return getKey(index).toString(); }, pagination: false })),
        React.createElement(Button, { style: { marginTop: 8 }, block: true, type: "dashed", onClick: function () { return push({ name: 'new row', age: '25' }); } }, "+ Add row"),
        React.createElement(Button, { type: "primary", style: { marginTop: 16 }, onClick: function () { return setResult(JSON.stringify(sortForm(getFieldsValue().params), null, 2)); } }, "Submit"),
        React.createElement("div", { style: { whiteSpace: 'pre' } }, result && "content: " + result)));
});
//# sourceMappingURL=demo3.js.map