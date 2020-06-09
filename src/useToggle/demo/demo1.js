/**
 * title: Default usage
 * desc: use boolean value as default，use it as same as useBoolean.
 *
 * title.zh-CN: 基本用法
 * desc.zh-CN: 默认为 boolean 切换，基本用法与 useBoolean 一致。
 */
import React from 'react';
import { Button, Switch } from 'antd';
import { useToggle } from '@umijs/hooks';
export default (function () {
    var _a = useToggle(), state = _a.state, toggle = _a.toggle;
    return (React.createElement("div", null,
        React.createElement("p", null,
            "Effects\uFF1A",
            React.createElement(Switch, { checked: state, onChange: toggle })),
        React.createElement("p", null,
            React.createElement(Button, { type: "default", onClick: function () { return toggle(); } }, "Toggle"),
            React.createElement(Button, { type: "danger", onClick: function () { return toggle(false); }, style: { margin: '0 16px' } }, "Toggle False"),
            React.createElement(Button, { type: "primary", onClick: function () { return toggle(true); } }, "Toggle True"))));
});
//# sourceMappingURL=demo1.js.map