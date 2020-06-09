import { __read } from "tslib";
/* eslint-disable no-shadow */
import { useState, useMemo } from 'react';
export default function useSelections(items, defaultSelected) {
    if (defaultSelected === void 0) { defaultSelected = []; }
    var _a = __read(useState(defaultSelected), 2), selected = _a[0], setSelected = _a[1];
    var _b = useMemo(function () {
        var selectedSet = new Set(selected);
        var isSelected = function (item) { return selectedSet.has(item); };
        var select = function (item) {
            selectedSet.add(item);
            return setSelected(Array.from(selectedSet));
        };
        var unSelect = function (item) {
            selectedSet.delete(item);
            return setSelected(Array.from(selectedSet));
        };
        var toggle = function (item) {
            if (isSelected(item)) {
                unSelect(item);
            }
            else {
                select(item);
            }
        };
        return { selectedSet: selectedSet, isSelected: isSelected, select: select, unSelect: unSelect, toggle: toggle };
    }, [selected]), selectedSet = _b.selectedSet, isSelected = _b.isSelected, select = _b.select, unSelect = _b.unSelect, toggle = _b.toggle;
    var _c = useMemo(function () {
        var selectAll = function () {
            items.forEach(function (o) {
                selectedSet.add(o);
            });
            setSelected(Array.from(selectedSet));
        };
        var unSelectAll = function () {
            items.forEach(function (o) {
                selectedSet.delete(o);
            });
            setSelected(Array.from(selectedSet));
        };
        var noneSelected = items.every(function (o) { return !selectedSet.has(o); });
        var allSelected = items.every(function (o) { return selectedSet.has(o); }) && !noneSelected;
        var partiallySelected = !noneSelected && !allSelected;
        var toggleAll = function () { return (allSelected ? unSelectAll() : selectAll()); };
        return { selectAll: selectAll, unSelectAll: unSelectAll, noneSelected: noneSelected, allSelected: allSelected, partiallySelected: partiallySelected, toggleAll: toggleAll };
    }, [selectedSet, items]), selectAll = _c.selectAll, unSelectAll = _c.unSelectAll, noneSelected = _c.noneSelected, allSelected = _c.allSelected, partiallySelected = _c.partiallySelected, toggleAll = _c.toggleAll;
    return {
        selected: selected,
        isSelected: isSelected,
        select: select,
        unSelect: unSelect,
        toggle: toggle,
        selectAll: selectAll,
        unSelectAll: unSelectAll,
        toggleAll: toggleAll,
        allSelected: allSelected,
        noneSelected: noneSelected,
        partiallySelected: partiallySelected,
        setSelected: setSelected,
    };
}
//# sourceMappingURL=index.js.map