import { renderHook, act } from '@testing-library/react-hooks';
import useUpdateLayoutEffect from '../index';

describe('useUpdateLayoutEffect', () => {
  it('should be defined', () => {
    expect(useUpdateLayoutEffect).toBeDefined();
  });
  it('test on mounted', async () => {
    let mountedState = 1;
    const hook = renderHook(() =>
      useUpdateLayoutEffect(() => {
        mountedState = 2;
      }),
    );
    expect(mountedState).toEqual(1);
    hook.rerender();
    expect(mountedState).toEqual(2);
  });
  it('test on optional', () => {
    let mountedState = 1;
    const hook = renderHook(() =>
      useUpdateLayoutEffect(() => {
        mountedState = 3;
      }, [mountedState]),
    );
    expect(mountedState).toEqual(1);
    mountedState = 2;
    hook.rerender();
    expect(mountedState).toEqual(3);
  });
});
