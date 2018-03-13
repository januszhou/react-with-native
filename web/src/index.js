import React from 'react';
import ReactDOM from 'react-dom';
import { store, Provider } from 'shared';
import App from './App';

const a = {foo: 1};
console.log({...a, bar: 2});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

