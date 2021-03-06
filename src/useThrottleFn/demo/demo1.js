/**
 * title: Default usage
 * desc: Frequent calls run, but the function is only executed every 500ms.
 *
 * title.zh-CN: 基础使用
 * desc.zh-CN: 频繁调用 run，但只会每隔 500ms 执行一次相关函数。
 */
import { __read } from "tslib";
import React, { useState } from 'react';
import { Button } from 'antd';
import { useThrottleFn } from '@umijs/hooks';
export default (function () {
    var _a = __read(useState(0), 2), value = _a[0], setValue = _a[1];
    var run = useThrottleFn(function () {
        setValue(value + 1);
    }, 500).run;
    return (React.createElement("div", null,
        React.createElement("p", { style: { marginTop: 16 } },
            " Clicked count: ",
            value,
            " "),
        React.createElement(Button, { onClick: run }, "Click fast!")));
});
//# sourceMappingURL=demo1.js.map