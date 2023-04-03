import { ContextState } from './interfaces';

interface TodoAction {
  type: string;
  payload: ContextState;
}

export const subtotalReducer = (
  state: ContextState,
  action: TodoAction
): ContextState => {
  switch (action.type) {
    case 'setSubtotal':
      return {
        ...state,
        subtotal: action.payload.subtotal,
      };
    default:
      return state;
  }
};
