import React, { Component } from 'react';
import './CartList.scss';

class CartList extends Component {
  render() {
    const { cartItem } = this.props;
    return (
      <section className="CartList">
        <div className="cartColumn">
          <img alt="productImg" src={cartItem.image} />
        </div>
        <div className="cartColumn"></div>
      </section>
    );
  }
}

export default CartList;
