import { useEffect, useRef } from 'react';
var useUpdateEffect = function (effect, deps) {
    var isMounted = useRef(false);
    useEffect(function () {
        if (!isMounted.current) {
            isMounted.current = true;
        }
        else {
            return effect();
        }
    }, deps);
};
export default useUpdateEffect;
//# sourceMappingURL=useUpdateEffect.js.map