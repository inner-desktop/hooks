import { __awaiter, __generator } from "tslib";
import { renderHook, act } from '@testing-library/react-hooks';
import useKeyPress from '../index';
describe('useKeyPress', function () {
    it('should be defined', function () {
        expect(useKeyPress).toBeDefined();
    });
    it('test on mounted', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, rerender, unmount;
        return __generator(this, function (_b) {
            _a = renderHook(function (props) { return useKeyPress(props.keyFilter, props.eventHandler, props.events); }, {
                initialProps: {
                    keyFilter: 'a',
                    eventHandler: function (event) { },
                    events: ['keydown'],
                },
            }), rerender = _a.rerender, unmount = _a.unmount;
            return [2 /*return*/];
        });
    }); });
    it('test keyCode is undefined', function () { return __awaiter(void 0, void 0, void 0, function () {
        var msg;
        return __generator(this, function (_a) {
            msg = '';
            renderHook(function () { return useKeyPress('meta.e', function (e) {
                msg = 'keypress meta.e';
            }); });
            act(function () {
                var ev = document.createEvent('Events');
                ev.initEvent('keydown', true, true);
                document.dispatchEvent(ev);
            });
            expect(msg).toEqual('');
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=index.test.js.map