import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Faculty from './Faculty';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact={true} component={Login}/>
          <Route path="/faculty" component={Faculty}/>
        </div>
      </Router>
    );
  }
}

export default App;
