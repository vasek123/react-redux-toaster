export const defaultOptions = {
  text: '',
};

const defaultPosition = {
  right: true,
  bottom: true,
}

const getPosition = (options) => {
  if (!options.top && !options.bottom &&
      !options.left && !options.center && !options.right
  ) return defaultPosition;
  return {
    ...defaultPosition,
    top: options.top,
    bottom: options.bottom,
    left: options.left,
    center: options.center,
    right: options.right,
  }
}

export default (options, id) => ({
  ...defaultOptions,
  ...options,
  ...getPosition(options),
  id,
});
