import * as React from 'react';
export default (function (state, compare) {
    var prevRef = React.useRef();
    var curRef = React.useRef();
    var needUpdate = typeof compare === 'function' ? compare(curRef.current, state) : true;
    if (needUpdate) {
        prevRef.current = curRef.current;
        curRef.current = state;
    }
    return prevRef.current;
});
//# sourceMappingURL=index.js.map