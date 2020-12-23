import React, { Component } from 'react';
import CartList from './Components/CartList/CartList';
import './Cart.scss';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartContents: [],
      totalQuantity: 0,
      totalPrice: 0,
    };
  }

  componentDidMount() {
    fetch(`/data/Carts.json`)
      .then(res => res.json())
      .then(res => {
        this.setState({ cartContents: res.Carts }, () => {
          this.calculateTotal();
        });
      });
  }

  calculateTotal = () => {
    const { cartContents } = this.state;
    const total = cartContents.reduce((accumulator, currValue) => {
      return accumulator + currValue.sub_total;
    }, 0);
    this.setState({ totalPrice: total });
  };

  handleRemove = id => {
    const { cartContents } = this.state;
    this.setState(
      {
        cartContents: cartContents.filter(cartItem => cartItem.id !== id),
      },
      () => {
        this.calculateTotal();
      }
    );
  };

  render() {
    const { cartContents, totalPrice } = this.state;
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
            {cartContents &&
              cartContents.map(cartContents => {
                return (
                  <CartList
                    key={cartContents.id}
                    cartItem={cartContents}
                    onRemove={this.handleRemove}
                  />
                );
              })}
          </div>
        </div>
        <div className="totalWrapper">
          <p className="contentsHeading">Subtotal</p>
          <h2 className="contentsTitle">$ {totalPrice}</h2>
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
