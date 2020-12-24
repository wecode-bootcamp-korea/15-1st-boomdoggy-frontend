import React, { Component } from 'react';
import './ProductListHeader.scss';

class ProductListHeader extends Component {
  render() {
    const { imgUrl, text, contentsBody } = this.props.item;
    return (
      <section className="ProductListHeader">
        <div className="productListContents">
          <h2 className="contentsTitle">{text}</h2>
          <p className="contentsBody">{contentsBody}</p>
        </div>
        <img src={imgUrl} className="productListHeaderImg"></img>
      </section>
    );
  }
}

export default ProductListHeader;
