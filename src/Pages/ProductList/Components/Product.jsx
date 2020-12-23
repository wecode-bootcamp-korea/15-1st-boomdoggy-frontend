import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="Product">
        <ul className="item">
          <Link to={`/product-detail/${product.id}`}>
            <img src={product.main_image} alt="dog" />
            <img src={product.sub_image} alt="dogFeed" className="hoverImg" />
            <h2 className="title">{product.name}</h2>
            <h3 className="from">From</h3>
            <div className="priceWrap">
              <h3 className="price">
                {product.price.toLocaleString('en-US', {
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

export default Product;
