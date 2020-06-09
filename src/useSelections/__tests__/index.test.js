import { __awaiter, __generator, __read, __spread } from "tslib";
import { act, renderHook } from '@testing-library/react-hooks';
import { useState } from 'react';
import useSelections from '../index';
/* 暂时关闭 act 警告  见：https://github.com/testing-library/react-testing-library/issues/281#issuecomment-480349256 */
var originalError = console.error;
beforeAll(function () {
    console.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (/Warning.*not wrapped in act/.test(args[0])) {
            return;
        }
        originalError.call.apply(originalError, __spread([console], args));
    };
});
afterAll(function () {
    console.error = originalError;
});
var data = [1, 2, 3];
describe('useSelections', function () {
    it('should be defined', function () {
        expect(useSelections).toBeDefined();
    });
    function useTestUseSelections() {
        var _a = __read(useState(data), 2), items = _a[0], setItems = _a[1];
        var useSelectionsResult = useSelections(items, [1]);
        return [useSelectionsResult, setItems];
    }
    var setUp = function () { return renderHook(function () { return useTestUseSelections(); }); };
    var hookUtils = function (hook) {
        var current = hook.result.current;
        return {
            seleected: current[0].selected,
            helper: current[0],
            setItems: current[1],
        };
    };
    describe('test helper ', function () {
        var hook = setUp();
        it('defaultSelected should work correct', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                expect(hookUtils(hook).seleected).toEqual([1]);
                expect(hookUtils(hook).helper.isSelected(1)).toEqual(true);
                return [2 /*return*/];
            });
        }); });
        it('select and unSelect should work correct', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                act(function () {
                    hookUtils(hook).helper.unSelect(1);
                });
                expect(hookUtils(hook).seleected).toEqual([]);
                expect(hookUtils(hook).helper.isSelected(1)).toEqual(false);
                expect(hookUtils(hook).helper.allSelected).toEqual(false);
                act(function () {
                    hookUtils(hook).helper.select(1);
                });
                expect(hookUtils(hook).seleected).toEqual([1]);
                expect(hookUtils(hook).helper.isSelected(1)).toEqual(true);
                expect(hookUtils(hook).helper.allSelected).toEqual(false);
                act(function () {
                    hookUtils(hook).helper.unSelect(1);
                });
                return [2 /*return*/];
            });
        }); });
        it('toggle should work correct', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                act(function () {
                    hookUtils(hook).helper.toggle(1);
                });
                expect(hookUtils(hook).seleected).toEqual([1]);
                expect(hookUtils(hook).helper.isSelected(1)).toEqual(true);
                expect(hookUtils(hook).helper.allSelected).toEqual(false);
                act(function () {
                    hookUtils(hook).helper.toggle(1);
                });
                expect(hookUtils(hook).seleected).toEqual([]);
                expect(hookUtils(hook).helper.isSelected(1)).toEqual(false);
                expect(hookUtils(hook).helper.allSelected).toEqual(false);
                return [2 /*return*/];
            });
        }); });
        it('selectAll and unSelectAll should work correct', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                expect(hookUtils(hook).helper.noneSelected).toEqual(true);
                act(function () {
                    hookUtils(hook).helper.selectAll();
                });
                expect(hookUtils(hook).seleected).toEqual([1, 2, 3]);
                expect(hookUtils(hook).helper.allSelected).toEqual(true);
                expect(hookUtils(hook).helper.noneSelected).toEqual(false);
                expect(hookUtils(hook).helper.partiallySelected).toEqual(false);
                act(function () {
                    hookUtils(hook).helper.unSelectAll();
                });
                expect(hookUtils(hook).seleected).toEqual([]);
                expect(hookUtils(hook).helper.allSelected).toEqual(false);
                expect(hookUtils(hook).helper.noneSelected).toEqual(true);
                expect(hookUtils(hook).helper.partiallySelected).toEqual(false);
                return [2 /*return*/];
            });
        }); });
        it('toggleAll should work correct', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                expect(hookUtils(hook).helper.noneSelected).toEqual(true);
                act(function () {
                    hookUtils(hook).helper.toggleAll();
                });
                expect(hookUtils(hook).seleected).toEqual([1, 2, 3]);
                expect(hookUtils(hook).helper.allSelected).toEqual(true);
                expect(hookUtils(hook).helper.noneSelected).toEqual(false);
                expect(hookUtils(hook).helper.partiallySelected).toEqual(false);
                act(function () {
                    hookUtils(hook).helper.toggleAll();
                });
                expect(hookUtils(hook).seleected).toEqual([]);
                expect(hookUtils(hook).helper.allSelected).toEqual(false);
                expect(hookUtils(hook).helper.noneSelected).toEqual(true);
                expect(hookUtils(hook).helper.partiallySelected).toEqual(false);
                return [2 /*return*/];
            });
        }); });
        it('setSelected should work correct', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                expect(hookUtils(hook).helper.noneSelected).toEqual(true);
                act(function () {
                    hookUtils(hook).helper.setSelected([1]);
                });
                expect(hookUtils(hook).seleected).toEqual([1]);
                expect(hookUtils(hook).helper.isSelected(1)).toEqual(true);
                expect(hookUtils(hook).helper.noneSelected).toEqual(false);
                expect(hookUtils(hook).helper.allSelected).toEqual(false);
                expect(hookUtils(hook).helper.partiallySelected).toEqual(true);
                act(function () {
                    hookUtils(hook).helper.setSelected([]);
                });
                expect(hookUtils(hook).seleected).toEqual([]);
                expect(hookUtils(hook).helper.isSelected(1)).toEqual(false);
                expect(hookUtils(hook).helper.noneSelected).toEqual(true);
                expect(hookUtils(hook).helper.allSelected).toEqual(false);
                expect(hookUtils(hook).helper.partiallySelected).toEqual(false);
                act(function () {
                    hookUtils(hook).helper.setSelected([1, 2, 3]);
                });
                expect(hookUtils(hook).seleected).toEqual([1, 2, 3]);
                expect(hookUtils(hook).helper.isSelected(1)).toEqual(true);
                expect(hookUtils(hook).helper.noneSelected).toEqual(false);
                expect(hookUtils(hook).helper.allSelected).toEqual(true);
                expect(hookUtils(hook).helper.partiallySelected).toEqual(false);
                return [2 /*return*/];
            });
        }); });
    });
});
//# sourceMappingURL=index.test.js.map