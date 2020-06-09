/**
 * title: Default usage
 * desc: Checkbox group.
 *
 * title.zh-CN: 默认用法
 * desc.zh-CN: 常见的 checkbox 联动
 */
import { __read } from "tslib";
import { Checkbox, Col, Row } from 'antd';
import React, { useMemo, useState } from 'react';
import { useSelections } from '@umijs/hooks';
export default (function () {
    var _a = __read(useState(false), 2), hideOdd = _a[0], setHideOdd = _a[1];
    var list = useMemo(function () {
        if (hideOdd) {
            return [2, 4, 6, 8];
        }
        return [1, 2, 3, 4, 5, 6, 7, 8];
    }, [hideOdd]);
    var _b = useSelections(list, [1]), selected = _b.selected, allSelected = _b.allSelected, isSelected = _b.isSelected, toggle = _b.toggle, toggleAll = _b.toggleAll, partiallySelected = _b.partiallySelected;
    return (React.createElement("div", null,
        React.createElement("div", null,
            "Selected : ",
            selected.join(',')),
        React.createElement("div", { style: { borderBottom: '1px solid #E9E9E9', padding: '10px 0' } },
            React.createElement(Checkbox, { checked: allSelected, onClick: toggleAll, indeterminate: partiallySelected }, "Check all"),
            React.createElement(Checkbox, { checked: hideOdd, onClick: function () { return setHideOdd(function (v) { return !v; }); } }, "Hide Odd")),
        React.createElement(Row, { style: { padding: '10px 0' } }, list.map(function (o) { return (React.createElement(Col, { span: 12, key: o },
            React.createElement(Checkbox, { checked: isSelected(o), onClick: function () { return toggle(o); } }, o))); }))));
});
//# sourceMappingURL=demo1.js.map