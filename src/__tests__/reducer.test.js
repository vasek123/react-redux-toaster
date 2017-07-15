import reducer from '../reducer';
import { INITIAL_STATE } from '../constants';
import * as actions from '../actions';
import createToast from '../createToast';

const STATE = {
  toasts: [
    { id: 1, text: 'Toast' },
    { id: 2, text: 'Another toast' },
  ],
  lastId: 2,
}

describe('Reducer', () => {
  it('should return initial state by default', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  })

  it('should add a toast when ADD_TOAST action is received', () => {
    let expectedResult = {
      ...STATE,
      toasts: [...STATE.toasts, { id: 3, text: 'New toast' }],
      lastId: 3,
    }

    expect(reducer(STATE, actions.addToast({ text: 'New toast' }))).toEqual(expectedResult);
  })

  it('should remove a toast when REMOVE_TOAST action is received', () => {
    let expectedResult = {
      ...STATE,
      toasts: [{ id: 1, text: 'Toast' }],
    }

    expect(reducer(STATE, actions.removeToast(2))).toEqual(expectedResult);
  })
})
