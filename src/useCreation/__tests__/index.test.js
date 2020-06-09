import { __read } from "tslib";
import { renderHook, act } from '@testing-library/react-hooks';
import { useState } from 'react';
import useCreation from '../index';
describe('useCreation', function () {
    it('should be defined', function () {
        expect(useCreation).toBeDefined();
    });
    var Foo = /** @class */ (function () {
        function Foo() {
            this.data = Math.random();
        }
        return Foo;
    }());
    var setUp = function () {
        return renderHook(function () {
            var _a = __read(useState(0), 2), count = _a[0], setCount = _a[1];
            var _b = __read(useState({}), 2), flag = _b[0], setFlag = _b[1];
            var foo = useCreation(function () { return new Foo(); }, [count]);
            return {
                foo: foo,
                setCount: setCount,
                count: count,
                setFlag: setFlag,
            };
        });
    };
    it('should work', function () {
        var hook = setUp();
        var foo = hook.result.current.foo;
        act(function () {
            hook.result.current.setFlag({});
        });
        expect(hook.result.current.foo).toBe(foo);
        act(function () {
            hook.result.current.setCount(1);
        });
        expect(hook.result.current.foo).not.toBe(foo);
    });
});
//# sourceMappingURL=index.test.js.map