/**
 * title: Custom transformer function
 * desc: Controlled Input component with number input only
 * title.zh-CN: 自定义转换函数
 * desc.zh-CN: 只能输入数字的受控Input组件
 */
import { __assign, __read } from "tslib";
import React, { Fragment } from 'react';
import { Input, Button } from 'antd';
import { useEventTarget } from '@umijs/hooks';
export default (function () {
    var _a = __read(useEventTarget('', function (val) {
        return val.replace(/[^\d]/g, '');
    }), 2), valueProps = _a[0], reset = _a[1];
    return (React.createElement(Fragment, null,
        React.createElement(Input, __assign({}, valueProps, { style: { width: 200, marginRight: 20 }, placeholder: "\u8BF7\u8F93\u5165" })),
        React.createElement(Button, { type: "primary", onClick: reset }, "\u91CD\u7F6E")));
});
//# sourceMappingURL=demo2.js.map