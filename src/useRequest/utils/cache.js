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
export { getCache, setCache };
//# sourceMappingURL=cache.js.map