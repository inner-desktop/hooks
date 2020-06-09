import { useRef, useEffect, useCallback } from 'react';
// 鼠标点击事件，click 不会监听右键
var defaultEvent = 'click';
export default function useClickAway(onClickAway, dom, eventName) {
    if (eventName === void 0) { eventName = defaultEvent; }
    var element = useRef();
    var handler = useCallback(function (event) {
        var targetElement = typeof dom === 'function' ? dom() : dom;
        var el = targetElement || element.current;
        if (!el || el.contains(event.target)) {
            return;
        }
        onClickAway(event);
    }, [element.current, onClickAway, dom]);
    useEffect(function () {
        document.addEventListener(eventName, handler);
        return function () {
            document.removeEventListener(eventName, handler);
        };
    }, [eventName, handler]);
    return element;
}
//# sourceMappingURL=index.js.map