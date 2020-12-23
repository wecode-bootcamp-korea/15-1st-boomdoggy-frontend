import React, { Component } from 'react';
import CartList from './Components/CartList/CartList';
import './Cart.scss';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: {},
      totalQuantity: 0,
      totalPrice: 0,
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/data/Carts.json`)
      .then(res => res.json())
      .then(res => {
        this.setState({ cartList: res });
      });
  }

  totalPrice = () => {
    return this.state.cartList.reduce(
      (accumulator, currentValue) => accumulator + currentValue.sub_total,
      0
    );
  };

  render() {
    const { Carts } = this.state.cartList;

    return (
      <div className="Cart">
        <h2 className="contentsTitle">Your Bag</h2>
        <div className="cartWrapper">
          <div className="cartRow">
            <div className="cartLabel left">
              <label>Product</label>
            </div>
            <div className="cartLabel right">
              <label>Price</label>
              <label>Quantity</label>
              <label>Total</label>
            </div>
          </div>
          <div className="cartTable">
            {Carts &&
              Carts.map(Carts => {
                return <CartList key={Carts.id} cartItem={Carts} />;
              })}
          </div>
        </div>
        <div className="totalWrapper">
          <p className="contentsHeading">Subtotal</p>
          <h2 className="contentsTitle">$ {this.totalPrice}</h2>
          <div className="buttonWrapper">
            <button className="button sub">Update Bag</button>
            <button className="button main">Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
