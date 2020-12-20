import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import ProductList from './Pages/ProductList/ProductList';
import Cart from './Pages/Cart/Cart';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product-list" component={ProductList} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
