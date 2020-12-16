import React, { Component } from 'react';
import './ProductSoldOut.scss';

class ProductSoldOut extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="item-box">
        <ul className="item">
          <a href="">
            <div className="sold-out-tag">SOLD OUT</div>
            <img src={product.img} alt="dog" />
            <img src={product.hoverImg} alt="dogFeed" className="hover__img" />
            <h2 className="title">{product.title}</h2>
            <div className="sold-out-wrap">
              <h3 className="origin-price">{product.price}</h3>
              <h3 className="sold-out">Sold out</h3>
            </div>
          </a>
        </ul>
      </div>
    );
  }
}

export default ProductSoldOut;
