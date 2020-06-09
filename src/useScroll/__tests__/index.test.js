import { renderHook } from '@testing-library/react-hooks';
import useScroll from '../index';
describe('useScroll', function () {
    it('should be defined', function () {
        expect(useScroll).toBeDefined();
    });
    it('document body', function () {
        var hook = renderHook(function () { return useScroll(function () { return document.body; }); });
        expect(hook.result.current[0].left).toBe(0);
        expect(hook.result.current[0].top).toBe(0);
    });
});
//# sourceMappingURL=index.test.js.map