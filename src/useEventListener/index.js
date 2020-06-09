import { useEffect, useRef } from 'react';
function useEventListener(eventName, handler, options) {
    var ref = useRef();
    var savedHandler = useRef();
    useEffect(function () {
        savedHandler.current = handler;
    }, [handler]);
    useEffect(function () {
        var _a, _b, _c;
        var passedInElement = options &&
            (typeof options.dom === 'function' ? options.dom() : options.dom);
        var element = passedInElement ? passedInElement : ref.current || window;
        var isSupported = element.addEventListener;
        if (!isSupported)
            return;
        var eventListener = function (event) {
            return savedHandler.current && savedHandler.current(event);
        };
        element.addEventListener(eventName, eventListener, {
            capture: (_a = options) === null || _a === void 0 ? void 0 : _a.capture,
            once: (_b = options) === null || _b === void 0 ? void 0 : _b.once,
            passive: (_c = options) === null || _c === void 0 ? void 0 : _c.passive
        });
        return function () {
            var _a;
            element.removeEventListener(eventName, eventListener, {
                capture: (_a = options) === null || _a === void 0 ? void 0 : _a.capture,
            });
        };
    }, [eventName, options, ref.current]);
    return ref;
}
export default useEventListener;
//# sourceMappingURL=index.js.map