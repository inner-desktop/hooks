import React__default, { useRef, useState, useCallback, useEffect, useMemo, useLayoutEffect, useContext } from 'react';
import { debounce, throttle } from 'lodash';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var Timer = /** @class */ (function () {
    function Timer(cb, delay) {
        var _this = this;
        this.remaining = 0;
        this.delay = 0;
        this.cb = null;
        this.start = 0;
        this.timerId = 0;
        this.stop = function () {
            clearTimeout(_this.timerId);
            _this.timerId = 0;
            _this.remaining = _this.delay;
        };
        this.pause = function () {
            clearTimeout(_this.timerId);
            _this.remaining -= Date.now() - _this.start;
        };
        this.resume = function () {
            _this.start = Date.now();
            clearTimeout(_this.timerId);
            _this.timerId = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this.cb) {
                        this.cb();
                    }
                    return [2 /*return*/];
                });
            }); }, _this.remaining);
        };
        this.remaining = delay;
        this.delay = delay;
        this.start = Date.now();
        this.cb = cb;
    }
    return Timer;
}());
function useAsync(fn, deps, options) {
    var _this = this;
    var _deps = (Array.isArray(deps) ? deps : []);
    var _options = (typeof deps === 'object' && !Array.isArray(deps)
        ? deps
        : options || {});
    var params = useRef([]);
    var _a = _options.autoCancel, autoCancel = _a === void 0 ? true : _a;
    var timer = useRef(undefined);
    var omitNextResume = useRef(false);
    var count = useRef(0);
    var fnRef = useRef(fn);
    fnRef.current = fn;
    var onSuccessRef = useRef(_options.onSuccess);
    onSuccessRef.current = _options.onSuccess;
    var onErrorRef = useRef(_options.onError);
    onErrorRef.current = _options.onError;
    // initial loading state is related to manual option
    var _b = __read(useState({
        data: undefined,
        error: undefined,
        loading: !_options.manual,
    }), 2), state = _b[0], set = _b[1];
    var run = useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // 确保不会返回被取消的结果
        var runCount = count.current;
        /* 当前参数保存一下 */
        params.current = args;
        set(function (s) { return (__assign(__assign({}, s), { loading: true })); });
        return fnRef
            .current.apply(fnRef, __spread(args)).then(function (data) {
            if (runCount === count.current) {
                set(function (s) { return (__assign(__assign({}, s), { data: data, loading: false })); });
                if (onSuccessRef.current) {
                    onSuccessRef.current(data, args || []);
                }
            }
            return data;
        })
            .catch(function (error) {
            if (runCount === count.current) {
                set(function (s) { return (__assign(__assign({}, s), { error: error, loading: false })); });
                if (onErrorRef.current) {
                    onErrorRef.current(error, args || []);
                }
            }
            throw error;
        });
    }, []);
    /* 软取消，由于竞态，需要取消上一次的请求 */
    var softCancel = useCallback(function () {
        if (autoCancel) {
            count.current += 1;
            set(function (s) { return (__assign(__assign({}, s), { loading: false })); });
        }
    }, [autoCancel]);
    /* 强制取消，组件卸载，或者用户手工取消 */
    var forceCancel = useCallback(function () {
        count.current += 1;
        set(function (s) { return (__assign(__assign({}, s), { loading: false })); });
    }, []);
    var stop = useCallback(function () {
        if (timer.current) {
            timer.current.stop();
            omitNextResume.current = true;
        }
        forceCancel();
    }, [forceCancel]);
    var resume = useCallback(function () {
        if (timer.current) {
            omitNextResume.current = false;
            timer.current.resume();
        }
    }, []);
    var pause = useCallback(function () {
        if (timer.current) {
            timer.current.pause();
            omitNextResume.current = true;
        }
        forceCancel();
    }, [forceCancel]);
    var start = useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                // 有定时器的延时逻辑
                if (_options.pollingInterval) {
                    if (timer.current) {
                        stop();
                    }
                    omitNextResume.current = false;
                    timer.current = new Timer(function () { return start.apply(void 0, __spread(args)); }, _options.pollingInterval);
                    ret = run.apply(void 0, __spread(args));
                    ret.finally(function () {
                        if (timer.current && !omitNextResume.current) {
                            timer.current.resume();
                        }
                    });
                    return [2 /*return*/, ret];
                }
                // 如果上一次异步操作还在 loading，则会尝试取消掉上一次的异步操作。
                softCancel();
                return [2 /*return*/, run.apply(void 0, __spread(args))];
            });
        });
    }, [run, softCancel, stop, _options.pollingInterval]);
    useEffect(function () {
        if (!_options.manual) {
            // deps 变化时，重新执行
            start();
        }
        /* 如果 desp 变化，强制取消 */
        return function () {
            if (timer.current) {
                timer.current.stop();
            }
            forceCancel();
        };
    }, __spread(_deps, [forceCancel, start]));
    return {
        loading: state.loading,
        params: params.current,
        error: state.error,
        data: state.data,
        cancel: forceCancel,
        run: start,
        timer: {
            stop: stop,
            resume: resume,
            pause: pause,
        },
    };
}

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

function useLoadMore(fn, deps, options) {
    var _deps = (Array.isArray(deps) ? deps : []);
    var _options = (typeof deps === 'object' && !Array.isArray(deps)
        ? deps
        : options || {});
    /* 初始化值 */
    var itemKey = _options.itemKey, _a = _options.initPageSize, initPageSize = _a === void 0 ? 10 : _a, formatResult = _options.formatResult, ref = _options.ref, _b = _options.threshold, threshold = _b === void 0 ? 100 : _b;
    var incrementSize = _options.incrementSize;
    if (!incrementSize) {
        incrementSize = initPageSize;
    }
    var _c = __read(useState(1), 2), page = _c[0], setPage = _c[1];
    var _d = __read(useState(), 2), total = _d[0], setTotal = _d[1];
    var _e = __read(useState([]), 2), data = _e[0], setData = _e[1];
    /* 控制重新执行 */
    var _f = __read(useState(0), 2), count = _f[0], setCount = _f[1];
    /* 开始的时间戳 */
    var startTime = useRef(new Date().getTime());
    var _g = useAsync(fn, [], {
        manual: true,
    }), run = _g.run, loading = _g.loading;
    /* id 模式下读取 Key */
    var getItemKey = useCallback(function (item, index) {
        var key = typeof itemKey === 'function' ? itemKey(item, index) : item[itemKey];
        return key === undefined ? index : key;
    }, [itemKey]);
    var loadData = useCallback(function () {
        var params = {
            page: page,
            pageSize: (page === 1 ? initPageSize : incrementSize),
            offset: data.length,
            startTime: startTime.current,
        };
        /* id 模式需要增加最后一个 id */
        if (itemKey) {
            params.id = data.length > 0 ? getItemKey(data[data.length - 1], data.length - 1) : undefined;
        }
        run(params).then(function (result) {
            if (!result) {
                return;
            }
            var _a = (formatResult
                ? formatResult(result)
                : result), currentTotal = _a.total, currentData = _a.data;
            setData(data.concat(currentData));
            setTotal(currentTotal);
        });
    }, [page, initPageSize, incrementSize, data]);
    var loadMore = useCallback(function () {
        if (total && data.length >= total) {
            return;
        }
        setPage(page + 1);
        setCount(count + 1);
    }, [page, count, data, total]);
    var reload = useCallback(function () {
        setPage(1);
        setData([]);
        startTime.current = new Date().getTime();
        setCount(count + 1);
    }, [count]);
    /* 上拉加载的方法 */
    var scrollMethod = useCallback(function () {
        if (loading || !ref || !ref.current) {
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
    /* 只有初始化，或者 count 变化时，才会执行 run */
    useEffect(function () {
        loadData();
    }, [count]);
    /* deps 变化后，重新 reload */
    useUpdateEffect(function () {
        reload();
    }, _deps);
    return {
        data: data,
        loading: loading && page === 1,
        loadingMore: loading && page > 1,
        reload: reload,
        loadMore: loadMore,
        total: total,
        noMore: (!loading && !total) || (!!total && data.length >= total),
    };
}

function useDebounceFn(fn, deps, wait) {
    var _deps = (Array.isArray(deps) ? deps : []);
    var _wait = typeof deps === 'number' ? deps : wait || 0;
    var timer = useRef();
    var fnRef = useRef(fn);
    fnRef.current = fn;
    var cancel = useCallback(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
    }, []);
    var run = useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        cancel();
        timer.current = setTimeout(function () {
            fnRef.current.apply(fnRef, __spread(args));
        }, _wait);
    }, [_wait, cancel]);
    useUpdateEffect(function () {
        run();
        return cancel;
    }, __spread(_deps, [run]));
    useEffect(function () { return cancel; }, []);
    return {
        run: run,
        cancel: cancel,
    };
}

function useSearch(fn, deps, options) {
    var _deps = (Array.isArray(deps) ? deps : []);
    var _options = (typeof deps === 'object' && !Array.isArray(deps)
        ? deps
        : options || {});
    var _a = __read(useState(''), 2), value = _a[0], setValue = _a[1];
    var _b = useAsync(fn, __spread([value], _deps), {
        manual: true,
    }), loading = _b.loading, data = _b.data, run = _b.run, cancelAsync = _b.cancel;
    var wait = useMemo(function () { return (_options.wait === undefined ? 300 : _options.wait); }, [
        _options.wait,
    ]);
    var debounce = useDebounceFn(function () {
        run(value);
    }, [value], wait);
    /* 依赖变化时，需要立即重新请求 */
    useUpdateEffect(function () {
        run(value);
    }, _deps);
    var cancel = useCallback(function () {
        /* 先取消防抖 */
        debounce.cancel();
        /* 再取消 async */
        cancelAsync();
    }, [cancelAsync, debounce.cancel]);
    /* 手动触发 */
    var trigger = useCallback(function () {
        run(value);
    }, [run, value]);
    return {
        data: data,
        loading: loading,
        value: value,
        onChange: setValue,
        cancel: cancel,
        run: trigger,
    };
}

function useControllableValue(props, options) {
    if (props === void 0) { props = {}; }
    if (options === void 0) { options = {}; }
    var defaultValue = options.defaultValue, _a = options.defaultValuePropName, defaultValuePropName = _a === void 0 ? 'defaultValue' : _a, _b = options.valuePropName, valuePropName = _b === void 0 ? 'value' : _b, _c = options.trigger, trigger = _c === void 0 ? 'onChange' : _c;
    var value = props[valuePropName];
    var initialValue = useMemo(function () {
        if (valuePropName in props) {
            return value;
        }
        if (defaultValuePropName in props) {
            return props[defaultValuePropName];
        }
        return defaultValue;
    }, []);
    var _d = __read(useState(initialValue), 2), state = _d[0], setState = _d[1];
    /* init 的时候不用执行了 */
    useUpdateEffect(function () {
        if (valuePropName in props) {
            setState(value);
        }
    }, [value]);
    var handleSetState = useCallback(function (v) {
        if (!(valuePropName in props)) {
            setState(v);
        }
        if (props[trigger]) {
            props[trigger](v);
        }
    }, [props, valuePropName, trigger]);
    return [state, handleSetState];
}

var index = (function (initialValue) {
    var counterRef = useRef(-1);
    // key 存储器
    var keyList = useRef([]);
    // 内部方法
    var setKey = useCallback(function (index) {
        counterRef.current += 1;
        keyList.current.splice(index, 0, counterRef.current);
    }, []);
    var _a = __read(useState(function () {
        (initialValue || []).forEach(function (_, index) {
            setKey(index);
        });
        return initialValue || [];
    }), 2), list = _a[0], setList = _a[1];
    var resetList = function (newList) {
        if (newList === void 0) { newList = []; }
        keyList.current = [];
        counterRef.current = -1;
        setList(function () {
            (newList || []).forEach(function (_, index) {
                setKey(index);
            });
            return newList || [];
        });
    };
    var insert = function (index, obj) {
        setList(function (l) {
            var temp = __spread(l);
            temp.splice(index, 0, obj);
            setKey(index);
            return temp;
        });
    };
    var getKey = function (index) { return keyList.current[index]; };
    var getIndex = function (index) { return keyList.current.findIndex(function (ele) { return ele === index; }); };
    var merge = function (index, obj) {
        setList(function (l) {
            var temp = __spread(l);
            obj.forEach(function (_, i) {
                setKey(index + i);
            });
            temp.splice.apply(temp, __spread([index, 0], obj));
            return temp;
        });
    };
    var replace = function (index, obj) {
        setList(function (l) {
            var temp = __spread(l);
            temp[index] = obj;
            return temp;
        });
    };
    var remove = function (index) {
        setList(function (l) {
            var temp = __spread(l);
            temp.splice(index, 1);
            // remove keys if necessary
            try {
                keyList.current.splice(index, 1);
            }
            catch (e) {
                console.error(e);
            }
            return temp;
        });
    };
    var move = function (oldIndex, newIndex) {
        if (oldIndex === newIndex) {
            return;
        }
        setList(function (l) {
            var newList = __spread(l);
            var temp = newList.filter(function (_, index) { return index !== oldIndex; });
            temp.splice(newIndex, 0, newList[oldIndex]);
            // move keys if necessary
            try {
                var keyTemp = keyList.current.filter(function (_, index) { return index !== oldIndex; });
                keyTemp.splice(newIndex, 0, keyList.current[oldIndex]);
                keyList.current = keyTemp;
            }
            catch (e) {
                console.error(e);
            }
            return temp;
        });
    };
    var push = function (obj) {
        setList(function (l) {
            setKey(l.length);
            return l.concat([obj]);
        });
    };
    var pop = function () {
        // remove keys if necessary
        try {
            keyList.current = keyList.current.slice(0, keyList.current.length - 1);
        }
        catch (e) {
            console.error(e);
        }
        setList(function (l) { return l.slice(0, l.length - 1); });
    };
    var unshift = function (obj) {
        setList(function (l) {
            setKey(0);
            return [obj].concat(l);
        });
    };
    var sortForm = function (result) {
        return result
            .map(function (item, index) { return ({ key: index, item: item }); }) // add index into obj
            .sort(function (a, b) { return getIndex(a.key) - getIndex(b.key); }) // sort based on the index of table
            .filter(function (item) { return !!item.item; }) // remove undefined(s)
            .map(function (item) { return item.item; });
    }; // retrive the data
    var shift = function () {
        // remove keys if necessary
        try {
            keyList.current = keyList.current.slice(1, keyList.current.length);
        }
        catch (e) {
            console.error(e);
        }
        setList(function (l) { return l.slice(1, l.length); });
    };
    return {
        list: list,
        insert: insert,
        merge: merge,
        replace: replace,
        remove: remove,
        getKey: getKey,
        getIndex: getIndex,
        move: move,
        push: push,
        pop: pop,
        unshift: unshift,
        shift: shift,
        sortForm: sortForm,
        resetList: resetList,
    };
});

var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        var _this = this;
        this.subscriptions = new Set();
        this.emit = function (val) {
            var e_1, _a;
            try {
                for (var _b = __values(_this.subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var subscription = _c.value;
                    subscription(val);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        this.useSubscription = function (callback) {
            var callbackRef = useRef();
            callbackRef.current = callback;
            useEffect(function () {
                function subscription(val) {
                    if (callbackRef.current) {
                        callbackRef.current(val);
                    }
                }
                _this.subscriptions.add(subscription);
                return function () {
                    _this.subscriptions.delete(subscription);
                };
            }, []);
        };
    }
    return EventEmitter;
}());
function useEventEmitter() {
    var ref = useRef();
    if (!ref.current) {
        ref.current = new EventEmitter();
    }
    return ref.current;
}

var subscribers = new Set();
var info;
var responsiveConfig = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
};
function init() {
    if (info)
        return;
    info = {};
    calculate();
    window.addEventListener('resize', function () {
        var e_1, _a;
        var oldInfo = info;
        calculate();
        if (oldInfo === info)
            return;
        try {
            for (var subscribers_1 = __values(subscribers), subscribers_1_1 = subscribers_1.next(); !subscribers_1_1.done; subscribers_1_1 = subscribers_1.next()) {
                var subscriber = subscribers_1_1.value;
                subscriber();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (subscribers_1_1 && !subscribers_1_1.done && (_a = subscribers_1.return)) _a.call(subscribers_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
}
function calculate() {
    var e_2, _a;
    var width = window.innerWidth;
    var newInfo = {};
    var shouldUpdate = false;
    try {
        for (var _b = __values(Object.keys(responsiveConfig)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            newInfo[key] = width >= responsiveConfig[key];
            if (newInfo[key] !== info[key]) {
                shouldUpdate = true;
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    if (shouldUpdate) {
        info = newInfo;
    }
}
function configResponsive(config) {
    responsiveConfig = config;
    if (info)
        calculate();
}
function useResponsive() {
    init();
    var _a = __read(useState(info), 2), state = _a[0], setState = _a[1];
    useEffect(function () {
        var subscriber = function () {
            setState(info);
        };
        subscribers.add(subscriber);
        return function () {
            subscribers.delete(subscriber);
        };
    }, []);
    return state;
}

function isFunction(obj) {
    return typeof obj === 'function';
}
function useStorageState(storage, key, defaultValue) {
    var _a = __read(useState(function () { return getStoredValue(); }), 2), state = _a[0], setState = _a[1];
    function getStoredValue() {
        var raw = storage.getItem(key);
        if (raw) {
            return JSON.parse(raw);
        }
        if (isFunction(defaultValue)) {
            return defaultValue();
        }
        return defaultValue;
    }
    function updateState(value) {
        if (typeof value === 'undefined') {
            storage.removeItem(key);
            setState(undefined);
        }
        else if (isFunction(value)) {
            var previousState = getStoredValue();
            var currentState = value(previousState);
            storage.setItem(key, JSON.stringify(currentState));
            setState(currentState);
        }
        else {
            storage.setItem(key, JSON.stringify(value));
            setState(value);
        }
    }
    useUpdateEffect(function () {
        setState(getStoredValue());
    }, [key]);
    return [state, updateState];
}

function useLocalStorageState(key, defaultValue) {
    return useStorageState(localStorage, key, defaultValue);
}

function useSessionStorageState(key, defaultValue) {
    return useStorageState(sessionStorage, key, defaultValue);
}

/* eslint consistent-return: 0 */
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

function usePagination(fn, deps, options) {
    var _deps = (Array.isArray(deps) ? deps : []);
    var _options = (typeof deps === 'object' && !Array.isArray(deps)
        ? deps
        : options || {});
    var _a = _options.defaultPageSize, defaultPageSize = _a === void 0 ? 10 : _a, formatResult = _options.formatResult;
    var _b = __read(useState([]), 2), data = _b[0], setData = _b[1];
    var _c = __read(useState(0), 2), total = _c[0], setTotal = _c[1];
    var _d = __read(useState(1), 2), current = _d[0], setCurrent = _d[1];
    var _e = __read(useState(defaultPageSize), 2), pageSize = _e[0], setPageSize = _e[1];
    var _f = __read(useState(0), 2), count = _f[0], setCount = _f[1];
    // let shamFn!: (params: FnParams) => Promise<FormattedResult<Item>>;
    // if (Array.isArray(fn)) {
    //   shamFn = (params) => {
    //     return new Promise((resolve) => {
    //       resolve({
    //         data: fn.slice((params.current - 1) * params.pageSize, params.current * params.pageSize),
    //         total: fn.length
    //       });
    //     });
    //   }
    // }
    var _g = useAsync(fn, _deps, {
        manual: true,
    }), run = _g.run, loading = _g.loading;
    useEffect(function () {
        run({
            current: current,
            pageSize: pageSize,
        }).then(function (res) {
            if (!res) {
                return;
            }
            var formattedResult = formatResult
                ? formatResult(res)
                : res;
            if (formattedResult) {
                if (typeof formattedResult.total === 'number')
                    setTotal(formattedResult.total);
                if (formattedResult.data)
                    setData(formattedResult.data);
                if (typeof formattedResult.current === 'number')
                    setCurrent(formattedResult.current);
                if (typeof formattedResult.pageSize === 'number')
                    setPageSize(formattedResult.pageSize);
            }
        });
    }, [current, pageSize, count]);
    useUpdateEffect(function () {
        setCurrent(1);
        setCount(function (c) { return c + 1; });
    }, _deps);
    var totalPage = useMemo(function () { return Math.ceil(total / pageSize); }, [pageSize, total]);
    var onChange = useCallback(function (c, p) {
        var toCurrent = c <= 0 ? 1 : c;
        var toPageSize = p <= 0 ? 1 : p;
        var tempTotalPage = Math.ceil(total / toPageSize);
        if (toCurrent > tempTotalPage) {
            toCurrent = tempTotalPage;
        }
        setCurrent(toCurrent);
        setPageSize(toPageSize);
    }, [total]);
    var changeCurrent = useCallback(function (c) {
        onChange(c, pageSize);
    }, [onChange, pageSize]);
    var changePageSize = useCallback(function (p) {
        onChange(current, p);
    }, [onChange, current]);
    var refresh = useCallback(function () {
        setCount(function (c) { return c + 1; });
    }, []);
    return {
        data: data,
        loading: loading,
        pagination: {
            current: current,
            pageSize: pageSize,
            total: total,
            totalPage: totalPage,
            onChange: onChange,
            changeCurrent: changeCurrent,
            changePageSize: changePageSize,
        },
        refresh: refresh,
    };
}

function useToggle(defaultValue, reverseValue) {
    if (defaultValue === void 0) { defaultValue = false; }
    var _a = __read(useState(defaultValue), 2), state = _a[0], setState = _a[1];
    var reverseValueOrigin = useMemo(function () { return (reverseValue === undefined ? !defaultValue : reverseValue); }, [reverseValue]);
    // 切换返回值
    var toggle = useCallback(function (value) {
        setState(function (oldState) {
            // 强制返回状态值，适用于点击操作
            if (value !== undefined) {
                return value;
            }
            return oldState === defaultValue ? reverseValueOrigin : defaultValue;
        });
    }, []);
    // 设置默认值
    var setLeft = useCallback(function () {
        setState(defaultValue);
    }, [setState]);
    // 设置取反值
    var setRight = useCallback(function () {
        setState(reverseValueOrigin);
    }, [setState]);
    return {
        state: state,
        toggle: toggle,
        setLeft: setLeft,
        setRight: setRight,
    };
}

var useBoolean = function (defaultValue) {
    if (defaultValue === void 0) { defaultValue = false; }
    var _a = useToggle(defaultValue), state = _a.state, toggle = _a.toggle;
    var setTrue = useCallback(function () { return toggle(true); }, [toggle]);
    var setFalse = useCallback(function () { return toggle(false); }, [toggle]);
    return {
        state: state,
        toggle: toggle,
        setTrue: setTrue,
        setFalse: setFalse,
    };
};

var getVisibility = function () {
    // 如果是服务端渲染，直接返回true
    if (typeof document === 'undefined')
        return true;
    return document.visibilityState;
};
function useDocumentVisibility() {
    var _a = __read(useState(getVisibility()), 2), documentVisibility = _a[0], setDocumentVisibility = _a[1];
    useEffect(function () {
        var handleVisibilityChange = function () {
            setDocumentVisibility(getVisibility());
        };
        window.addEventListener('visibilitychange', handleVisibilityChange);
        return function () {
            window.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);
    return documentVisibility;
}

function useSelections(items, defaultSelected) {
    if (defaultSelected === void 0) { defaultSelected = []; }
    var _a = __read(useState(defaultSelected), 2), selected = _a[0], setSelected = _a[1];
    var _b = useMemo(function () {
        var selectedSet = new Set(selected);
        var isSelected = function (item) { return selectedSet.has(item); };
        var select = function (item) {
            selectedSet.add(item);
            return setSelected(Array.from(selectedSet));
        };
        var unSelect = function (item) {
            selectedSet.delete(item);
            return setSelected(Array.from(selectedSet));
        };
        var toggle = function (item) {
            if (isSelected(item)) {
                unSelect(item);
            }
            else {
                select(item);
            }
        };
        return { selectedSet: selectedSet, isSelected: isSelected, select: select, unSelect: unSelect, toggle: toggle };
    }, [selected]), selectedSet = _b.selectedSet, isSelected = _b.isSelected, select = _b.select, unSelect = _b.unSelect, toggle = _b.toggle;
    var _c = useMemo(function () {
        var selectAll = function () {
            items.forEach(function (o) {
                selectedSet.add(o);
            });
            setSelected(Array.from(selectedSet));
        };
        var unSelectAll = function () {
            items.forEach(function (o) {
                selectedSet.delete(o);
            });
            setSelected(Array.from(selectedSet));
        };
        var noneSelected = items.every(function (o) { return !selectedSet.has(o); });
        var allSelected = items.every(function (o) { return selectedSet.has(o); }) && !noneSelected;
        var partiallySelected = !noneSelected && !allSelected;
        var toggleAll = function () { return (allSelected ? unSelectAll() : selectAll()); };
        return { selectAll: selectAll, unSelectAll: unSelectAll, noneSelected: noneSelected, allSelected: allSelected, partiallySelected: partiallySelected, toggleAll: toggleAll };
    }, [selectedSet, items]), selectAll = _c.selectAll, unSelectAll = _c.unSelectAll, noneSelected = _c.noneSelected, allSelected = _c.allSelected, partiallySelected = _c.partiallySelected, toggleAll = _c.toggleAll;
    return {
        selected: selected,
        isSelected: isSelected,
        select: select,
        unSelect: unSelect,
        toggle: toggle,
        selectAll: selectAll,
        unSelectAll: unSelectAll,
        toggleAll: toggleAll,
        allSelected: allSelected,
        noneSelected: noneSelected,
        partiallySelected: partiallySelected,
        setSelected: setSelected,
    };
}

function useThrottleFn(fn, deps, wait) {
    var _deps = (Array.isArray(deps) ? deps : []);
    var _wait = typeof deps === 'number' ? deps : wait || 0;
    var timer = useRef();
    var fnRef = useRef(fn);
    fnRef.current = fn;
    var currentArgs = useRef([]);
    var cancel = useCallback(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = undefined;
    }, []);
    var run = useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        currentArgs.current = args;
        if (!timer.current) {
            timer.current = setTimeout(function () {
                fnRef.current.apply(fnRef, __spread(currentArgs.current));
                timer.current = undefined;
            }, _wait);
        }
    }, [_wait, cancel]);
    useUpdateEffect(function () {
        run();
    }, __spread(_deps, [run]));
    useEffect(function () { return cancel; }, []);
    return {
        run: run,
        cancel: cancel,
    };
}

function useThrottle(value, wait) {
    var _a = __read(useState(value), 2), state = _a[0], setState = _a[1];
    useThrottleFn(function () {
        setState(value);
    }, [value], wait);
    return state;
}

function useDebounce(value, wait) {
    var _a = __read(useState(value), 2), state = _a[0], setState = _a[1];
    useDebounceFn(function () {
        setState(value);
    }, [value], wait);
    return state;
}

var index$1 = (function (state, compare) {
    var prevRef = useRef();
    var curRef = useRef();
    var needUpdate = typeof compare === 'function' ? compare(curRef.current, state) : true;
    if (needUpdate) {
        prevRef.current = curRef.current;
        curRef.current = state;
    }
    return prevRef.current;
});

var initState = {
    screenX: NaN,
    screenY: NaN,
    clientX: NaN,
    clientY: NaN,
    pageX: NaN,
    pageY: NaN,
};
var index$2 = (function () {
    var _a = __read(useState(initState), 2), state = _a[0], setState = _a[1];
    useEffect(function () {
        var moveHandler = function (event) {
            var screenX = event.screenX, screenY = event.screenY, clientX = event.clientX, clientY = event.clientY, pageX = event.pageX, pageY = event.pageY;
            setState({ screenX: screenX, screenY: screenY, clientX: clientX, clientY: clientY, pageX: pageX, pageY: pageY });
        };
        document.addEventListener('mousemove', moveHandler);
        return function () {
            document.removeEventListener('mousemove', moveHandler);
        };
    }, []);
    return state;
});

function useScroll() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _a = __read(useState({
        left: NaN,
        top: NaN,
    }), 2), position = _a[0], setPosition = _a[1];
    var ref = useRef();
    var hasPassedInElement = args.length === 1;
    var arg = args[0];
    useEffect(function () {
        var passedInElement = typeof arg === 'function' ? arg() : arg;
        var element = hasPassedInElement ? passedInElement : ref.current;
        if (!element)
            return;
        function updatePosition(target) {
            var newPosition;
            if (target === document) {
                if (!document.scrollingElement)
                    return;
                newPosition = {
                    left: document.scrollingElement.scrollLeft,
                    top: document.scrollingElement.scrollTop,
                };
            }
            else {
                newPosition = {
                    left: target.scrollLeft,
                    top: target.scrollTop,
                };
            }
            setPosition(newPosition);
        }
        updatePosition(element);
        function listener(event) {
            if (!event.target)
                return;
            updatePosition(event.target);
        }
        element.addEventListener('scroll', listener);
        return function () {
            element.removeEventListener('scroll', listener);
        };
    }, [ref.current, typeof arg === 'function' ? undefined : arg]);
    return [position, ref];
}

// 鼠标点击事件，click 不会监听右键
var defaultEvent = 'click';
function useClickAway(onClickAway, dom, eventName) {
    if (eventName === void 0) { eventName = defaultEvent; }
    var element = useRef();
    var handler = useCallback(function (event) {
        var targetElement = typeof dom === 'function' ? dom() : dom;
        var el = targetElement || element.current;
        if (!el || el.contains(event.target)) {
            return;
        }
        onClickAway(event);
    }, [element.current, onClickAway, dom]);
    useEffect(function () {
        document.addEventListener(eventName, handler);
        return function () {
            document.removeEventListener(eventName, handler);
        };
    }, [eventName, handler]);
    return element;
}

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function() {

// Exit early if we're not running in a browser.
if (typeof window !== 'object') {
  return;
}

// Exit early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}


/**
 * A local reference to the document.
 */
var document = window.document;


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = entry.rootBounds;
  this.boundingClientRect = entry.boundingClientRect;
  this.intersectionRect = entry.intersectionRect || getEmptyRect();
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    // Round the intersection ratio to avoid floating point math issues:
    // https://github.com/w3c/IntersectionObserver/issues/324
    this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (options.root && options.root.nodeType != 1) {
    throw new Error('root must be an Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections();
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {

    return item.element != target;
  });
  if (!this._observationTargets.length) {
    this._unmonitorIntersections();
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibility state is visible.
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function() {
  if (!this._monitoringIntersections) {
    this._monitoringIntersections = true;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      this._monitoringInterval = setInterval(
          this._checkForIntersections, this.POLL_INTERVAL);
    }
    else {
      addEvent(window, 'resize', this._checkForIntersections, true);
      addEvent(document, 'scroll', this._checkForIntersections, true);

      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
        this._domObserver = new MutationObserver(this._checkForIntersections);
        this._domObserver.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function() {
  if (this._monitoringIntersections) {
    this._monitoringIntersections = false;

    clearInterval(this._monitoringInterval);
    this._monitoringInterval = null;

    removeEvent(window, 'resize', this._checkForIntersections, true);
    removeEvent(document, 'scroll', this._checkForIntersections, true);

    if (this._domObserver) {
      this._domObserver.disconnect();
      this._domObserver = null;
    }
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, rootRect);

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootRect,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, rootRect) {

  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var targetRect = getBoundingClientRect(target);
  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return;

    if (parent == this.root || parent == document) {
      atRoot = true;
      parentRect = rootRect;
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      if (parent != document.body &&
          parent != document.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);

      if (!intersectionRect) break;
    }
    parent = getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {Object} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var html = document.documentElement;
    var body = document.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {Object} rect The rect object to expand.
 * @return {Object} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  return containsDeep(this.root || document, target);
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its execution, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detatchEvent == 'function') {
    node.detatchEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object} The intersection rect or undefined if no intersection
 *     is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  };
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}

/**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }

  if (parent && parent.assignedSlot) {
    // If the parent is distributed in a <slot>, return the parent of a slot.
    return parent.assignedSlot.parentNode;
  }

  return parent;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}());

function isInViewPort(el) {
    if (!el) {
        return false;
    }
    var viewPortWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var rect = el.getBoundingClientRect();
    if (rect) {
        var top_1 = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right;
        return bottom > 0 && top_1 <= viewPortHeight && left <= viewPortWidth && right > 0;
    }
    return false;
}
function useInViewport() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var element = useRef();
    var hasPassedInElement = args.length === 1;
    var arg = useRef(args[0]);
    _a = __read(args, 1), arg.current = _a[0];
    var _b = __read(useState(function () {
        var initDOM = typeof arg.current === 'function' ? arg.current() : arg.current;
        return isInViewPort(initDOM);
    }), 2), inViewPort = _b[0], setInViewport = _b[1];
    useLayoutEffect(function () {
        var passedInElement = typeof arg.current === 'function' ? arg.current() : arg.current;
        var targetElement = hasPassedInElement ? passedInElement : element.current;
        if (!targetElement) {
            return function () { };
        }
        var observer = new IntersectionObserver(function (entries) {
            var e_1, _a;
            try {
                for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
                    var entry = entries_1_1.value;
                    if (entry.isIntersecting) {
                        setInViewport(true);
                    }
                    else {
                        setInViewport(false);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
        observer.observe(targetElement);
        return function () {
            observer.disconnect();
        };
    }, [element.current, typeof arg.current === 'function' ? undefined : arg.current]);
    if (hasPassedInElement) {
        return [inViewPort];
    }
    return [inViewPort, element];
}

// 键盘事件 keyCode 别名
var aliasKeyCodeMap = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    delete: [8, 46],
};
// 键盘事件 key 别名
var aliasKeyMap = {
    esc: 'Escape',
    tab: 'Tab',
    enter: 'Enter',
    space: ' ',
    // IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    delete: ['Backspace', 'Delete'],
};
// 修饰键
var modifierKey = {
    ctrl: function (event) { return event.ctrlKey; },
    shift: function (event) { return event.shiftKey; },
    alt: function (event) { return event.altKey; },
    meta: function (event) { return event.metaKey; },
};
// 返回空对象
var noop = function () { };
/**
 * 判断对象类型
 * @param [obj: any] 参数对象
 * @returns String
 */
function isType(obj) {
    return Object.prototype.toString
        .call(obj)
        .replace(/^\[object (.+)\]$/, '$1')
        .toLowerCase();
}
/**
 * 判断按键是否激活
 * @param [event: KeyboardEvent]键盘事件
 * @param [keyFilter: any] 当前键
 * @returns Boolean
 */
function genFilterKey(event, keyFilter) {
    var e_1, _a;
    if (!event.key || !event.keyCode) {
        return false;
    }
    var type = isType(keyFilter);
    // 数字类型直接匹配事件的 keyCode
    if (type === 'number') {
        return event.keyCode === keyFilter;
    }
    // 字符串依次判断是否有组合键
    var genArr = keyFilter.split('.');
    var genLen = 0;
    try {
        for (var genArr_1 = __values(genArr), genArr_1_1 = genArr_1.next(); !genArr_1_1.done; genArr_1_1 = genArr_1.next()) {
            var key = genArr_1_1.value;
            // 组合键
            var genModifier = modifierKey[key];
            // key 别名
            var aliasKey = aliasKeyMap[key];
            // keyCode 别名
            var aliasKeyCode = aliasKeyCodeMap[key];
            /**
             * 满足以上规则
             * 1. 自定义组合键别名
             * 2. 自定义 key 别名
             * 3. 自定义 keyCode 别名
             * 4. 匹配 key 或 keyCode
             */
            if ((genModifier && genModifier(event)) ||
                (aliasKey && isType(aliasKey) === 'array'
                    ? aliasKey.includes(event.key)
                    : (aliasKey === event.key)) ||
                (aliasKeyCode && isType(aliasKeyCode) === 'array'
                    ? aliasKeyCode.includes(event.keyCode)
                    : (aliasKeyCode === event.keyCode)) ||
                event.key.toUpperCase() === key.toUpperCase()) {
                genLen++;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (genArr_1_1 && !genArr_1_1.done && (_a = genArr_1.return)) _a.call(genArr_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return genLen === genArr.length;
}
/**
 * 键盘输入预处理方法
 * @param [keyFilter: any] 当前键
 * @returns () => Boolean
 */
function genKeyFormater(keyFilter) {
    var type = isType(keyFilter);
    if (type === 'function') {
        return keyFilter;
    }
    if (type === 'string' || type === 'number') {
        return function (event) { return genFilterKey(event, keyFilter); };
    }
    if (type === 'array') {
        return function (event) { return keyFilter.some(function (item) { return genFilterKey(event, item); }); };
    }
    return keyFilter ? function () { return true; } : function () { return false; };
}
var defaultEvents = ['keydown'];
function useKeyPress(keyFilter, eventHandler, option) {
    if (eventHandler === void 0) { eventHandler = noop; }
    if (option === void 0) { option = {}; }
    var _a = option.events, events = _a === void 0 ? defaultEvents : _a, target = option.target;
    var element = useRef();
    var callbackRef = useRef(eventHandler);
    callbackRef.current = eventHandler;
    var callbackHandler = useCallback(function (event) {
        var genGuard = genKeyFormater(keyFilter);
        if (genGuard(event)) {
            return callbackRef.current(event);
        }
    }, [keyFilter]);
    useEffect(function () {
        var e_2, _a;
        var targetElement = typeof target === 'function' ? target() : target;
        var el = element.current || targetElement || window;
        try {
            for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
                var eventName = events_1_1.value;
                el.addEventListener(eventName, callbackHandler);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return function () {
            var e_3, _a;
            try {
                for (var events_2 = __values(events), events_2_1 = events_2.next(); !events_2_1.done; events_2_1 = events_2.next()) {
                    var eventName = events_2_1.value;
                    el.removeEventListener(eventName, callbackHandler);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (events_2_1 && !events_2_1.done && (_a = events_2.return)) _a.call(events_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
        };
    }, [events, callbackHandler, target]);
    return element;
}

function useEventListener(eventName, handler, options) {
    var ref = useRef();
    var savedHandler = useRef();
    useEffect(function () {
        savedHandler.current = handler;
    }, [handler]);
    useEffect(function () {
        var _a, _b, _c;
        var passedInElement = options &&
            (typeof options.dom === 'function' ? options.dom() : options.dom);
        var element = passedInElement ? passedInElement : ref.current || window;
        var isSupported = element.addEventListener;
        if (!isSupported)
            return;
        var eventListener = function (event) {
            return savedHandler.current && savedHandler.current(event);
        };
        element.addEventListener(eventName, eventListener, {
            capture: (_a = options) === null || _a === void 0 ? void 0 : _a.capture,
            once: (_b = options) === null || _b === void 0 ? void 0 : _b.once,
            passive: (_c = options) === null || _c === void 0 ? void 0 : _c.passive
        });
        return function () {
            var _a;
            element.removeEventListener(eventName, eventListener, {
                capture: (_a = options) === null || _a === void 0 ? void 0 : _a.capture,
            });
        };
    }, [eventName, options, ref.current]);
    return ref;
}

var index$3 = (function (options) {
    var _a = options || {}, dom = _a.dom, onEnter = _a.onEnter, onLeave = _a.onLeave;
    var element = useRef(null);
    var onEnterRef = useRef(onEnter);
    onEnterRef.current = onEnter;
    var onLeaveRef = useRef(onLeave);
    onLeaveRef.current = onLeave;
    var _b = useBoolean(false), state = _b.state, setTrue = _b.setTrue, setFalse = _b.setFalse;
    //@ts-ignore
    useEffect(function () {
        var onMouseEnter = function () {
            if (onEnterRef.current)
                onEnterRef.current();
            setTrue();
        };
        var onMouseLeave = function () {
            if (onLeaveRef.current)
                onLeaveRef.current();
            setFalse();
        };
        var passedInElement = typeof dom === 'function' ? dom() : dom;
        // 如果 传入dom
        if (passedInElement) {
            passedInElement.addEventListener('mouseenter', onMouseEnter);
            passedInElement.addEventListener('mouseleave', onMouseLeave);
            return function () {
                passedInElement.removeEventListener('mouseenter', onMouseEnter);
                passedInElement.removeEventListener('mouseleave', onMouseLeave);
            };
        }
        var node = element.current;
        if (node) {
            node.addEventListener('mouseenter', onMouseEnter);
            node.addEventListener('mouseleave', onMouseLeave);
            return function () {
                node.removeEventListener('mouseenter', onMouseEnter);
                node.removeEventListener('mouseleave', onMouseLeave);
            };
        }
    }, [element.current, typeof dom === 'function' ? undefined : dom]);
    if (dom) {
        return [!!state];
    }
    return [!!state, element];
});

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

function isDocumentVisible() {
    if (typeof document !== 'undefined' && typeof document.visibilityState !== 'undefined') {
        return document.visibilityState !== 'hidden';
    }
    return true;
}
function isOnline() {
    if (typeof navigator.onLine !== 'undefined') {
        return navigator.onLine;
    }
    return true;
}

var cache = {};
var setCache = function (key, data) {
    if (cache[key]) {
        clearTimeout(cache[key].timer);
    }
    // 数据在不活跃 5min 后，删除掉
    var timer = setTimeout(function () {
        delete cache[key];
    }, 5 * 60 * 1000);
    cache[key] = {
        data: data,
        timer: timer
    };
};
var getCache = function (key) { var _a; return (_a = cache[key]) === null || _a === void 0 ? void 0 : _a.data; };

function limit(fn, timespan) {
    var pending = false;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (pending)
            return;
        pending = true;
        fn.apply(void 0, __spread(args));
        setTimeout(function () { pending = false; }, timespan);
    };
}

function usePersistFn(fn, dependencies) {
    if (dependencies === void 0) { dependencies = []; }
    var ref = useRef(function () {
        throw new Error('Cannot call an event handler while rendering.');
    });
    useEffect(function () {
        ref.current = fn;
    }, __spread([fn], dependencies));
    var persist = useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var refFn = ref.current;
        if (refFn) {
            return refFn.apply(void 0, __spread(args));
        }
    }, [ref]);
    if (typeof fn === 'function') {
        return persist;
    }
    return undefined;
}

var useUpdateEffect$1 = function (effect, deps) {
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

// from swr
var listeners = [];
function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
        var index = listeners.indexOf(listener);
        listeners.splice(index, 1);
    };
}
var eventsBinded = false;
if (typeof window !== 'undefined' && window.addEventListener && !eventsBinded) {
    var revalidate = function () {
        if (!isDocumentVisible() || !isOnline())
            return;
        for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i];
            listener();
        }
    };
    window.addEventListener('visibilitychange', revalidate, false);
    window.addEventListener('focus', revalidate, false);
    // only bind the events once
    eventsBinded = true;
}

// from swr
var listeners$1 = [];
function subscribe$1(listener) {
    listeners$1.push(listener);
    return function unsubscribe() {
        var index = listeners$1.indexOf(listener);
        listeners$1.splice(index, 1);
    };
}
var eventsBinded$1 = false;
if (typeof window !== 'undefined' && window.addEventListener && !eventsBinded$1) {
    var revalidate$1 = function () {
        if (!isDocumentVisible())
            return;
        for (var i = 0; i < listeners$1.length; i++) {
            var listener = listeners$1[i];
            listener();
        }
    };
    window.addEventListener('visibilitychange', revalidate$1, false);
    // only bind the events once
    eventsBinded$1 = true;
}

var usePrevious = (function (state, compare) {
    var prevRef = useRef();
    var curRef = useRef();
    var needUpdate = typeof compare === 'function' ? compare(curRef.current, state) : true;
    if (needUpdate) {
        prevRef.current = curRef.current;
        curRef.current = state;
    }
    return prevRef.current;
});

var DEFAULT_KEY = 'UMIJS_USE_API_DEFAULT_KEY';
var Fetch = /** @class */ (function () {
    function Fetch(service, config, subscribe$2, initState) {
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
        this.subscribe = subscribe$2;
        if (initState) {
            this.state = __assign(__assign({}, this.state), initState);
        }
        this.debounceRun = this.config.debounceInterval ? debounce(this._run, this.config.debounceInterval) : undefined;
        this.throttleRun = this.config.throttleInterval ? throttle(this._run, this.config.throttleInterval) : undefined;
        this.limitRefresh = limit(this.refresh.bind(this), this.config.focusTimespan);
        if (this.config.pollingInterval) {
            this.unsubscribe.push(subscribe$1(this.rePolling.bind(this)));
        }
        if (this.config.refreshOnWindowFocus) {
            this.unsubscribe.push(subscribe(this.limitRefresh.bind(this)));
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
function useAsync$1(service, options) {
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
    useUpdateEffect$1(function () {
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

function useLoadMore$1(service, options) {
    var _a = options.refreshDeps, refreshDeps = _a === void 0 ? [] : _a, ref = options.ref, isNoMore = options.isNoMore, _b = options.threshold, threshold = _b === void 0 ? 100 : _b, fetchKey = options.fetchKey, restOptions = __rest(options, ["refreshDeps", "ref", "isNoMore", "threshold", "fetchKey"]);
    var _c = __read(useState(false), 2), loadingMore = _c[0], setLoadingMore = _c[1];
    useEffect(function () {
        if (options.fetchKey) {
            console.warn("useRequest loadMore mode don't need fetchKey!");
        }
    }, []);
    var result = useAsync$1(service, __assign(__assign({}, restOptions), { fetchKey: function (d) { var _a, _b; return ((_b = (_a = d) === null || _a === void 0 ? void 0 : _a.list) === null || _b === void 0 ? void 0 : _b.length) || 0; }, onSuccess: function () {
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
    useUpdateEffect$1(function () {
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

function usePaginated(service, options) {
    var _a, _b;
    var paginated = options.paginated, _c = options.defaultPageSize, defaultPageSize = _c === void 0 ? 10 : _c, _d = options.refreshDeps, refreshDeps = _d === void 0 ? [] : _d, fetchKey = options.fetchKey, restOptions = __rest(options, ["paginated", "defaultPageSize", "refreshDeps", "fetchKey"]);
    useEffect(function () {
        if (fetchKey) {
            console.error('useRequest pagination\'s fetchKey will not work!');
        }
    }, []);
    var _e = useAsync$1(service, __assign({ defaultParams: [{
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
    useUpdateEffect$1(function () {
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

var ConfigContext = React__default.createContext({});
ConfigContext.displayName = 'UseAPIConfigContext';

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
                else {
                    console.error("service not found");
                    reject();
                }
            });
        };
    }
    if (loadMore) {
        return useLoadMore$1(promiseService, finalOptions);
    }
    if (paginated) {
        return usePaginated(promiseService, finalOptions);
    }
    return useAsync$1(promiseService, finalOptions);
}
var UseAPIProvider = ConfigContext.Provider;

function usePersistFn$1(fn) {
    var ref = useRef(function () {
        throw new Error('Cannot call function while rendering.');
    });
    ref.current = fn;
    var persistFn = useCallback((function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return ref.current.apply(ref, __spread(args));
    }), [ref]);
    return persistFn;
}

function useFormTable(service, options) {
    var form = options.form, _a = options.refreshDeps, refreshDeps = _a === void 0 ? [] : _a, manual = options.manual, _b = options.defaultType, defaultType = _b === void 0 ? 'simple' : _b, defaultParams = options.defaultParams, restOptions = __rest(options, ["form", "refreshDeps", "manual", "defaultType", "defaultParams"]);
    var result = useRequest(service, __assign(__assign({}, restOptions), { paginated: true, manual: true }));
    var params = result.params, run = result.run;
    var cacheFormTableData = params[2] || {};
    // 优先从缓存中读
    var _c = __read(useState(cacheFormTableData.type || defaultType), 2), type = _c[0], setType = _c[1];
    // 全量 form 数据，包括 simple 和 advance
    var _d = __read(useState(cacheFormTableData.allFormData || (defaultParams && defaultParams[1]) || {}), 2), allFormData = _d[0], setAllFormData = _d[1];
    // 获取当前展示的 form 字段值
    var getActivetFieldValues = useCallback(function () {
        if (!form) {
            return {};
        }
        // antd 3
        if (form.getFieldInstance) {
            var tempAllFiledsValue_1 = form.getFieldsValue();
            var filterFiledsValue_1 = {};
            Object.keys(tempAllFiledsValue_1).forEach(function (key) {
                if (form.getFieldInstance ? form.getFieldInstance(key) : true) {
                    filterFiledsValue_1[key] = tempAllFiledsValue_1[key];
                }
            });
            return filterFiledsValue_1;
        }
        // antd 4
        return form.getFieldsValue(null, function () { return true; });
    }, [form]);
    var formRef = useRef(form);
    formRef.current = form;
    /* 初始化，或改变了 searchType, 恢复表单数据 */
    useEffect(function () {
        if (!formRef.current) {
            return;
        }
        // antd 3
        if (formRef.current.getFieldInstance) {
            // antd 3 需要判断字段是否存在，否则会抛警告
            var filterFiledsValue_2 = {};
            Object.keys(allFormData).forEach(function (key) {
                if (formRef.current.getFieldInstance ? formRef.current.getFieldInstance(key) : true) {
                    filterFiledsValue_2[key] = allFormData[key];
                }
            });
            formRef.current.setFieldsValue(filterFiledsValue_2);
        }
        else {
            // antd 4
            formRef.current.setFieldsValue(allFormData);
        }
    }, [type]);
    // 首次加载，手动提交。为了拿到 form 的 initial values
    useEffect(function () {
        // 如果有缓存，则使用缓存，重新请求
        if (params.length > 0) {
            run.apply(void 0, __spread(params));
            return;
        }
        // 如果没有缓存，触发 submit
        if (!manual) {
            submit(defaultParams);
        }
    }, []);
    var changeType = useCallback(function () {
        var currentFormData = getActivetFieldValues();
        setAllFormData(__assign(__assign({}, allFormData), currentFormData));
        var targetType = type === 'simple' ? 'advance' : 'simple';
        setType(targetType);
    }, [type, allFormData, getActivetFieldValues]);
    var submit = useCallback(function (initParams) {
        setTimeout(function () {
            var activeFormData = getActivetFieldValues();
            // 记录全量数据
            var _allFormData = __assign(__assign({}, allFormData), activeFormData);
            setAllFormData(_allFormData);
            // has defaultParams
            if (initParams) {
                run(initParams[0], activeFormData, {
                    allFormData: _allFormData,
                    type: type
                });
                return;
            }
            run(__assign(__assign({ pageSize: options.defaultPageSize || 10 }, (params[0] || {})), { current: 1 }), activeFormData, {
                allFormData: _allFormData,
                type: type
            });
        });
    }, [getActivetFieldValues, run, params, allFormData, type]);
    var reset = useCallback(function () {
        if (form) {
            form.resetFields();
        }
        submit();
    }, [form, submit]);
    var resetPersistFn = usePersistFn$1(reset);
    // refreshDeps 变化，reset。
    useUpdateEffect(function () {
        if (!manual) {
            resetPersistFn();
        }
    }, __spread(refreshDeps));
    return __assign(__assign({}, result), { search: {
            submit: function () { submit(); },
            type: type,
            changeType: changeType,
            reset: reset,
        } });
}

function useSet(initialValue) {
    var initialSet = useMemo(function () { return (initialValue === undefined ? new Set() : new Set(initialValue)); }, [initialValue]);
    var _a = __read(useState(initialSet), 2), set = _a[0], setSet = _a[1];
    var stableActions = useMemo(function () { return ({
        add: function (key) { return setSet(function (prevSet) { return new Set(__spread(Array.from(prevSet), [key])); }); },
        remove: function (key) { return setSet(function (prevSet) { return new Set(Array.from(prevSet).filter(function (i) { return i !== key; })); }); },
        reset: function () { return setSet(initialSet); },
    }); }, [setSet]);
    var utils = __assign({ has: useCallback(function (key) { return set.has(key); }, [set]) }, stableActions);
    return [set, utils];
}

function useMap(initialValue) {
    var initialMap = useMemo(function () { return (initialValue === undefined ? new Map() : new Map(initialValue)); }, [initialValue]);
    var _a = __read(useState(initialMap), 2), map = _a[0], set = _a[1];
    var stableActions = useMemo(function () { return ({
        set: function (key, entry) {
            map.set(key, entry);
            set(new Map(__spread(map)));
        },
        setAll: function (newMap) {
            set(new Map(newMap));
        },
        remove: function (key) {
            map.delete(key);
            set(new Map(__spread(map)));
        },
        reset: function () { return set(initialMap); },
    }); }, [map, set]);
    var utils = __assign({ get: useCallback(function (key) { return map.get(key); }, [map]) }, stableActions);
    return [map, utils];
}

function useCreation(factory, deps) {
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

var useMount = function (fn) {
    // 持久化函数
    var fnPersist = usePersistFn$1(fn);
    useEffect(function () {
        if (fnPersist && typeof fnPersist === 'function') {
            fnPersist();
        }
    }, []);
};

var initRect = {
    top: NaN,
    left: NaN,
    bottom: NaN,
    right: NaN,
    height: NaN,
    width: NaN,
};
var initState$1 = __assign({ text: '' }, initRect);
function getRectFromSelection(selection) {
    if (!selection) {
        return initRect;
    }
    if (selection.rangeCount < 1) {
        return initRect;
    }
    var range = selection.getRangeAt(0);
    var _a = range.getBoundingClientRect(), height = _a.height, width = _a.width, top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
    return {
        height: height,
        width: width,
        top: top,
        left: left,
        right: right,
        bottom: bottom,
    };
}
function useTextSelection() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var hasPassedInArg = args.length === 1;
    var arg = useRef(args[0]);
    var ref = useRef();
    var _a = __read(useState(initState$1), 2), state = _a[0], setState = _a[1];
    var stateRef = useRef(state);
    stateRef.current = state;
    useEffect(function () {
        // 获取 target 需要放在 useEffect 里，否则存在组件未加载好的情况而导致元素获取不到
        var passedInArg = typeof arg.current === 'function' ? arg.current() : arg.current;
        var target = hasPassedInArg ? passedInArg : ref.current;
        if (!target) {
            return function () { };
        }
        var mouseupHandler = function () {
            var selObj = null;
            var text = '';
            var rect = initRect;
            if (!window.getSelection)
                return;
            selObj = window.getSelection();
            text = selObj ? selObj.toString() : '';
            if (text) {
                rect = getRectFromSelection(selObj);
                setState(__assign(__assign(__assign({}, state), { text: text }), rect));
            }
        };
        // 任意点击都需要清空之前的 range
        var mousedownHandler = function () {
            if (!window.getSelection)
                return;
            if (stateRef.current.text) {
                setState(__assign({}, initState$1));
            }
            var selObj = window.getSelection();
            if (!selObj)
                return;
            selObj.removeAllRanges();
        };
        target.addEventListener('mouseup', mouseupHandler);
        document.addEventListener('mousedown', mousedownHandler);
        return function () {
            target.removeEventListener('mouseup', mouseupHandler);
            document.removeEventListener('mousedown', mousedownHandler);
        };
    }, [ref.current, typeof arg.current === 'function' ? undefined : arg.current]);
    if (hasPassedInArg) {
        return [state];
    }
    return [state, ref];
}

function useCounter(initialValue, options) {
    if (initialValue === void 0) { initialValue = 0; }
    if (options === void 0) { options = {}; }
    var min = options.min, max = options.max;
    // get init value
    var init = useCreation(function () {
        if (typeof max === 'number') {
            return Math.min(max, initialValue);
        }
        if (typeof min === 'number') {
            return Math.max(min, initialValue);
        }
        return initialValue;
    }, []);
    var _a = __read(useState(init), 2), current = _a[0], setCurrent = _a[1];
    var actions = useMemo(function () {
        var setValue = function (value) {
            setCurrent(function (c) {
                // get target value
                var target = typeof value === 'number' ? value : value(c);
                if (typeof max === 'number') {
                    target = Math.min(max, target);
                }
                if (typeof min === 'number') {
                    target = Math.max(min, target);
                }
                return target;
            });
        };
        var inc = function (delta) {
            if (delta === void 0) { delta = 1; }
            setValue(function (c) { return c + delta; });
        };
        var dec = function (delta) {
            if (delta === void 0) { delta = 1; }
            setValue(function (c) { return c - delta; });
        };
        var set = function (value) {
            setValue(value);
        };
        var reset = function () {
            setValue(init);
        };
        return { inc: inc, dec: dec, set: set, reset: reset };
    }, []);
    return [current, actions];
}

var useUpdate = function () {
    var _a = __read(useState(0), 2), setState = _a[1];
    return useCallback(function () { return setState(function (num) { return num + 1; }); }, []);
};

var index$4 = (function (initialValue, transformer) {
    var _a = __read(useState(initialValue), 2), value = _a[0], setValue = _a[1];
    var reset = useCallback(function () { return setValue(initialValue); }, [setValue]);
    var transformerRef = useRef(transformer);
    transformerRef.current = transformer;
    var onChange = useCallback(function (e) {
        var _value = e.target.value;
        if (typeof transformerRef.current === 'function') {
            return setValue(transformerRef.current(_value));
        }
        // no transformer => U and T should be the same
        return setValue(_value);
    }, [setValue]);
    return [{
            value: value,
            onChange: onChange,
        }, reset];
});

var dumpIndex = function (step, arr) {
    var index = step > 0
        ? step - 1 // move forward
        : arr.length + step; // move backward
    if (index >= arr.length - 1) {
        index = arr.length - 1;
    }
    if (index < 0) {
        index = 0;
    }
    return index;
};
var split = function (step, targetArr) {
    var index = dumpIndex(step, targetArr);
    return {
        _current: targetArr[index],
        _before: targetArr.slice(0, index),
        _after: targetArr.slice(index + 1)
    };
};
function useHistoryTravel(initialValue) {
    var _a = __read(useState({
        present: initialValue,
        past: [],
        future: []
    }), 2), history = _a[0], setHistory = _a[1];
    var present = history.present, past = history.past, future = history.future;
    var updateValue = useCallback(function (val) {
        setHistory({
            present: val,
            future: [],
            past: __spread(past, [present])
        });
    }, [history, setHistory]);
    var _forward = useCallback(function (step) {
        if (step === void 0) { step = 1; }
        if (future.length === 0) {
            return;
        }
        var _a = split(step, future), _before = _a._before, _current = _a._current, _after = _a._after;
        setHistory({
            past: __spread(past, [present], _before),
            present: _current,
            future: _after
        });
    }, [history, setHistory]);
    var _backward = useCallback(function (step) {
        if (step === void 0) { step = -1; }
        if (past.length === 0) {
            return;
        }
        var _a = split(step, past), _before = _a._before, _current = _a._current, _after = _a._after;
        setHistory({
            past: _before,
            present: _current,
            future: __spread(_after, [present], future)
        });
    }, [history, setHistory]);
    var go = useCallback(function (step) {
        if (step === 0) {
            return;
        }
        if (step > 0) {
            return _forward(step);
        }
        _backward(step);
    }, [_backward, _forward]);
    return {
        value: present,
        setValue: updateValue,
        backLength: past.length,
        forwardLength: future.length,
        go: go,
        back: useCallback(function () {
            go(-1);
        }, [go]),
        forward: useCallback(function () {
            go(1);
        }, [go])
    };
}

var useControlledValue = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.warn('useControlledValue is deprecated and will be removed in the next major version. Please use useControllableValue instead.');
    return useControllableValue.apply(void 0, __spread(args));
};

export { configResponsive, useAsync, useBoolean, useClickAway, useControllableValue, useControlledValue, useCounter, useCreation, useDebounce, useDebounceFn, useDocumentVisibility, index as useDynamicList, useEventEmitter, useEventListener, index$4 as useEventTarget, useFormTable, useHistoryTravel, index$3 as useHover, useInViewport, useKeyPress, useLoadMore, useLocalStorageState, useMap, useMount, index$2 as useMouse, usePagination, usePersistFn$1 as usePersistFn, index$1 as usePrevious, useResponsive, useScroll, useSearch, useSelections, useSessionStorageState, useSet, useTextSelection, useThrottle, useThrottleFn, useToggle, useUnmount, useUpdate, useUpdateEffect, useUpdateLayoutEffect };
