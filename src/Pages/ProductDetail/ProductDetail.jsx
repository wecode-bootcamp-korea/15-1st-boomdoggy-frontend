import React, { Component } from 'react';
import './ProductDetail.scss';
class ProductDetail extends Component {
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
            <form action="">
              <h2>PUPPY FOOD</h2>
              <h1 className="infoTitle">
                Turkey with Duck, Sweet Potato, Dill & Camomile (Puppy)
              </h1>
              <span className="priceInfo">$15.00</span>
              <div className="selectorWraper">
                <div>
                  <label htmlFor="">2kg</label>
                  <input type="checkbox"></input>
                </div>
                <div>
                  <label htmlFor="">6kg</label>
                  <input type="checkbox"></input>
                </div>
                <div>
                  <label htmlFor="">12kg</label>
                  <input type="checkbox"></input>
                </div>
              </div>
              <select size="1" className="quantitySelector">
                <option value="1">Quantity: 1</option>
                <option value="2">Quantity: 2</option>
                <option value="3">Quantity: 3</option>
                <option value="4">Quantity: 4</option>
                <option value="5">Quantity: 5</option>
                <option value="6">Quantity: 6</option>
                <option value="7">Quantity: 7</option>
                <option value="8">Quantity: 8</option>
                <option value="9">Quantity: 9</option>
                <option value="10">Quantity: 10</option>
                <option value="11">Quantity: 11</option>
                <option value="12">Quantity: 12</option>
                <option value="13">Quantity: 13</option>
                <option value="14">Quantity: 14</option>
                <option value="15">Quantity: 15</option>
                <option value="16">Quantity: 16</option>
                <option value="17">Quantity: 17</option>
                <option value="18">Quantity: 18</option>
                <option value="19">Quantity: 19</option>
                <option value="20">Quantity: 20</option>
              </select>
              <label htmlFor="">
                <div className="nomal">
                  <input type="radio" />
                  <span>One-time purchase</span>
                </div>
                <div className="subscribe">
                  <input type="radio" />
                  <span>Subscribe & Save 25%</span>
                </div>
              </label>
              <button>ADD TO CART</button>
              <div className="productAccordian">
                <div className="productAccordianUnit"></div>
                <div className="productAccordianUnit"></div>
                <div className="productAccordianUnit"></div>
                <div className="productAccordianUnit"></div>
              </div>
            </form>
          </div>
        </section>
        <div className="reviewInfo">
          <div className="reviewHeader">
            <div className="reviewRating"></div>
            <div className="writeReview">
              <button className="writeReviewBtn">Write a review</button>
            </div>
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
