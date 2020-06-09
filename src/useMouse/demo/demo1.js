/**
 * title: Default usage
 * desc: Tracking cursor position.
 *
 * title.zh-CN: 默认用法
 * desc.zh-CN: 获取鼠标位置。
 */
import React from 'react';
import { useMouse } from '@umijs/hooks';
export default (function () {
    var mouse = useMouse();
    return React.createElement("div", null,
        "Mouse Pos: ",
        JSON.stringify(mouse));
});
//# sourceMappingURL=demo1.js.map