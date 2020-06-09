import { __read } from "tslib";
import { useEffect, useRef, useState } from 'react';
function useScroll() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _a = __read(useState({
        left: NaN,
        top: NaN,
    }), 2), position = _a[0], setPosition = _a[1];
    var ref = useRef();
    var hasPassedInElement = args.length === 1;
    var arg = args[0];
    useEffect(function () {
        var passedInElement = typeof arg === 'function' ? arg() : arg;
        var element = hasPassedInElement ? passedInElement : ref.current;
        if (!element)
            return;
        function updatePosition(target) {
            var newPosition;
            if (target === document) {
                if (!document.scrollingElement)
                    return;
                newPosition = {
                    left: document.scrollingElement.scrollLeft,
                    top: document.scrollingElement.scrollTop,
                };
            }
            else {
                newPosition = {
                    left: target.scrollLeft,
                    top: target.scrollTop,
                };
            }
            setPosition(newPosition);
        }
        updatePosition(element);
        function listener(event) {
            if (!event.target)
                return;
            updatePosition(event.target);
        }
        element.addEventListener('scroll', listener);
        return function () {
            element.removeEventListener('scroll', listener);
        };
    }, [ref.current, typeof arg === 'function' ? undefined : arg]);
    return [position, ref];
}
export default useScroll;
//# sourceMappingURL=index.js.map