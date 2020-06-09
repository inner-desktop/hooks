import { __read } from "tslib";
import { useEffect, useState } from 'react';
var initState = {
    screenX: NaN,
    screenY: NaN,
    clientX: NaN,
    clientY: NaN,
    pageX: NaN,
    pageY: NaN,
};
export default (function () {
    var _a = __read(useState(initState), 2), state = _a[0], setState = _a[1];
    useEffect(function () {
        var moveHandler = function (event) {
            var screenX = event.screenX, screenY = event.screenY, clientX = event.clientX, clientY = event.clientY, pageX = event.pageX, pageY = event.pageY;
            setState({ screenX: screenX, screenY: screenY, clientX: clientX, clientY: clientY, pageX: pageX, pageY: pageY });
        };
        document.addEventListener('mousemove', moveHandler);
        return function () {
            document.removeEventListener('mousemove', moveHandler);
        };
    }, []);
    return state;
});
//# sourceMappingURL=index.js.map