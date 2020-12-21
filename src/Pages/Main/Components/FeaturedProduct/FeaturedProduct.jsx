import React, { Component } from 'react';
import './FeaturedProduct.scss';

class FeaturedProduct extends Component {
  render() {
    return (
      <section className="featuredWrapper">
        <div className="featuredProduct">
          <div className="product img">
            <div className="saleTag">SALE</div>
            <img
              alt="main_featured_bowl"
              src="./images/main_featured_bowl.png"
            />
          </div>
          <div className="product contents">
            <h2 className="contentsTitle">Treat Collection</h2>
            <button className="button main">Buy Now!</button>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedProduct;
