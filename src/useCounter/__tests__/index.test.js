import { __read } from "tslib";
import { act, renderHook } from '@testing-library/react-hooks';
import useCounter from '../index';
var setUp = function (init, options) { return renderHook(function () { return useCounter(init, options); }); };
it('should init counter', function () {
    var result = setUp(100).result;
    var _a = __read(result.current, 1), current = _a[0];
    expect(current).toEqual(100);
});
it('should max, min, actions work', function () {
    var result = setUp(100, { max: 10, min: 1 }).result;
    var _a = __read(result.current, 2), current = _a[0], _b = _a[1], inc = _b.inc, dec = _b.dec, reset = _b.reset, set = _b.set;
    expect(current).toEqual(10);
    act(function () {
        inc(1);
    });
    expect(result.current[0]).toEqual(10);
    act(function () {
        dec(100);
    });
    expect(result.current[0]).toEqual(1);
    act(function () {
        inc();
    });
    expect(result.current[0]).toEqual(2);
    act(function () {
        reset();
    });
    expect(result.current[0]).toEqual(10);
    act(function () {
        set(-1000);
    });
    expect(result.current[0]).toEqual(1);
    act(function () {
        set(function (c) { return c + 2; });
    });
    expect(result.current[0]).toEqual(3);
    act(function () {
        inc();
        inc();
        inc();
    });
    expect(result.current[0]).toEqual(6);
});
//# sourceMappingURL=index.test.js.map