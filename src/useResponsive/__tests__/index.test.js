import { renderHook, act } from '@testing-library/react-hooks';
import { useResponsive } from '..';
describe('useResponsive', function () {
    function changeWidth(width) {
        act(function () {
            global.innerWidth = width;
            global.dispatchEvent(new Event('resize'));
        });
    }
    changeWidth(1024);
    var hook = renderHook(function () { return useResponsive(); });
    it('should response to window width changes', function () {
        expect(hook.result.current).toMatchSnapshot();
        changeWidth(300);
        expect(hook.result.current).toMatchSnapshot();
        changeWidth(700);
        expect(hook.result.current).toMatchSnapshot();
        changeWidth(800);
        expect(hook.result.current).toMatchSnapshot();
        changeWidth(1000);
        expect(hook.result.current).toMatchSnapshot();
        changeWidth(1200);
        expect(hook.result.current).toMatchSnapshot();
    });
});
//# sourceMappingURL=index.test.js.map