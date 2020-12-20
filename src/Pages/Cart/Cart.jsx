import React, { Component } from 'react';
import CartEmpty from './Components/CartEmpty';
import './Cart.scss';

class Cart extends Component {
  render() {
    return (
      <section className="Cart">
        <h2 className="title">Your Bag</h2>
        <CartEmpty />
      </section>
    );
  }
}

export default Cart;
