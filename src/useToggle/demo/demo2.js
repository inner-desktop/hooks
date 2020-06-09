/**
 * title: Advanced usage
 * desc: Accept two parameters, switch between them.
 *
 * title.zh-CN: 进阶使用
 * desc.zh-CN: 接受两个参数，在参数间进行切换。
 */
import React from 'react';
import { Button } from 'antd';
import { useToggle } from '@umijs/hooks';
export default (function () {
    var _a = useToggle('Hello', 'World'), state = _a.state, toggle = _a.toggle, setLeft = _a.setLeft, setRight = _a.setRight;
    return (React.createElement("div", null,
        React.createElement("p", null,
            "Effects\uFF1A",
            state),
        React.createElement("p", null,
            React.createElement(Button, { type: "default", onClick: function () { return toggle(); } }, "Toggle"),
            React.createElement(Button, { type: "danger", onClick: function () { return toggle('Hello'); }, style: { margin: '0 16px' } }, "Toggle Hello"),
            React.createElement(Button, { type: "primary", onClick: function () { return toggle('World'); } }, "Toggle World"),
            React.createElement(Button, { type: "danger", onClick: setLeft, style: { margin: '0 16px' } }, "Set Hello"),
            React.createElement(Button, { type: "primary", onClick: setRight }, "Set World"))));
});
//# sourceMappingURL=demo2.js.map