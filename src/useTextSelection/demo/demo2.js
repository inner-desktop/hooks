/**
 * title: Set 'dom'  target。
 * desc: Specifies the text selection to listen for an dom
 *
 * title.zh-CN: 指定监听 'dom' 元素
 * desc.zh-CN: 指定监听某个元素的文本选取。
 */
import { __read } from "tslib";
import React from 'react';
import { useTextSelection } from '@umijs/hooks';
export default (function () {
    var _a = __read(useTextSelection(function () { return document.querySelector('#target-dom'); }), 1), text = _a[0].text;
    return (React.createElement("div", null,
        React.createElement("p", { id: "target-dom" }, "Only listen to the text selection of this paragraph."),
        React.createElement("p", null,
            "Result\uFF1A",
            text)));
});
//# sourceMappingURL=demo2.js.map