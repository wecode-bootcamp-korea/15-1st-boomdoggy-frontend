import React, { Component } from 'react';
import ProductionSection from './Components/ProductSection';
import Reviews from './Components/Reviews';
import Feature from '../Main/Components/Features/Features';
import './ProductDetail.scss';

class ProductDetail extends Component {
  render() {
    return (
      <>
        <ProductionSection />
        <div className="reviewContainer">
          <div className="reviews">
            <Reviews />
          </div>
        </div>
        <div className="featureInfo">
          <Feature />
        </div>
        <section className="recommendInfo">
          <div className="recommendProduct">
            <h3 className="recommendTitle contentsTitle">You may also like</h3>
          </div>
        </section>
      </>
    );
  }
}

export default ProductDetail;
