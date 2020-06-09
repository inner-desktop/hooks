/**
 * title: Get responsive info in components
 * desc: By calling useResponsive in components, you can retrieve the responsive infomation of the browser page and subscribe to it at the same time.
 *
 * title.zh-CN: 在组件中获取响应式信息
 * desc.zh-CN: 在组件中调用 useResponsive 可以获取并订阅浏览器窗口的响应式信息。
 */
import React from 'react';
import { configResponsive, useResponsive } from '@umijs/hooks';
configResponsive({
    small: 0,
    middle: 800,
    large: 1200,
});
export default function () {
    var responsive = useResponsive();
    return (React.createElement(React.Fragment, null,
        React.createElement("p", null, "Please change the width of the browser window to see the effect: "),
        Object.keys(responsive).map(function (key) { return (React.createElement("p", { key: key },
            key,
            " ",
            responsive[key] ? '✔' : '✘')); })));
}
//# sourceMappingURL=demo1.js.map