import { DEFAULT_OPTIONS } from './constants';

export const customCreateToast = (defaultOptions = DEFAULT_OPTIONS) => {
  return (options, id) => ({
    ...defaultOptions,
    ...options,
    id,
  })
}

export default customCreateToast();
