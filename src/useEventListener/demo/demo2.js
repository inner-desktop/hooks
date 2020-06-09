/**
 * title: Examples
 * desc: Press any key to preview.
 *
 * title.zh-CN: 使用示例
 * desc.zh-CN: 按下键盘查看效果。
 */
import { __read } from "tslib";
import React, { useState } from 'react';
import useEventListener from '../index';
export default (function () {
    var _a = __read(useState(''), 2), value = _a[0], setValue = _a[1];
    var keyDownHandler = function (ev) {
        setValue(ev.code);
    };
    useEventListener('keydown', keyDownHandler);
    return React.createElement("p", null,
        "Your press key is ",
        value);
});
//# sourceMappingURL=demo2.js.map