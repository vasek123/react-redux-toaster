export const defaultOptions = {
  text: '',
};

export default (options, id) => ({
  ...defaultOptions,
  ...options,
  id,
});
