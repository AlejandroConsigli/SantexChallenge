import { useContext, useEffect } from 'react';
import { AppContext } from '../context';

export default function useStateWithStorage() {
  const { state, setSubtotalState } = useContext(AppContext);

  const { subtotal } = state || {};

  useEffect(() => {
    setSubtotalState && setSubtotalState(parseInt(localStorage.getItem('subtotal') || '0'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('subtotal', subtotal?.toString());
  }, [subtotal]);

  return {
    subtotal,
    setSubtotalState,
  };
}
