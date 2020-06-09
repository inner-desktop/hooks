/**
 * title: Default usage
 * desc: Click the button to preview.
 *
 * title.zh-CN: 基本用法
 * desc.zh-CN: 点击按钮查看效果。
 */
import { __read } from "tslib";
import React, { useState } from 'react';
import useEventListener from '../index';
export default (function () {
    var _a = __read(useState(0), 2), value = _a[0], setValue = _a[1];
    var clickHandler = function () {
        setValue(value + 1);
    };
    var ref = useEventListener('click', clickHandler);
    return React.createElement("button", { ref: ref },
        "You click ",
        value,
        " times");
});
//# sourceMappingURL=demo1.js.map