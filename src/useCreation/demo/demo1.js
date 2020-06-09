/**
 * title: Make sure only one instance is created
 * desc: You can click the "Rerender" button and trigger the update of this component. But the instance of Foo will keep unchanged.
 *
 * title.zh-CN: 确保实例不会被重复创建
 * desc.zh-CN: 点击 "Rerender" 按钮，触发组件的更新，但 Foo 的实例会保持不变
 */
import { __read } from "tslib";
import React, { useState } from 'react';
import { Button } from 'antd';
import { useCreation } from '@umijs/hooks';
var Foo = /** @class */ (function () {
    function Foo() {
        this.data = Math.random();
    }
    return Foo;
}());
export default function () {
    var foo = useCreation(function () { return new Foo(); }, []);
    var _a = __read(useState({}), 2), setFlag = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("p", null, foo.data),
        React.createElement(Button, { onClick: function () { setFlag({}); } }, "Rerender")));
}
//# sourceMappingURL=demo1.js.map