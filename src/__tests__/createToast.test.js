import createToast, { defaultOptions } from '../createToast';

describe('Create Toast', () => {
  it('should create a toast with default options if no other options are passed', () => {
    expect(createToast({}, 1)).toEqual({ ...defaultOptions, id: 1 });
  })

  it('shouldn\'t overwrite an ID passed in arguments if ID is also present in options', () => {
    expect(createToast({ id: 1 }, 2)).toEqual({ ...defaultOptions, id: 2});
  })

  it('should overwrite default options', () => {
    expect(createToast({ text: 'Hello World!' }, 1))
      .toEqual({ ...defaultOptions, text: 'Hello World!', id: 1});
  })

  it('should merge options passed in arguments with default options', () => {
    expect(createToast({ color: '#fff', text: 'Hi!' }, 1))
      .toEqual({ ...defaultOptions, color: '#fff', text: 'Hi!', id: 1 });
  })
})
