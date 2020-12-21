import React, { Component } from 'react';
import './ProductDetail.scss';
import ProductionSection from './Components/ProductSection';
import Reviews from './Components/Reviews';
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
          <div className="featureImg">
            <img src="../images/corgi-4267401_640.jpg" alt="" />
          </div>
          <div className="featureContents">
            <h2 className="featureTitle">From Farm to Bowl.</h2>
            <p className="featureText">
              All of our ingredients are ethically-sourced. Unlike other brands
              we know where our ingredients come from. Bone-appetite!
            </p>
            <ul className="featureList">
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>
        <section className="recommendInfo">
          <div className="recommendProduct">
            <h3 className="recommendTitle">You may also like</h3>
          </div>
        </section>
      </>
    );
  }
}

export default ProductDetail;
