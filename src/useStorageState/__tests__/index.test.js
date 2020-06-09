import { __read } from "tslib";
import { act, renderHook } from '@testing-library/react-hooks';
import useStorageState from '../index';
var TestStorage = /** @class */ (function () {
    function TestStorage() {
        this.length = 0;
        this._values = new Map();
    }
    TestStorage.prototype.clear = function () {
        this._values.clear();
        this.length = 0;
    };
    TestStorage.prototype.getItem = function (key) {
        return this._values.get(key);
    };
    TestStorage.prototype.key = function (index) {
        if (index >= this._values.size) {
            return null;
        }
        return Array.from(this._values.keys())[index];
    };
    TestStorage.prototype.removeItem = function (key) {
        if (this._values.delete(key)) {
            this.length -= 1;
        }
    };
    TestStorage.prototype.setItem = function (key, value) {
        if (!this._values.has(key)) {
            this.length += 1;
        }
        this._values.set(key, value);
    };
    return TestStorage;
}());
describe('useStorageState', function () {
    var setUp = function (props) {
        var storage = new TestStorage();
        return renderHook(function (_a) {
            var key = _a.key, defaultValue = _a.defaultValue;
            var _b = __read(useStorageState(storage, key, defaultValue), 2), state = _b[0], setState = _b[1];
            return { state: state, setState: setState };
        }, {
            initialProps: props
        });
    };
    it('should be defined', function () {
        expect(useStorageState);
    });
    it('should get defaultValue for a given key', function () {
        var hook = setUp({ key: 'key1', defaultValue: 'value1' });
        expect(hook.result.current.state).toEqual('value1');
        hook.rerender({ key: 'key2', defaultValue: 'value2' });
        expect(hook.result.current.state).toEqual('value2');
    });
    it('should get default and set value for a given key', function () {
        var hook = setUp({ key: 'key', defaultValue: 'defaultValue' });
        expect(hook.result.current.state).toEqual('defaultValue');
        act(function () {
            hook.result.current.setState('setValue');
        });
        expect(hook.result.current.state).toEqual('setValue');
        hook.rerender({ key: 'key' });
        expect(hook.result.current.state).toEqual('setValue');
    });
    it('should remove value for a given key', function () {
        var hook = setUp({ key: 'key' });
        act(function () {
            hook.result.current.setState('value');
        });
        expect(hook.result.current.state).toEqual('value');
        act(function () {
            hook.result.current.setState(undefined);
        });
        expect(hook.result.current.state).toBeUndefined();
    });
});
//# sourceMappingURL=index.test.js.map