/* eslint consistent-return: 0 */
import { useLayoutEffect, useRef } from 'react';
var useUpdateLayoutEffect = function (effect, deps) {
    var isMounted = useRef(false);
    useLayoutEffect(function () {
        if (!isMounted.current) {
            isMounted.current = true;
        }
        else {
            return effect();
        }
    }, deps);
};
export default useUpdateLayoutEffect;
//# sourceMappingURL=index.js.map