import { useReducer } from 'react';
import { AppContext } from './index';
import { ContextState } from './interfaces';
import { subtotalReducer } from './reducer';

const INITIAL_STATE: ContextState = {
  subtotal: 0,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const ContextProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(subtotalReducer, INITIAL_STATE);

  const setSubtotalState = (subtotal: number) => {
    dispatch({ type: 'setSubtotal', payload: { subtotal } });
  };

  return (
    <AppContext.Provider value={{ state, setSubtotalState }}>
      {children}
    </AppContext.Provider>
  );
};
