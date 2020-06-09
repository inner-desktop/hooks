import { __read } from "tslib";
import { renderHook, act } from '@testing-library/react-hooks';
import useLocalStorageState from '../index';
describe('useLocalStorageState', function () {
    it('should be defined', function () {
        expect(useLocalStorageState).toBeDefined();
    });
    var setUp = function (key, value) {
        return renderHook(function () {
            var _a = __read(useLocalStorageState(key, value), 2), state = _a[0], setState = _a[1];
            return {
                state: state,
                setState: setState,
            };
        });
    };
    it('getKey should work', function () {
        var LOCAL_STORAGE_KEY = 'test-key';
        var hook = setUp(LOCAL_STORAGE_KEY, 'A');
        expect(hook.result.current.state).toEqual('A');
        act(function () {
            hook.result.current.setState('B');
        });
        expect(hook.result.current.state).toEqual('B');
        var anotherHook = setUp(LOCAL_STORAGE_KEY, 'A');
        expect(anotherHook.result.current.state).toEqual('B');
        act(function () {
            anotherHook.result.current.setState('C');
        });
        expect(anotherHook.result.current.state).toEqual('C');
        expect(hook.result.current.state).toEqual('B');
    });
    it('should support object', function () {
        var LOCAL_STORAGE_KEY = 'test-object-key';
        var hook = setUp(LOCAL_STORAGE_KEY, {
            name: 'A',
        });
        expect(hook.result.current.state).toEqual({ name: 'A' });
        act(function () {
            hook.result.current.setState({ name: 'B' });
        });
        expect(hook.result.current.state).toEqual({ name: 'B' });
        var anotherHook = setUp(LOCAL_STORAGE_KEY, {
            name: 'C',
        });
        expect(anotherHook.result.current.state).toEqual({ name: 'B' });
        act(function () {
            anotherHook.result.current.setState({
                name: 'C',
            });
        });
        expect(anotherHook.result.current.state).toEqual({ name: 'C' });
        expect(hook.result.current.state).toEqual({ name: 'B' });
    });
    it('should support number', function () {
        var LOCAL_STORAGE_KEY = 'test-number-key';
        var hook = setUp(LOCAL_STORAGE_KEY, 1);
        expect(hook.result.current.state).toEqual(1);
        act(function () {
            hook.result.current.setState(2);
        });
        expect(hook.result.current.state).toEqual(2);
        var anotherHook = setUp(LOCAL_STORAGE_KEY, 3);
        expect(anotherHook.result.current.state).toEqual(2);
        act(function () {
            anotherHook.result.current.setState(3);
        });
        expect(anotherHook.result.current.state).toEqual(3);
        expect(hook.result.current.state).toEqual(2);
    });
    it('should support boolean', function () {
        var LOCAL_STORAGE_KEY = 'test-boolean-key';
        var hook = setUp(LOCAL_STORAGE_KEY, true);
        expect(hook.result.current.state).toEqual(true);
        act(function () {
            hook.result.current.setState(false);
        });
        expect(hook.result.current.state).toEqual(false);
        var anotherHook = setUp(LOCAL_STORAGE_KEY, true);
        expect(anotherHook.result.current.state).toEqual(false);
        act(function () {
            anotherHook.result.current.setState(true);
        });
        expect(anotherHook.result.current.state).toEqual(true);
        expect(hook.result.current.state).toEqual(false);
    });
    it('should support null', function () {
        var LOCAL_STORAGE_KEY = 'test-boolean-key-with-null';
        var hook = setUp(LOCAL_STORAGE_KEY, false);
        expect(hook.result.current.state).toEqual(false);
        act(function () {
            hook.result.current.setState(null);
        });
        expect(hook.result.current.state).toEqual(null);
        var anotherHook = setUp(LOCAL_STORAGE_KEY, false);
        expect(anotherHook.result.current.state).toEqual(null);
    });
    it('should support function updater', function () {
        var LOCAL_STORAGE_KEY = 'test-func-updater';
        var hook = setUp(LOCAL_STORAGE_KEY, 'hello world');
        expect(hook.result.current.state).toEqual('hello world');
        act(function () {
            hook.result.current.setState(function (state) { return state + ", zhangsan"; });
        });
        expect(hook.result.current.state).toEqual('hello world, zhangsan');
    });
});
//# sourceMappingURL=index.test.js.map