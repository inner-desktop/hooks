import { __values } from "tslib";
import { useEffect, useCallback, useRef } from 'react';
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
export default useKeyPress;
//# sourceMappingURL=index.js.map