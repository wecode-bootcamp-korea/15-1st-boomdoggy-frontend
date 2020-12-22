import React, { Component } from 'react';
import './Product.scss';

class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="Product">
        <ul className="item">
          <a href="">
            <img src={product.main_image} alt="dog" />
            <img src={product.sub_image} alt="dogFeed" className="hoverImg" />
            <h2 className="title">{product.name}</h2>
            <h3 className="from">From</h3>
            <div className="priceWrap">
              <h3 className="price">£{product.price}.00</h3>
            </div>
          </a>
        </ul>
      </div>
    );
  }
}

export default Product;
