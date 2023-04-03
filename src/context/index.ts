import { createContext } from 'react';
import { ContextState } from './interfaces';

interface AppContextState {
  state: ContextState;
  setSubtotalState: (subtotal: number) => void;
}

export const AppContext = createContext<AppContextState>({} as AppContextState);
