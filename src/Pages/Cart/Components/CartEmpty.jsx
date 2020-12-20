import React, { Component } from 'react';
import './CartEmpty.scss';

class CartEmpty extends Component {
  render() {
    return (
      <div className="CartEmpty">
        <h2>YOUR BAG IS EMPTY</h2>
        <a href="">Continue Shopping</a>
      </div>
    );
  }
}

export default CartEmpty;
