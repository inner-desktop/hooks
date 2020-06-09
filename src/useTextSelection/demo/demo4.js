/**
 * title: Default usage
 * desc: Tracking content, size, position of user text selection
 *
 * title.zh-CN: 默认用法
 * desc.zh-CN: 获取用户当前选择的文本内容、大小及其相对于视口的位置。
 */
import { __read } from "tslib";
import React from 'react';
import { useTextSelection } from '@umijs/hooks';
export default (function () {
    var _a = __read(useTextSelection(), 2), selection = _a[0], ref = _a[1];
    return (React.createElement("div", null,
        React.createElement("div", { ref: ref },
            React.createElement("p", null, "Please swipe your mouse to select any text on this paragraph.")),
        React.createElement("p", null,
            "Result\uFF1A",
            JSON.stringify(selection))));
});
//# sourceMappingURL=demo4.js.map