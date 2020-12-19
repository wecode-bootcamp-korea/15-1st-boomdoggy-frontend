import React, { Component } from 'react';
import './ProductDetail.scss';
class ProductDetail extends Component {
  state = {
    checked: false,
    subscribeChecked: false,
    count: 0,
  };

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrease = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };
  render() {
    return (
      <>
        <section className="ProductDetail">
          <div className="productInfoContainer">
            <div className="productImg">
              <img src="../images/cutedog.png" alt="" className="bigImg" />
              <div className="smallImgs">
                <img
                  src="../images/pets-4383147_640.jpg
                "
                  alt=""
                  className="smallImg"
                />
              </div>
            </div>
            <form
              onSubmit={e => {
                e.preventDefault();
              }}
            >
              <h2>PUPPY FOOD</h2>
              <h1 className="infoTitle">
                Turkey with Duck, Sweet Potato, Dill & Camomile (Puppy)
              </h1>
              <span className="priceInfo">$15.00</span>
              <div className="selectorWraper">
                <div>
                  <label htmlFor="">2kg</label>
                  <input
                    type="checkbox"
                    checked="checked"
                    name="kgInfo"
                    data-index="option1"
                  ></input>
                </div>
                <div>
                  <label htmlFor="">6kg</label>
                  <input
                    type="checkbox"
                    name="kgInfo"
                    data-index="option1"
                  ></input>
                </div>
                <div>
                  <label htmlFor="">12kg</label>
                  <input
                    type="checkbox"
                    name="kgInfo"
                    data-index="option1"
                  ></input>
                </div>
              </div>
              <div className="quantitySelector">
                <button onClick={this.handleIncrease}>+</button>
                <span>{this.state.count}</span>
                <button onClick={this.handleDecrease}>-</button>
              </div>
              <label htmlFor="">
                <div className="nomal">
                  <input type="radio" name="checkInfo" checked="checked" />
                  <span>One-time purchase</span>
                </div>
                <div className="subscribe">
                  <input type="radio" name="checkInfo" />
                  <span>Subscribe & Save 25%</span>
                </div>
              </label>
              <button className="addBtn">ADD TO CART</button>
              <div className="productAccordian">
                <div className="productAccordianUnit">
                  <h2>Product description</h2>
                  <button
                    onClick={e => {
                      e.preventDefault();
                    }}
                  >
                    +
                  </button>
                  <div></div>
                </div>
                <div className="productAccordianUnit">
                  <h2>Benefits</h2>
                  <button
                    onClick={e => {
                      e.preventDefault();
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="productAccordianUnit">
                  <h2>Ingredients</h2>
                  <button
                    onClick={e => {
                      e.preventDefault();
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="productAccordianUnit">
                  <h2>Feeding guide</h2>
                  <button
                    onClick={e => {
                      e.preventDefault();
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <div className="reviewInfo">
          <div className="reviewHeader">
            <div className="reviewHalf">
              <div className="reviewRating">
                <span>
                  <i>별별벼ㅕㅂ려볇ㄹ</i>
                </span>
                <span>Reviews</span>
              </div>
            </div>
            <div className="writeReview">
              <button className="writeReviewBtn">Write a review</button>
            </div>
          </div>
          <div className="reviewContainer">
            <span>asdhgjaskdasdkjh</span>
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
