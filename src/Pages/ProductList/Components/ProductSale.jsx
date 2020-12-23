import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductSale.scss';

class ProductSale extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="ProductSale">
        <ul className="item">
          <Link to={`/product-detail/${product.id}`}>
            <div className="saleTag">SALE</div>
            <img src={product.main_image} alt="dog" />
            <img src={product.sub_image} alt="dogFeed" className="hoverImg" />
            <h2 className="title">{product.name}</h2>
            <div className="salePriceWrap">
              <h3 className="originPrice">
                {product.price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </h3>
              <h3 className="salePrice">
                {(product.price * 0.9).toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </h3>
            </div>
          </Link>
        </ul>
      </div>
    );
  }
}

export default ProductSale;
