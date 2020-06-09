import { __assign, __read, __rest, __spread } from "tslib";
import { useRef, useCallback, useMemo, useEffect, useState } from 'react';
import useAsync from './useAsync';
import useUpdateEffect from './utils/useUpdateEffect';
function useLoadMore(service, options) {
    var _a = options.refreshDeps, refreshDeps = _a === void 0 ? [] : _a, ref = options.ref, isNoMore = options.isNoMore, _b = options.threshold, threshold = _b === void 0 ? 100 : _b, fetchKey = options.fetchKey, restOptions = __rest(options, ["refreshDeps", "ref", "isNoMore", "threshold", "fetchKey"]);
    var _c = __read(useState(false), 2), loadingMore = _c[0], setLoadingMore = _c[1];
    useEffect(function () {
        if (options.fetchKey) {
            console.warn("useRequest loadMore mode don't need fetchKey!");
        }
    }, []);
    var result = useAsync(service, __assign(__assign({}, restOptions), { fetchKey: function (d) { var _a, _b; return ((_b = (_a = d) === null || _a === void 0 ? void 0 : _a.list) === null || _b === void 0 ? void 0 : _b.length) || 0; }, onSuccess: function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            setLoadingMore(false);
            if (options.onSuccess) {
                options.onSuccess.apply(options, __spread(params));
            }
        } }));
    var data = result.data, run = result.run, params = result.params, reset = result.reset, loading = result.loading, fetches = result.fetches;
    var reload = useCallback(function () {
        reset();
        var _a = __read(params), restParams = _a.slice(1);
        run.apply(void 0, __spread([undefined], restParams));
    }, [run, reset, params]);
    var reloadRef = useRef(reload);
    reloadRef.current = reload;
    /* loadMore 场景下，如果 refreshDeps 变化，重置到第一页 */
    useUpdateEffect(function () {
        /* 只有自动执行的场景， refreshDeps 才有效 */
        if (!options.manual) {
            reloadRef.current();
        }
    }, __spread(refreshDeps));
    var dataGroup = useMemo(function () {
        var listGroup = [];
        // 在 loadMore 时，不希望清空上一次的 data。需要把最后一个 非 loading 的请求 data，放回去。
        var lastNoLoadingData = data;
        Object.values(fetches).forEach(function (h) {
            var _a, _b;
            if ((_a = h.data) === null || _a === void 0 ? void 0 : _a.list) {
                listGroup = listGroup.concat((_b = h.data) === null || _b === void 0 ? void 0 : _b.list);
            }
            if (!h.loading) {
                lastNoLoadingData = h.data;
            }
        });
        return __assign(__assign({}, lastNoLoadingData), { list: listGroup });
    }, [fetches, data]);
    var noMore = isNoMore ? (!loading && !loadingMore && isNoMore(dataGroup)) : false;
    var loadMore = useCallback(function () {
        if (noMore) {
            return;
        }
        setLoadingMore(true);
        var _a = __read(params), restParams = _a.slice(1);
        run.apply(void 0, __spread([dataGroup], restParams));
    }, [noMore, run, dataGroup, params]);
    /* 上拉加载的方法 */
    var scrollMethod = useCallback(function () {
        if (loading || loadingMore || !ref || !ref.current) {
            return;
        }
        if (ref.current.scrollHeight - ref.current.scrollTop <= ref.current.clientHeight + threshold) {
            loadMore();
        }
    }, [loading, ref, loadMore]);
    /* 如果有 ref，则会上拉加载更多 */
    useEffect(function () {
        if (!ref || !ref.current) {
            return function () { };
        }
        ref.current.addEventListener('scroll', scrollMethod);
        return function () {
            if (ref && ref.current) {
                ref.current.removeEventListener('scroll', scrollMethod);
            }
        };
    }, [scrollMethod]);
    return __assign(__assign({}, result), { data: dataGroup, reload: reload, loading: loading && dataGroup.list.length === 0, loadMore: loadMore,
        loadingMore: loadingMore,
        noMore: noMore });
}
export default useLoadMore;
//# sourceMappingURL=useLoadMore.js.map