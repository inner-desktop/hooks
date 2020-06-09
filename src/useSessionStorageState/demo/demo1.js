/**
 * title: Persist state into sessionStorage
 * desc: Refresh this page and you will find the value of input box get restored from sessionStorage.
 *
 * title.zh-CN: 将 state 持久化在 sessionStorage 中
 * desc.zh-CN: 刷新页面后，可以看到输入框中的内容被从 sessionStorage 中恢复了。
 */
import { __read } from "tslib";
import React from 'react';
import { Input, Button } from 'antd';
import { useSessionStorageState } from '@umijs/hooks';
export default function () {
    var _a = __read(useSessionStorageState('user-message', 'Hello~'), 2), message = _a[0], setMessage = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement(Input, { value: message, onChange: function (e) {
                setMessage(e.target.value);
            }, placeholder: "Please enter some words...", style: { width: 200, marginRight: 16 } }),
        React.createElement(Button, { onClick: function () {
                setMessage();
            } }, "Reset")));
}
//# sourceMappingURL=demo1.js.map