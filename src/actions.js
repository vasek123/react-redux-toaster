import * as actionTypes from './actionsTypes';
import createToast from './createToast';

export const addToast = (options) => ({
  type: actionTypes.ADD_TOAST,
  payload: options,
});

export const removeToast = id => ({
  type: actionTypes.REMOVE_TOAST,
  payload: id,
});

export const removeLastToast = () => ({
  type: actionTypes.REMOVE_LAST_TOAST,
});
