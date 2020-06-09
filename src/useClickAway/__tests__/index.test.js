import { __awaiter, __generator } from "tslib";
import { renderHook } from '@testing-library/react-hooks';
import useClickAway from '../index';
describe('useClickAway', function () {
    it('should be defined', function () {
        expect(useClickAway).toBeDefined();
    });
    var container;
    var container1;
    beforeEach(function () {
        container = document.createElement('div');
        container1 = document.createElement('div');
        container1.setAttribute('id', 'ele');
        document.body.appendChild(container);
        document.body.appendChild(container1);
    });
    afterEach(function () {
        document.body.removeChild(container);
        document.body.removeChild(container1);
    });
    it('test on dom optional', function () { return __awaiter(void 0, void 0, void 0, function () {
        var state, _a, rerender, unmount;
        return __generator(this, function (_b) {
            state = 0;
            _a = renderHook(function (dom) {
                return useClickAway(function () {
                    state++;
                }, dom);
            }), rerender = _a.rerender, unmount = _a.unmount;
            document.body.click();
            expect(state).toEqual(0);
            rerender(function () { return container; });
            container.click();
            expect(state).toEqual(0);
            document.body.click();
            expect(state).toEqual(1);
            rerender(container1);
            container1.click();
            expect(state).toEqual(1);
            document.body.click();
            expect(state).toEqual(2);
            unmount();
            document.body.click();
            expect(state).toEqual(2);
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=index.test.js.map