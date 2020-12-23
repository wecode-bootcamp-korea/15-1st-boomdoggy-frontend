import React, { Component } from 'react';
import './CartList.scss';

class CartList extends Component {
  checkItemId = () => {
    const { onRemove, cartItem } = this.props;
    onRemove(cartItem.id);
  };

  addQuantity = () => {
    const { onChange, cartItem } = this.props;
    cartItem.quantity = cartItem.quantity + 1;
    onChange(cartItem.id, cartItem.quantity);
  };

  removeQuantity = () => {
    const { onChange, cartItem } = this.props;
    cartItem.quantity = cartItem.quantity - 1;
    onChange(cartItem.id, cartItem.quantity);
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
            <button className="minusBtn" onClick={this.removeQuantity}>
              -
            </button>
            <input
              className="quantityInput"
              value={cartItem.quantity}
              min="1"
            ></input>
            <button className="plusBtn" onClick={this.addQuantity}>
              +
            </button>
          </div>
          <p>$ {cartItem.price * cartItem.quantity}</p>
        </div>
      </section>
    );
  }
}

export default CartList;
