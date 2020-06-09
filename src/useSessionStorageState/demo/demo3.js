/**
 * title: Persist objects with function updater
 * desc: function updater is also acceptable with useSessionStorageState.
 *
 * title.zh-CN: 使用 function updater 存储
 * desc.zh-CN: useSessionStorageState 里也可以用 function updater，就像 useState 那样。
 */
import { __assign, __read } from "tslib";
import React from 'react';
import { Input } from 'antd';
import { useSessionStorageState } from '@umijs/hooks';
export default function () {
    var _a = __read(useSessionStorageState('user', {
        id: 9234634791,
        name: 'Zhangsan',
        age: 33,
    }), 2), user = _a[0], setUser = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement(Input, { style: { width: 200 }, defaultValue: user.name, placeholder: "input user name", onChange: function (e) {
                setUser(function (u) { return (__assign(__assign({}, u), { name: e.target.value })); });
            } })));
}
//# sourceMappingURL=demo3.js.map