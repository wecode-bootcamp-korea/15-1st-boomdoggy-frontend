import React, { Component } from 'react';
import './CartList.scss';

class CartList extends Component {
  checkItemId = () => {
    this.props.onRemove(this.props.cartItem.id);
  };

  render() {
    const { cartItem } = this.props;
    return (
      <section className="CartList">
        <div className="cartColumn left">
          <img className="productImg" alt="productImg" src={cartItem.image} />
          <div className="productContents">
            <h5 className="productTitle">{cartItem.product_name}</h5>
            <h6 className="productOption">{cartItem.option_kg}kg</h6>
            <span className="removeBtn" onClick={this.checkItemId}>
              Remove
            </span>
          </div>
        </div>
        <div className="cartColumn right">
          <p>$ {cartItem.price}</p>
          <div className="quantitySelector">
            <button className="minusBtn">-</button>
            <input
              className="quantityInput"
              value={cartItem.quantity}
              min="1"
            ></input>
            <button className="plusBtn">+</button>
          </div>
          <p>$ {cartItem.total}</p>
        </div>
      </section>
    );
  }
}

export default CartList;
