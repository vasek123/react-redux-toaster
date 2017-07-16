import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Toaster, { addToast, removeToast } from 'react-redux-toaster';

import App from './App';

import store from './store';

store.dispatch(addToast({ text: 'right bottom', right: true, bottom: true}));
store.dispatch(addToast({ text: 'left bottom', left: true, bottom: true }));
store.dispatch(addToast({ text: 'right top', right: true, top: true }));
store.dispatch(addToast({ text: 'right bottom #2' }));

ReactDOM.render(
  <Provider store={store}>
    <Toaster>
      <App />
    </Toaster>
  </Provider>,
  document.getElementById('root')
);
