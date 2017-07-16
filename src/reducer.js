import * as actionTypes from './actionsTypes';
import { INITIAL_STATE } from './constants';
import createToast from './createToast';

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case actionTypes.ADD_TOAST: {
      return {
        ...state,
        toasts: [...state.toasts, createToast(payload, state.lastId + 1)],
        lastId: state.lastId + 1,
      }
    }

    case actionTypes.REMOVE_TOAST: {
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== payload),
      }
    }

    case actionTypes.REMOVE_LAST_TOAST: {
      return {
        ...state,
        toasts: state.toasts.slice(0, state.toasts.length - 1),
      }
    }

    default: {
      return state;
    }
  }
}
