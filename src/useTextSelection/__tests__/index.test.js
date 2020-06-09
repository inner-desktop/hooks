import { __awaiter, __generator } from "tslib";
import { renderHook, act } from '@testing-library/react-hooks';
import useTextSelection from '../index';
// test about Resize Observer see https://github.com/que-etc/resize-observer-polyfill/tree/master/tests
describe('useTextSelection', function () {
    function moveMouse(x, y) {
        act(function () {
            document.dispatchEvent(new MouseEvent('mousemove', {
                clientX: x,
                clientY: y,
                screenX: x,
                screenY: y,
            }));
        });
    }
    function downMouse(x, y) {
        act(function () {
            document.dispatchEvent(new MouseEvent('mousedown', {
                clientX: x,
                clientY: y,
                screenX: x,
                screenY: y,
            }));
        });
    }
    function upMouse(x, y) {
        act(function () {
            document.dispatchEvent(new MouseEvent('mouseup', {
                clientX: x,
                clientY: y,
                screenX: x,
                screenY: y,
            }));
        });
    }
    function initGetSelection(_a) {
        var _b = _a.top, top = _b === void 0 ? 0 : _b, _c = _a.left, left = _c === void 0 ? 0 : _c, _d = _a.height, height = _d === void 0 ? 0 : _d, _e = _a.width, width = _e === void 0 ? 0 : _e, _f = _a.text, text = _f === void 0 ? 'hello world!' : _f;
        window.getSelection = function () {
            return {
                toString: function () {
                    return text;
                },
                rangeCount: text.length,
                removeAllRanges: function () { },
                getRangeAt: function (index) {
                    return {
                        getBoundingClientRect: function () {
                            return {
                                top: top,
                                left: left,
                                bottom: top + height,
                                right: left + width,
                                height: height,
                                width: width,
                            };
                        }
                    };
                }
            };
        };
    }
    it('should be defined', function () {
        expect(useTextSelection).toBeDefined();
    });
    it('on textSelection', function () { return __awaiter(void 0, void 0, void 0, function () {
        var hook;
        return __generator(this, function (_a) {
            initGetSelection({ left: 10, top: 10, height: 100, width: 100, text: 'on textSelection' });
            hook = renderHook(function () { return useTextSelection(document); });
            expect(hook.result.current[0].text).toBe('');
            expect(hook.result.current[0].left).toBe(NaN);
            expect(hook.result.current[0].right).toBe(NaN);
            expect(hook.result.current[0].top).toBe(NaN);
            expect(hook.result.current[0].bottom).toBe(NaN);
            expect(hook.result.current[0].height).toBe(NaN);
            expect(hook.result.current[0].width).toBe(NaN);
            downMouse(0, 0);
            upMouse(100, 100);
            expect(hook.result.current[0].left).toBe(10);
            expect(hook.result.current[0].text).toBe('on textSelection');
            hook.unmount();
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=index.test.js.map