import { useEffect, useRef } from 'react';
import useBoolean from '../useBoolean';
export default (function (options) {
    var _a = options || {}, dom = _a.dom, onEnter = _a.onEnter, onLeave = _a.onLeave;
    var element = useRef(null);
    var onEnterRef = useRef(onEnter);
    onEnterRef.current = onEnter;
    var onLeaveRef = useRef(onLeave);
    onLeaveRef.current = onLeave;
    var _b = useBoolean(false), state = _b.state, setTrue = _b.setTrue, setFalse = _b.setFalse;
    //@ts-ignore
    useEffect(function () {
        var onMouseEnter = function () {
            if (onEnterRef.current)
                onEnterRef.current();
            setTrue();
        };
        var onMouseLeave = function () {
            if (onLeaveRef.current)
                onLeaveRef.current();
            setFalse();
        };
        var passedInElement = typeof dom === 'function' ? dom() : dom;
        // 如果 传入dom
        if (passedInElement) {
            passedInElement.addEventListener('mouseenter', onMouseEnter);
            passedInElement.addEventListener('mouseleave', onMouseLeave);
            return function () {
                passedInElement.removeEventListener('mouseenter', onMouseEnter);
                passedInElement.removeEventListener('mouseleave', onMouseLeave);
            };
        }
        var node = element.current;
        if (node) {
            node.addEventListener('mouseenter', onMouseEnter);
            node.addEventListener('mouseleave', onMouseLeave);
            return function () {
                node.removeEventListener('mouseenter', onMouseEnter);
                node.removeEventListener('mouseleave', onMouseLeave);
            };
        }
    }, [element.current, typeof dom === 'function' ? undefined : dom]);
    if (dom) {
        return [!!state];
    }
    return [!!state, element];
});
//# sourceMappingURL=index.js.map