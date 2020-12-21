import React, { Component } from 'react';

class ProductSection extends Component {
  state = {
    count: 0,
    showProductDetail: false,
    showBenefits: false,
    showIngredients: false,
    showFeedingGuide: false,
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
      <section className="ProductDetail">
        <div className="productInfoContainer">
          <div className="productImg">
            <img src="../images/cutedog.png" alt="" className="bigImg" />
            <div className="smallImgs">
              <img
                src="../images/pets-4383147_640.jpg"
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
                {this.state.showProductDetail && (
                  <div>
                    <h1>Hide and Show</h1>
                  </div>
                )}
                <button
                  onClick={e => {
                    this.setState({
                      showProductDetail: !this.state.showProductDetail,
                    });
                  }}
                >
                  {this.state.showProductDetail ? '-' : '+'}
                </button>
              </div>
              <div className="productAccordianUnit">
                <h2>Benefits</h2>
                {this.state.showBenefits && (
                  <div>
                    <h1>Hide and Show</h1>
                  </div>
                )}
                <button
                  name="btn2"
                  onClick={e => {
                    this.setState({ showBenefits: !this.state.showBenefits });
                  }}
                >
                  {this.state.showBenefits ? '-' : '+'}
                </button>
              </div>
              <div className="productAccordianUnit">
                <h2>Ingredients</h2>
                {this.state.showIngredients && (
                  <div>
                    <h1>Hide and Show</h1>
                  </div>
                )}
                <button
                  onClick={e => {
                    this.setState({
                      showIngredients: !this.state.showIngredients,
                    });
                  }}
                >
                  {this.state.showIngredients ? '-' : '+'}
                </button>
              </div>
              <div className="productAccordianUnit">
                <h2>Feeding guide</h2>
                {this.state.showFeedingGuide && (
                  <div>
                    <h1>Hide and Show</h1>
                  </div>
                )}
                <button
                  onClick={e => {
                    this.setState({
                      showFeedingGuide: !this.state.showFeedingGuide,
                    });
                  }}
                >
                  {this.state.showFeedingGuide ? '-' : '+'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default ProductSection;
