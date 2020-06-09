/**
 * title: Basic usage
 * desc: Controlled Input component with initial value and reset functionality
 *
 * title.zh-CN: 基本用法
 * desc.zh-CN: 带初始化值跟重置的受控Input组件
 */
import { __assign, __read } from "tslib";
import React, { Fragment } from 'react';
import { Input, Button } from 'antd';
import { useEventTarget } from '@umijs/hooks';
export default (function () {
    var _a = __read(useEventTarget('this is initial value'), 2), valueProps = _a[0], reset = _a[1];
    return (React.createElement(Fragment, null,
        React.createElement(Input, __assign({}, valueProps, { style: { width: 200, marginRight: 20 } })),
        React.createElement(Button, { type: "primary", onClick: reset }, "\u91CD\u7F6E")));
});
//# sourceMappingURL=demo1.js.map