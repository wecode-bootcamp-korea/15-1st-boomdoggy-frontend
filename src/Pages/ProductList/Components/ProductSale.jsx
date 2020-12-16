import React, { Component } from 'react';
import './ProductSale.scss';

class ProductSale extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="item-box">
        <ul className="item">
          <a href="">
            <div className="sale-tag">SALE</div>
            <img src={product.img} alt="dog" />
            <img src={product.hoverImg} alt="dogFeed" className="hover__img" />
            <h2 className="title">{product.title}</h2>
            <div className="sale-price-wrap">
              <h3 className="origin-price">{product.price}</h3>
              <h3 className="sale-price">{product.salePrice}</h3>
            </div>
          </a>
        </ul>
      </div>
    );
  }
}

export default ProductSale;
