import React, { Component } from 'react';
import CartList from './Components/CartList/CartList';
import './Cart.scss';

class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        <h2 className="contentsTitle">Your Bag</h2>
        <div className="cartWrapper">
          <div className="cartRow">
            <div className="cartColumn"></div>
            <div className="cartColumn"></div>
          </div>
          <div className="cartTable">
            <CartList />
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
