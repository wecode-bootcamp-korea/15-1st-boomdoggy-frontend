import React, { Component } from 'react';
import './ProductDetail.scss';
import Review from './Components/Review';
class ProductDetail extends Component {
  state = {
    count: 0,
    addClass: false,
    show: false,
  };

  handleClick = e => {
    this.setState({ addClass: !this.state.addClass });
  };

  handleIncrease = () => {
    const count = this.state.count + 1;
    this.setState({ count: count < 20 ? count : 20 });
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
                <div
                  onClick={this.handleClick}
                  className={`${
                    !this.state.addClass ? 'selected' : 'non-selected'
                  }`}
                >
                  <label htmlFor="">2kg</label>
                  <input
                    type="radio"
                    defaultChecked
                    name="kg"
                    value="2"
                    data-id="1"
                  ></input>
                </div>
                <div
                  onClick={this.handleClick}
                  className={`${
                    !this.state.addClass ? 'selected' : 'non-selected'
                  }`}
                >
                  <label htmlFor="">6kg</label>
                  <input type="radio" name="kg" value="6" data-id="2"></input>
                </div>
                <div
                  onClick={this.handleClick}
                  className={`${
                    !this.state.addClass ? 'selected' : 'non-selected'
                  }`}
                >
                  <label htmlFor="">12kg</label>
                  <input type="radio" name="kg" value="12" data-id="3"></input>
                </div>
              </div>
              <div className="quantitySelector">
                <button onClick={this.handleIncrease}>+</button>
                <span>{this.state.count}</span>
                <button onClick={this.handleDecrease}>-</button>
              </div>
              <button className="addBtn">ADD TO CART</button>
              <div className="productAccordian">
                <div className="productAccordianUnit">
                  <h2>Product description</h2>
                  {this.state.show ? (
                    <div>
                      <h1>Hide and Show</h1>
                    </div>
                  ) : null}
                  <button
                    onClick={e => {
                      console.log('1');

                      this.setState({ show: !this.state.show });
                    }}
                  >
                    {this.state.show ? '-' : '+'}
                  </button>
                </div>
                <div className="productAccordianUnit">
                  <h2>Benefits</h2>
                  {this.state.show ? (
                    <div>
                      <h1>Hide and Show</h1>
                    </div>
                  ) : null}
                  <button
                    name="btn2"
                    onClick={e => {
                      console.log('2');
                      this.setState({ show: !this.state.show });
                    }}
                  >
                    {this.state.show ? '-' : '+'}
                  </button>
                </div>
                <div className="productAccordianUnit">
                  <h2>Ingredients</h2>
                  {this.state.show ? (
                    <div>
                      <h1>Hide and Show</h1>
                    </div>
                  ) : null}
                  <button
                    name="btn3"
                    onClick={e => {
                      e.preventDefault();
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="productAccordianUnit">
                  <h2>Feeding guide</h2>
                  {this.state.show ? (
                    <div>
                      <h1>Hide and Show</h1>
                    </div>
                  ) : null}
                  <button
                    name="btn4"
                    onClick={e => {
                      e.preventDefault();
                    }}
                  ></button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <div className="reviewContainer">
          <div className="reviewHeader">reviews</div>
          <div className="reviews">
            <Review />
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
