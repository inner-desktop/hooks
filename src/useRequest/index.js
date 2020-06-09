import { __assign, __read, __spread } from "tslib";
import { useRef, useContext } from 'react';
import useAsync from './useAsync';
import useLoadMore from './useLoadMore';
import usePaginated from './usePaginated';
import ConfigContext from './configContext';
function useRequest(service, options) {
    if (options === void 0) { options = {}; }
    var contextConfig = useContext(ConfigContext);
    var finalOptions = __assign(__assign({}, contextConfig), options);
    var paginated = finalOptions.paginated, loadMore = finalOptions.loadMore, requestMethod = finalOptions.requestMethod;
    var paginatedRef = useRef(paginated);
    var loadMoreRef = useRef(loadMore);
    if (paginatedRef.current !== paginated) {
        throw Error('You should not modify the paginated of options');
    }
    if (loadMoreRef.current !== loadMore) {
        throw Error('You should not modify the loadMore of options');
    }
    paginatedRef.current = paginated;
    loadMoreRef.current = loadMore;
    var finalRequestMethod = requestMethod;
    var promiseService;
    if (typeof service === 'string') {
        promiseService = function () { return finalRequestMethod(service); };
    }
    else if (typeof service === 'object') {
        promiseService = function () { return requestMethod(service); };
    }
    else {
        promiseService = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new Promise(function (resolve, reject) {
                var result = service.apply(void 0, __spread(args));
                if (result.then) {
                    result.then(function (data) { return resolve(data); }).catch(function (e) { return reject(e); });
                }
                else if (typeof result === 'string') {
                    finalRequestMethod(result).then(function (data) { resolve(data); }).catch(function (e) { return reject(e); });
                }
                else if (typeof result === 'object') {
                    // umi-request 需要拆分下字段
                    if (requestMethod) {
                        finalRequestMethod(result).then(function (data) { resolve(data); }).catch(function (e) { return reject(e); });
                    }
                    else {
                        console.error("service not found");
                        reject();
                    }
                }
            });
        };
    }
    if (loadMore) {
        return useLoadMore(promiseService, finalOptions);
    }
    if (paginated) {
        return usePaginated(promiseService, finalOptions);
    }
    return useAsync(promiseService, finalOptions);
}
var UseAPIProvider = ConfigContext.Provider;
export { useAsync, usePaginated, useLoadMore, UseAPIProvider };
export default useRequest;
//# sourceMappingURL=index.js.map