/**
 * title: Detect Whole Page Scroll
 * desc: Try to scroll this webpage.
 *
 * title.zh-CN: 监测整页的滚动
 * desc.zh-CN: 尝试滚动一下页面。
 */
import { __read } from "tslib";
import React from 'react';
import { useScroll } from '@umijs/hooks';
export default (function () {
    var _a = __read(useScroll(document), 1), scroll = _a[0];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null, JSON.stringify(scroll))));
});
//# sourceMappingURL=demo2.js.map