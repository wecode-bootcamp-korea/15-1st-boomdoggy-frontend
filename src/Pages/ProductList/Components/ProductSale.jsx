import React, { Component } from 'react';
import './ProductSale.scss';

class ProductSale extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="ProductSale">
        <ul className="item">
          <a href="">
            <div className="saleTag">SALE</div>
            <img src={product.main_image} alt="dog" />
            <img src={product.sub_image} alt="dogFeed" className="hoverImg" />
            <h2 className="title">{product.name}</h2>
            <div className="salePriceWrap">
              <h3 className="originPrice">£{product.price}.00</h3>
              <h3 className="salePrice">£{product.price * 0.9}.00</h3>
            </div>
          </a>
        </ul>
      </div>
    );
  }
}

export default ProductSale;
