import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import DetailPage from './DetailPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact={true} component={SearchPage}/>
          <Route path="/detail/:id" component={DetailPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
