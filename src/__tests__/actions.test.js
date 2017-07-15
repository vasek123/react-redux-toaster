import * as actionTypes from '../actionsTypes';
import * as actions from '../actions';

describe('Actions', () => {
  it('should create ADD_TOAST action', () => {
    let expectedResult = {
      type: actionTypes.ADD_TOAST,
      payload: { text: 'You received a new message' },
    }

    expect(actions.addToast({ text: 'You received a new message' })).toEqual(expectedResult);
  })

  it('should create REMOVE_TOAST action', () => {
    let expectedResult = {
      type: actionTypes.REMOVE_TOAST,
      payload: 1,
    }

    expect(actions.removeToast(1)).toEqual(expectedResult);
  })
})
