/**
 * title: Lazy load
 * desc: Pass in a function that returns the DOM element.
 *
 * title.zh-CN: 懒加载
 * desc.zh-CN: 传入 function 或者 dom 来监听任意的 dom 节点。
 */
import { __read } from "tslib";
import React from 'react';
import { useHover } from '@umijs/hooks';
export default (function () {
    var _a = __read(useHover({
        dom: function () { return document.getElementById('hover-div'); },
        onEnter: function () {
            console.log('onEnter');
        },
        onLeave: function () {
            console.log('onLeave');
        },
    }), 1), isHovering = _a[0];
    return React.createElement("div", { id: "hover-div" }, isHovering ? 'hover' : 'leaveHover');
});
//# sourceMappingURL=demo2.js.map