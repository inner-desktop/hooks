/**
 * title: Default usage
 * desc: The function is called right before the component unmount.
 *
 * title.zh-CN: 基本用法
 * desc.zh-CN: 在组件卸载时，执行方法。
 */
import React from 'react';
import { Button, message } from 'antd';
import { useUnmount, useToggle } from '@umijs/hooks';
var MyComponent = function () {
    useUnmount(function () {
        message.info('unmount');
    });
    return (React.createElement("div", null, "Hello World"));
};
export default (function () {
    var _a = useToggle(true), state = _a.state, toggle = _a.toggle;
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { onClick: function () { return toggle(); } }, state ? 'unmount' : 'mount'),
        state && React.createElement(MyComponent, null)));
});
//# sourceMappingURL=demo1.js.map