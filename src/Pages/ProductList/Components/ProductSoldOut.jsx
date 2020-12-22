import React, { Component } from 'react';
import './ProductSoldOut.scss';

class ProductSoldOut extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="ProductSoldOut">
        <ul className="item">
          <a href="">
            <div className="soldOutTag">SOLD OUT</div>
            <img src={product.main_image} alt="dog" />
            <img src={product.sub_image} alt="dogFeed" className="hoverImg" />
            <h2 className="title">{product.name}</h2>
            <div className="soldOutWrap">
              <h3 className="originPrice">£{product.price}.00</h3>
              <h3 className="soldOut">Sold out</h3>
            </div>
          </a>
        </ul>
      </div>
    );
  }
}

export default ProductSoldOut;
