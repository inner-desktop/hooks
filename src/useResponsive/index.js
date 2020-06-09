import { __read, __values } from "tslib";
import { useEffect, useState } from 'react';
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
export function configResponsive(config) {
    responsiveConfig = config;
    if (info)
        calculate();
}
export function useResponsive() {
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
//# sourceMappingURL=index.js.map