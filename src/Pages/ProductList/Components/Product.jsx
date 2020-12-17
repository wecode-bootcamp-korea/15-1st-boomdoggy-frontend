import React, { Component } from 'react';
import './Product.scss';

class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="Product">
        <ul className="item">
          <a href="">
            <img src={product.img} alt="dog" />
            <img src={product.hoverImg} alt="dogFeed" className="hoverImg" />
            <h2 className="title">{product.title}</h2>
            <h3 className="from">{product.from}</h3>
            <div className="priceWrap">
              <h3 className="price">{product.price}</h3>
            </div>
          </a>
        </ul>
      </div>
    );
  }
}

export default Product;
