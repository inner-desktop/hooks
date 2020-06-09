/**
 * title: Default usage
 * desc: Default as a switch function,or accept a parameter to change state
 *
 * title.zh-CN: 默认用法
 * desc.zh-CN: 默认切换布尔值状态，也可以接收一个参数作为新的值
 */
import React from 'react';
import { Button, Switch } from 'antd';
import { useBoolean } from '@umijs/hooks';
export default (function () {
    var _a = useBoolean(true), state = _a.state, toggle = _a.toggle, setTrue = _a.setTrue, setFalse = _a.setFalse;
    return (React.createElement("div", null,
        React.createElement("p", null,
            "Effects\uFF1A",
            React.createElement(Switch, { checked: state, onChange: toggle })),
        React.createElement("p", null,
            React.createElement(Button, { type: "default", onClick: function () { return toggle(); } }, "Toggle"),
            React.createElement(Button, { type: "danger", onClick: setFalse, style: { margin: '0 16px' } }, "Set false"),
            React.createElement(Button, { type: "primary", onClick: setTrue }, "Set true"))));
});
//# sourceMappingURL=demo1.js.map