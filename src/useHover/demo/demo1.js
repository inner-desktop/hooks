/**
 * title: Default usage
 * desc: Use ref to set elements that need listen dom.
 *
 * title.zh-CN: 基本用法
 * desc.zh-CN: 使用 ref 设置需要需要监听的元素。
 */
import { __read } from "tslib";
import React from 'react';
import { useHover } from '@umijs/hooks';
export default (function () {
    var _a = __read(useHover(), 2), isHovering = _a[0], hoverRef = _a[1];
    return React.createElement("div", { ref: hoverRef }, isHovering ? 'hover' : 'leaveHover');
});
//# sourceMappingURL=demo1.js.map