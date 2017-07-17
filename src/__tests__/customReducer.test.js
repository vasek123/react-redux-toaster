import { createToasterReducer } from '../reducer';

describe('Custom Toaster Reducer', () => {
  it('should return a function', () => {
    expect(typeof createToasterReducer()).toBe('function');
  })
})
