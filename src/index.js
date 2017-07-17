import reducer from './reducer';
import { addToast, removeToast, removeLastToast } from './actions';
import { createToasterReducer } from './reducer';
import Toaster from './components/Toaster';

export {
  reducer,
  addToast,
  removeToast,
  removeLastToast
};

export default Toaster;
