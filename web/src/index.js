import React from 'react';
import ReactDOM from 'react-dom';
import { store, Provider } from 'shared';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

