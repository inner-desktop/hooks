import { __assign, __read, __rest, __spread } from "tslib";
import { useCallback, useEffect, useMemo, useRef } from 'react';
import useAsync from './useAsync';
import useUpdateEffect from './utils/useUpdateEffect';
function usePaginated(service, options) {
    var _a, _b;
    var paginated = options.paginated, _c = options.defaultPageSize, defaultPageSize = _c === void 0 ? 10 : _c, _d = options.refreshDeps, refreshDeps = _d === void 0 ? [] : _d, fetchKey = options.fetchKey, restOptions = __rest(options, ["paginated", "defaultPageSize", "refreshDeps", "fetchKey"]);
    useEffect(function () {
        if (fetchKey) {
            console.error('useRequest pagination\'s fetchKey will not work!');
        }
    }, []);
    var _e = useAsync(service, __assign({ defaultParams: [{
                current: 1,
                pageSize: defaultPageSize
            }] }, restOptions)), data = _e.data, params = _e.params, run = _e.run, loading = _e.loading, rest = __rest(_e, ["data", "params", "run", "loading"]);
    var _f = params && params[0] ? params[0] : {}, _g = _f.current, current = _g === void 0 ? 1 : _g, _h = _f.pageSize, pageSize = _h === void 0 ? defaultPageSize : _h, _j = _f.sorter, sorter = _j === void 0 ? {} : _j, _k = _f.filters, filters = _k === void 0 ? {} : _k;
    // 只改变 pagination，其他参数原样传递
    var runChangePaination = useCallback(function (paginationParams) {
        var _a = __read(params), oldPaginationParams = _a[0], restParams = _a.slice(1);
        run.apply(void 0, __spread([__assign(__assign({}, oldPaginationParams), paginationParams)], restParams));
    }, [run, params]);
    var total = ((_a = data) === null || _a === void 0 ? void 0 : _a.total) || 0;
    var totalPage = useMemo(function () { return Math.ceil(total / pageSize); }, [pageSize, total]);
    var onChange = useCallback(function (c, p) {
        var toCurrent = c <= 0 ? 1 : c;
        var toPageSize = p <= 0 ? 1 : p;
        var tempTotalPage = Math.ceil(total / toPageSize);
        if (toCurrent > tempTotalPage) {
            toCurrent = tempTotalPage;
        }
        runChangePaination({
            current: c,
            pageSize: p
        });
    }, [total, runChangePaination]);
    var changeCurrent = useCallback(function (c) {
        onChange(c, pageSize);
    }, [onChange, pageSize]);
    var changePageSize = useCallback(function (p) {
        onChange(current, p);
    }, [onChange, current]);
    var changeCurrentRef = useRef(changeCurrent);
    changeCurrentRef.current = changeCurrent;
    /* 分页场景下，如果 refreshDeps 变化，重置分页 */
    useUpdateEffect(function () {
        /* 只有自动执行的场景， refreshDeps 才有效 */
        if (!options.manual) {
            changeCurrentRef.current(1);
        }
    }, __spread(refreshDeps));
    // 表格翻页 排序 筛选等
    var changeTable = useCallback(function (p, f, s) {
        runChangePaination({
            current: p.current,
            pageSize: p.pageSize || defaultPageSize,
            filters: f,
            sorter: s,
        });
    }, [filters, sorter, runChangePaination]);
    return __assign({ loading: loading,
        data: data,
        params: params,
        run: run, pagination: {
            current: current,
            pageSize: pageSize,
            total: total,
            totalPage: totalPage,
            onChange: onChange,
            changeCurrent: changeCurrent,
            changePageSize: changePageSize,
        }, tableProps: {
            dataSource: ((_b = data) === null || _b === void 0 ? void 0 : _b.list) || [],
            loading: loading,
            onChange: changeTable,
            pagination: {
                current: current,
                pageSize: pageSize,
                total: total,
            },
        }, sorter: sorter,
        filters: filters }, rest);
}
export default usePaginated;
//# sourceMappingURL=usePaginated.js.map