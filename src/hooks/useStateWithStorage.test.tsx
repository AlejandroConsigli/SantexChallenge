import { renderHook, act } from '@testing-library/react-hooks';
import useStateWithStorage from './useStateWithStorage';
import { ContextProvider } from '../context/Provider';

describe('useStateWithStorage', () => {
  const wrapper = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
    <ContextProvider>{children}</ContextProvider>
  );
  it('initializing hook', async () => {
    const { result } = renderHook(() => useStateWithStorage(), { wrapper });

    expect(result.current.subtotal).toBe(0);
  });
  it('setting hook to a value', async () => {
    const { result } = renderHook(() => useStateWithStorage(), { wrapper });

    act(() => {
      result.current.setSubtotalState(1);
    });

    expect(result.current.subtotal).toBe(1);
  });
});
