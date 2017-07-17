import { customCreateToast } from '../createToast';

const CUSTOM_OPTIONS = {
  position: 'top right',
}

describe('Custom Create Toast', () => {
  it('should return a function', () => {
    expect(typeof customCreateToast()).toBe('function');
  })

  it('should create a createToast function with custom default options', () => {
    expect(customCreateToast(CUSTOM_OPTIONS)({}, 1)).toEqual({ ...CUSTOM_OPTIONS, id: 1 });
  })

  it('shouldn\'t overwrite the ID passed in arguments by custom default options', () => {
    expect(customCreateToast({ ...CUSTOM_OPTIONS, id: 2 })({}, 1)).toEqual({ ...CUSTOM_OPTIONS, id: 1});
  })
})
