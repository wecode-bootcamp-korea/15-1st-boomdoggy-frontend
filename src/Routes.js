import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import ProductList from './Pages/ProductList/ProductList';
import Reviews from './Components/Reviews/Reviews';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Reviews} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product-list" component={ProductList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
