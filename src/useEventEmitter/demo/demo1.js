/**
 * title: Parent component shares a event
 * desc: The parent component creates a focus$ event emitter, and passes it to its children. When calling focus$.emit in MessageBox, InputBox will get notified.
 *
 * title.zh-CN: 父组件向子组件共享事件
 * desc.zh-CN: 父组件创建了一个 focus$ 事件，并且将它传递给了两个子组件。在 MessageBox 中调用 focus$.emit ，InputBox 组件就可以收到通知。
 */
import React, { useRef } from 'react';
import { Button, Input } from 'antd';
import { useEventEmitter } from '@umijs/hooks';
var MessageBox = function (props) {
    return (React.createElement("div", { style: { paddingBottom: 24 } },
        React.createElement("p", null, "You received a message"),
        React.createElement(Button, { onClick: function () {
                props.focus$.emit();
            } }, "Reply")));
};
var InputBox = function (props) {
    var inputRef = useRef();
    props.focus$.useSubscription(function () {
        inputRef.current.focus();
    });
    return React.createElement(Input, { ref: inputRef, placeholder: "Enter reply" });
};
export default function () {
    var focus$ = useEventEmitter();
    return (React.createElement(React.Fragment, null,
        React.createElement(MessageBox, { "focus$": focus$ }),
        React.createElement(InputBox, { "focus$": focus$ })));
}
//# sourceMappingURL=demo1.js.map