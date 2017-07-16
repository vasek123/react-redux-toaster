import reducer from './reducer';
import { addToast, removeToast, removeLastToast } from './actions';
import Toaster from './components/Toaster';

export {
  reducer,
  addToast,
  removeToast,
  removeLastToast
};

export default Toaster;
