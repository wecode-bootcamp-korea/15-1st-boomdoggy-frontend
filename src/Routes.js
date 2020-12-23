import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Search from './Components/Search/SearchResults';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import ProductList from './Pages/ProductList/ProductList';
import Cart from './Pages/Cart/Cart';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Account from './Pages/Account/Account';
import Footer from './Components/Footer/Footer';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/products/:category" component={ProductList} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/cart" component={Cart} />
          <Route
            exact
            path="/product-detail/:items"
            component={ProductDetail}
          />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
