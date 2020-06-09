/**
 * title: Translate user text selection
 * desc: Use Antd.Popover to translate user text selection
 *
 * title.zh-CN: 划词翻译
 * desc.zh-CN: 配合 Popover 做划词翻译
 */
import { __read } from "tslib";
import { useRequest, useTextSelection } from '@umijs/hooks';
import { Popover, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
var getResult = function (keyword) {
    var trimedText = keyword.trim() !== '';
    if (!trimedText) {
        return Promise.resolve('');
    }
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve("[translate result] " + keyword); }, 2000);
    });
};
export default (function () {
    var _a = __read(useTextSelection(function () { return document.querySelector('#translate-dom'); }), 1), _b = _a[0], _c = _b.text, text = _c === void 0 ? '' : _c, _d = _b.left, left = _d === void 0 ? 0 : _d, _e = _b.top, top = _e === void 0 ? 0 : _e, _f = _b.height, height = _f === void 0 ? 0 : _f, _g = _b.width, width = _g === void 0 ? 0 : _g;
    var _h = __read(useState(false), 2), visible = _h[0], setVisible = _h[1];
    var _j = useRequest(getResult, {
        manual: true
    }), data = _j.data, run = _j.run, loading = _j.loading;
    useEffect(function () {
        if (text.trim() === '') {
            setVisible(false);
            return;
        }
        setVisible(true);
        run(text);
    }, [text]);
    return (React.createElement("div", null,
        React.createElement("p", { id: "translate-dom" }, "Translation of this paragraph;Translation of this paragraph;Translation of this paragraph;"),
        React.createElement(Popover, { content: React.createElement(Spin, { spinning: loading }, loading ? 'Translating……' : data), visible: visible },
            React.createElement("span", { style: {
                    position: 'fixed',
                    top: top + "px",
                    left: left + "px",
                    height: height + "px",
                    width: width + "px",
                    pointerEvents: 'none',
                } }))));
});
//# sourceMappingURL=demo3.js.map