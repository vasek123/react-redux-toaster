export const defaultOptions = {
  text: '',
  position: 'right bottom',
};

export default (options, id) => ({
  ...defaultOptions,
  ...options,
  id,
});
