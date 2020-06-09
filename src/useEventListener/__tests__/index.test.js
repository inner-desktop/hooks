import { __awaiter, __generator } from "tslib";
import { renderHook } from '@testing-library/react-hooks';
import useEventListener from '../index';
describe('useEventListener', function () {
    it('should be defined', function () {
        expect(useEventListener).toBeDefined();
    });
    var container;
    beforeEach(function () {
        container = document.createElement('div');
        document.body.appendChild(container);
    });
    afterEach(function () {
        document.body.removeChild(container);
    });
    it('test on click listener', function () { return __awaiter(void 0, void 0, void 0, function () {
        var state, onClick, _a, rerender, unmount;
        return __generator(this, function (_b) {
            state = 0;
            onClick = function () {
                state++;
            };
            _a = renderHook(function () {
                return useEventListener('click', onClick, { dom: container });
            }), rerender = _a.rerender, unmount = _a.unmount;
            document.body.click();
            expect(state).toEqual(0);
            rerender(function () { return container; });
            container.click();
            expect(state).toEqual(1);
            unmount();
            document.body.click();
            expect(state).toEqual(1);
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=index.test.js.map