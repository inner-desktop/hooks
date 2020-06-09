/**
 * title: Default usage
 * desc: The function is called right after the component mount.
 *
 * title.zh-CN: 基本用法
 * desc.zh-CN: 在组件首次渲染时，执行方法。
 */
import React from 'react';
import { Button, message } from 'antd';
import { useToggle, useMount } from '@umijs/hooks';
var MyComponent = function () {
    useMount(function () {
        message.info('mount');
    });
    return (React.createElement("div", null, "Hello World"));
};
export default (function () {
    var _a = useToggle(false), state = _a.state, toggle = _a.toggle;
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { onClick: function () { return toggle(); } }, state ? 'unmount' : 'mount'),
        state && React.createElement(MyComponent, null)));
});
//# sourceMappingURL=demo1.js.map