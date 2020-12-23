import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductSoldOut.scss';

class ProductSoldOut extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="ProductSoldOut">
        <ul className="item">
          <Link to={`/product-detail/${product.id}`}>
            <div className="soldOutTag">SOLD OUT</div>
            <img src={product.main_image} alt="dog" />
            <img src={product.sub_image} alt="dogFeed" className="hoverImg" />
            <h2 className="title">{product.name}</h2>
            <div className="soldOutWrap">
              <h3 className="originPrice">
                {product.price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </h3>
              <h3 className="soldOut">Sold out</h3>
            </div>
          </Link>
        </ul>
      </div>
    );
  }
}

export default ProductSoldOut;
