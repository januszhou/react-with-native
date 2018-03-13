import React from 'react';
import Login from './Login';
import { store, Provider } from 'shared';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}

// const App = (
//   <Provider store={store}>
//     <Main />
//   </Provider>
// );

export default App;
