import { useEffect } from 'react';
import usePersistFn from '../usePersistFn';
var useMount = function (fn) {
    // 持久化函数
    var fnPersist = usePersistFn(fn);
    useEffect(function () {
        if (fnPersist && typeof fnPersist === 'function') {
            fnPersist();
        }
    }, []);
};
export default useMount;
//# sourceMappingURL=index.js.map