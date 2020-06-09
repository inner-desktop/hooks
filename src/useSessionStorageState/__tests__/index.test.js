import { __read } from "tslib";
import { renderHook, act } from '@testing-library/react-hooks';
import useSessionStorageState from '../index';
describe('useSessionStorageState', function () {
    it('should be defined', function () {
        expect(useSessionStorageState).toBeDefined();
    });
    var setUp = function (key, value) {
        return renderHook(function () {
            var _a = __read(useSessionStorageState(key, value), 2), state = _a[0], setState = _a[1];
            return {
                state: state,
                setState: setState,
            };
        });
    };
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