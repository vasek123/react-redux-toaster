# react-redux-toaster
Library for displaying toaster notifications in React and Redux applications.

## Usage
First you have to include the react-redux-toaster reducer in your root reducer.

```js
// rootReducer.js

import { combinerReducers } from 'redux';
import { reducer as toasterReducer } from 'react-redux-toaster';
import reducer from './reducer';

export default combineReducers({
  app: reducer,
  toaster: toasterReducer,
})
```

Then you wrap your application in a `<Toaster />` component.

```js
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Toaster, { addToast, removeToast, removeLastToast } from 'react-redux-toaster';
import rootReducer from './rootReducer';
import App from './App';

let store = createStore(rootReducer);

// Creates some toasts
store.dispatch(addToast({ text: 'Hi!' })); // <- gets assigned with ID 1
store.dispatch(addToast({ text: 'I\'ll be deleted!' })); // <- ID 2
store.dispatch(addToast({ text: 'I\'ll be deleted as well!' })); // <- ID 3

// Removes second created toast
store.dispatch(removeToast(2));

// Remove the most recently created toast
store.dispatch(removeLastToast());

ReactDOM.render(
  <Provider store={store}>
    <Toaster>
      <App />
    </Toaster>
  </Provider>,
  document.getElementById('root')
);
```

You can then dispatch `addToast`, `removeToast` and `removeLastToast` actions anywhere in the app;
