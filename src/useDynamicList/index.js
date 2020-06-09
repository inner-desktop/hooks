import { __read, __spread } from "tslib";
import { useState, useRef, useCallback } from 'react';
export default (function (initialValue) {
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
//# sourceMappingURL=index.js.map