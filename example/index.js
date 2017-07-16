import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Toaster, { addToast, removeToast } from 'react-redux-toaster';

import App from './App';

import store from './store';

store.dispatch(addToast({ text: '#1 – right bottom' }));
store.dispatch(addToast({ text: '#2 – left bottom', position: 'left bottom' }));
store.dispatch(addToast({ text: '#3 – right top', position: 'right top' }));
store.dispatch(addToast({ text: '#4 – right bottom' }));

ReactDOM.render(
  <Provider store={store}>
    <Toaster>
      <App />
    </Toaster>
  </Provider>,
  document.getElementById('root')
);
