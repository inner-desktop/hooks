import { __assign, __read, __spread } from "tslib";
import { useCallback, useEffect, useRef, useState } from 'react';
import { isDocumentVisible } from './utils';
import { getCache, setCache } from './utils/cache';
import limit from './utils/limit';
import usePersistFn from './utils/usePersistFn';
import useUpdateEffect from './utils/useUpdateEffect';
import subscribeFocus from './utils/windowFocus';
import subscribeVisible from './utils/windowVisible';
import usePrevious from './utils/usePrevious';
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';
var DEFAULT_KEY = 'UMIJS_USE_API_DEFAULT_KEY';
var Fetch = /** @class */ (function () {
    function Fetch(service, config, subscribe, initState) {
        // 请求时序
        this.count = 0;
        // 是否卸载
        this.unmountedFlag = false;
        // visible 后，是否继续轮询
        this.pollingWhenVisibleFlag = false;
        this.pollingTimer = undefined;
        this.loadingDelayTimer = undefined;
        this.unsubscribe = [];
        this.that = this;
        this.state = {
            loading: false,
            params: [],
            data: undefined,
            error: undefined,
            run: this.run.bind(this.that),
            mutate: this.mutate.bind(this.that),
            refresh: this.refresh.bind(this.that),
            cancel: this.cancel.bind(this.that),
            unmount: this.unmount.bind(this.that),
        };
        this.service = service;
        this.config = config;
        this.subscribe = subscribe;
        if (initState) {
            this.state = __assign(__assign({}, this.state), initState);
        }
        this.debounceRun = this.config.debounceInterval ? debounce(this._run, this.config.debounceInterval) : undefined;
        this.throttleRun = this.config.throttleInterval ? throttle(this._run, this.config.throttleInterval) : undefined;
        this.limitRefresh = limit(this.refresh.bind(this), this.config.focusTimespan);
        if (this.config.pollingInterval) {
            this.unsubscribe.push(subscribeVisible(this.rePolling.bind(this)));
        }
        if (this.config.refreshOnWindowFocus) {
            this.unsubscribe.push(subscribeFocus(this.limitRefresh.bind(this)));
        }
    }
    Fetch.prototype.setState = function (s) {
        if (s === void 0) { s = {}; }
        this.state = __assign(__assign({}, this.state), s);
        this.subscribe(this.state);
    };
    Fetch.prototype._run = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // 取消已有定时器
        if (this.pollingTimer) {
            clearTimeout(this.pollingTimer);
        }
        // 取消 loadingDelayTimer
        if (this.loadingDelayTimer) {
            clearTimeout(this.loadingDelayTimer);
        }
        this.count += 1;
        // 闭包存储当次请求的 count
        var currentCount = this.count;
        this.setState({
            loading: !this.config.loadingDelay,
            params: args
        });
        if (this.config.loadingDelay) {
            this.loadingDelayTimer = setTimeout(function () {
                _this.setState({
                    loading: true,
                });
            }, this.config.loadingDelay);
        }
        // @ts-ignore
        return this.service.apply(this, __spread(args)).then(function (res) {
            if (!_this.unmountedFlag && currentCount === _this.count) {
                if (_this.loadingDelayTimer) {
                    clearTimeout(_this.loadingDelayTimer);
                }
                var formattedResult = _this.config.formatResult ? _this.config.formatResult(res) : res;
                _this.setState({
                    data: formattedResult,
                    error: undefined,
                    loading: false
                });
                if (_this.config.onSuccess) {
                    _this.config.onSuccess(formattedResult, args);
                }
                return formattedResult;
            }
        }).catch(function (error) {
            if (!_this.unmountedFlag && currentCount === _this.count) {
                if (_this.loadingDelayTimer) {
                    clearTimeout(_this.loadingDelayTimer);
                }
                _this.setState({
                    data: undefined,
                    error: error,
                    loading: false
                });
                if (_this.config.onError) {
                    _this.config.onError(error, args);
                }
                console.error(error);
                return error;
                // throw error;
            }
        }).finally(function () {
            if (!_this.unmountedFlag && currentCount === _this.count) {
                if (_this.config.pollingInterval) {
                    // 如果屏幕隐藏，并且 !pollingWhenHidden, 则停止轮询，并记录 flag，等 visible 时，继续轮询
                    if (!isDocumentVisible() && !_this.config.pollingWhenHidden) {
                        _this.pollingWhenVisibleFlag = true;
                        return;
                    }
                    _this.pollingTimer = setTimeout(function () {
                        _this._run.apply(_this, __spread(args));
                    }, _this.config.pollingInterval);
                }
            }
        });
    };
    Fetch.prototype.run = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.debounceRun) {
            this.debounceRun.apply(this, __spread(args));
            // TODO 如果 options 存在 debounceInterval，或 throttleInterval，则 run 和 refresh 不会返回 Promise。 带类型需要修复后，此处变成 return;。
            return Promise.resolve(null);
        }
        if (this.throttleRun) {
            this.throttleRun.apply(this, __spread(args));
            return Promise.resolve(null);
        }
        return this._run.apply(this, __spread(args));
    };
    Fetch.prototype.cancel = function () {
        if (this.debounceRun) {
            this.debounceRun.cancel();
        }
        if (this.throttleRun) {
            this.throttleRun.cancel();
        }
        if (this.loadingDelayTimer) {
            clearTimeout(this.loadingDelayTimer);
        }
        if (this.pollingTimer) {
            clearTimeout(this.pollingTimer);
        }
        this.pollingWhenVisibleFlag = false;
        this.count += 1;
        this.setState({
            loading: false
        });
    };
    Fetch.prototype.refresh = function () {
        return this.run.apply(this, __spread(this.state.params));
    };
    Fetch.prototype.rePolling = function () {
        if (this.pollingWhenVisibleFlag) {
            this.pollingWhenVisibleFlag = false;
            this.refresh();
        }
    };
    Fetch.prototype.mutate = function (data) {
        if (typeof data === 'function') {
            this.setState({
                // eslint-disable-next-line react/no-access-state-in-setstate
                data: data(this.state.data) || {}
            });
        }
        else {
            this.setState({
                data: data
            });
        }
    };
    Fetch.prototype.unmount = function () {
        this.unmountedFlag = true;
        this.cancel();
        this.unsubscribe.forEach(function (s) {
            s();
        });
    };
    return Fetch;
}());
function useAsync(service, options) {
    var _options = options || {};
    var _a = _options.refreshDeps, refreshDeps = _a === void 0 ? [] : _a, _b = _options.manual, manual = _b === void 0 ? false : _b, _c = _options.onSuccess, onSuccess = _c === void 0 ? function () { } : _c, _d = _options.onError, onError = _d === void 0 ? function () { } : _d, _e = _options.defaultLoading, defaultLoading = _e === void 0 ? false : _e, loadingDelay = _options.loadingDelay, _f = _options.pollingInterval, pollingInterval = _f === void 0 ? 0 : _f, _g = _options.pollingWhenHidden, pollingWhenHidden = _g === void 0 ? true : _g, _h = _options.defaultParams, defaultParams = _h === void 0 ? [] : _h, _j = _options.refreshOnWindowFocus, refreshOnWindowFocus = _j === void 0 ? false : _j, _k = _options.focusTimespan, focusTimespan = _k === void 0 ? 5000 : _k, fetchKey = _options.fetchKey, cacheKey = _options.cacheKey, debounceInterval = _options.debounceInterval, throttleInterval = _options.throttleInterval, initialData = _options.initialData;
    var newstFetchKey = useRef(DEFAULT_KEY);
    // 持久化一些函数
    var servicePersist = usePersistFn(service);
    var onSuccessPersist = usePersistFn(onSuccess);
    var onErrorPersist = usePersistFn(onError);
    var fetchKeyPersist = usePersistFn(fetchKey);
    var formatResult;
    if ('formatResult' in _options) {
        // eslint-disable-next-line prefer-destructuring
        formatResult = _options.formatResult;
    }
    var formatResultPersist = usePersistFn(formatResult);
    var config = {
        formatResult: formatResultPersist,
        onSuccess: onSuccessPersist,
        onError: onErrorPersist,
        loadingDelay: loadingDelay,
        pollingInterval: pollingInterval,
        pollingWhenHidden: pollingWhenHidden,
        refreshOnWindowFocus: refreshOnWindowFocus,
        focusTimespan: focusTimespan,
        debounceInterval: debounceInterval,
        throttleInterval: throttleInterval
    };
    var subscribe = usePersistFn(function (key, data) {
        setFeches(function (s) {
            // eslint-disable-next-line no-param-reassign
            s[key] = data;
            return __assign({}, s);
        });
    }, []);
    var _l = __read(useState(function () {
        // 如果有 缓存，则从缓存中读数据
        if (cacheKey) {
            var cache_1 = getCache(cacheKey);
            if (cache_1) {
                newstFetchKey.current = cache_1.newstFetchKey;
                /* 使用 initState, 重新 new Fetch */
                var newFetches_1 = {};
                Object.keys(cache_1.fetches).forEach(function (key) {
                    var cacheFetch = cache_1.fetches[key];
                    var newFetch = new Fetch(servicePersist, config, subscribe.bind(null, key), {
                        loading: cacheFetch.loading,
                        params: cacheFetch.params,
                        data: cacheFetch.data,
                        error: cacheFetch.error
                    });
                    newFetches_1[key] = newFetch.state;
                });
                return newFetches_1;
            }
        }
        return [];
    }), 2), fetches = _l[0], setFeches = _l[1];
    var fetchesRef = useRef(fetches);
    fetchesRef.current = fetches;
    var run = useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (fetchKeyPersist) {
            var key = fetchKeyPersist.apply(void 0, __spread(args));
            newstFetchKey.current = key === undefined ? DEFAULT_KEY : key;
        }
        var currentFetchKey = newstFetchKey.current;
        // 这里必须用 fetchsRef，而不能用 fetches。
        // 否则在 reset 完，立即 run 的时候，这里拿到的 fetches 是旧的。
        var currentFetch = fetchesRef.current[currentFetchKey];
        if (!currentFetch) {
            var newFetch = new Fetch(servicePersist, config, subscribe.bind(null, currentFetchKey), {
                data: initialData
            });
            currentFetch = newFetch.state;
            setFeches(function (s) {
                // eslint-disable-next-line no-param-reassign
                s[currentFetchKey] = currentFetch;
                return __assign({}, s);
            });
        }
        return currentFetch.run.apply(currentFetch, __spread(args));
    }, [fetchKey, subscribe]);
    var previousCacheKey = usePrevious(cacheKey);
    // cache
    useEffect(function () {
        if (cacheKey && previousCacheKey && previousCacheKey == cacheKey) {
            setCache(cacheKey, {
                fetches: fetches,
                newstFetchKey: newstFetchKey.current
            });
        }
    }, [fetches]);
    // 第一次默认执行
    useEffect(function () {
        if (!manual) {
            // 如果有缓存
            if (Object.keys(fetches).length > 0) {
                /* 重新执行所有的 */
                Object.values(fetches).forEach(function (f) {
                    f.refresh();
                });
            }
            else {
                // 第一次默认执行，可以通过 defaultParams 设置参数
                run.apply(void 0, __spread(defaultParams));
            }
        }
    }, []);
    // 重置 fetches
    var reset = useCallback(function (newCacheKey) {
        if (newCacheKey) {
            Object.values(fetchesRef.current).forEach(function (f) {
                f.unmount();
            });
            newstFetchKey.current = DEFAULT_KEY;
            var cache_2 = getCache(newCacheKey);
            if (cache_2) {
                newstFetchKey.current = cache_2.newstFetchKey;
                /* 使用 initState, 重新 new Fetch */
                var newFetches_2 = {};
                Object.keys(cache_2.fetches).forEach(function (key) {
                    var cacheFetch = cache_2.fetches[key];
                    var newFetch = new Fetch(servicePersist, config, subscribe.bind(null, key), {
                        loading: cacheFetch.loading,
                        params: cacheFetch.params,
                        data: cacheFetch.data,
                        error: cacheFetch.error
                    });
                    // @ts-ignore
                    newFetches_2[key] = newFetch.state;
                });
                setFeches(newFetches_2);
                fetchesRef.current = newFetches_2;
            }
            else {
                setFeches({});
                // 不写会有问题。如果不写，此时立即 run，会是老的数据
                fetchesRef.current = {};
            }
        }
        else {
            Object.values(fetchesRef.current).forEach(function (f) {
                f.unmount();
            });
            newstFetchKey.current = DEFAULT_KEY;
            setFeches({});
            // 不写会有问题。如果不写，此时立即 run，会是老的数据
            fetchesRef.current = {};
        }
    }, [setFeches]);
    //  refreshDeps 变化，重新执行所有请求
    useUpdateEffect(function () {
        if (!manual) {
            /* 全部重新执行 */
            Object.values(fetchesRef.current).forEach(function (f) {
                f.refresh();
            });
        }
    }, __spread(refreshDeps));
    // 卸载组件触发
    useEffect(function () { return function () {
        Object.values(fetchesRef.current).forEach(function (f) {
            f.unmount();
        });
    }; }, []);
    var noReady = useCallback(function (name) { return function () {
        throw new Error("Cannot call " + name + " when service not executed once.");
    }; }, []);
    return __assign(__assign({ loading: !manual || defaultLoading, data: initialData, error: undefined, params: [], cancel: noReady('cancel'), refresh: noReady('refresh'), mutate: noReady('mutate') }, (fetches[newstFetchKey.current] || {})), { run: run,
        fetches: fetches,
        reset: reset });
}
export default useAsync;
//# sourceMappingURL=useAsync.js.map