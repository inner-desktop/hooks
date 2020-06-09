/**
 * title: Default usage
 * desc: Listen to document visibility change.
 *
 * title.zh-CN: 基本用法
 * desc.zh-CN: 监听 document 的可见状态
 */
import React, { useEffect } from 'react';
import { useDocumentVisibility } from '@umijs/hooks';
export default (function () {
    var documentVisibility = useDocumentVisibility();
    useEffect(function () {
        if (documentVisibility === 'visible') {
            console.log("Current document visibility state: " + documentVisibility);
        }
        else {
            console.log("Current document visibility state: " + documentVisibility);
        }
    }, [documentVisibility]);
    return (React.createElement("div", null,
        "Current document visibility state: ",
        documentVisibility));
});
//# sourceMappingURL=demo1.js.map