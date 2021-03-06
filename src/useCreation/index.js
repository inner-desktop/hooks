import { useRef } from 'react';
export default function useCreation(factory, deps) {
    var current = useRef({
        deps: deps,
        obj: undefined,
        initialized: false,
    }).current;
    if (current.initialized === false || !depsAreSame(current.deps, deps)) {
        current.deps = deps;
        current.obj = factory();
        current.initialized = true;
    }
    return current.obj;
}
function depsAreSame(oldDeps, deps) {
    if (oldDeps === deps)
        return true;
    for (var i in oldDeps) {
        if (oldDeps[i] !== deps[i])
            return false;
    }
    return true;
}
//# sourceMappingURL=index.js.map