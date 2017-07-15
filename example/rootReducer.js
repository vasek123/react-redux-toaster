import { combineReducers } from 'redux';
import { reducer as toasterReducer } from 'react-redux-toaster';

export default combineReducers({
  toaster: toasterReducer,
});
