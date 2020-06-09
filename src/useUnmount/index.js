import { useEffect, useRef } from 'react';
var useUnmount = function (fn) {
    var fnRef = useRef(fn);
    fnRef.current = fn;
    useEffect(function () {
        return function () {
            if (fnRef.current && typeof fnRef.current === 'function') {
                fnRef.current();
            }
        };
    }, []);
};
export default useUnmount;
//# sourceMappingURL=index.js.map