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
            <img src={product.img} alt="dog" />
            <img src={product.hoverImg} alt="dogFeed" className="hoverImg" />
            <h2 className="title">{product.title}</h2>
            <div className="salePriceWrap">
              <h3 className="originPrice">{product.price}</h3>
              <h3 className="salePrice">{product.salePrice}</h3>
            </div>
          </a>
        </ul>
      </div>
    );
  }
}

export default ProductSale;
