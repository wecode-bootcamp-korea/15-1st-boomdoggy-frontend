import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="mainHeader">
          <div className="mainHeaderContents">
            <p className="contentsHeading">Grain Free - Made in the UK</p>
            <h2 className="contentsTitle">From Farm to Bowl</h2>
            <p className="contentsText">
              Fresh & traceable ingredients slowly baked into our super
              delicious kibble. Available in a range of delicious flavours,
              delivered to your door.
            </p>
            <div className="buttonsWrapper">
              <button className="button main">Find the Right Food</button>
              <button className="button sub">Shop Now</button>
            </div>
          </div>
          <div className="mainHeaderImg"></div>
        </div>
        <div className="introWrapper">
          <div className="introContents">
            <p className="contentsHeading">Human Grade Dog Food</p>
            <p className="contentsText">
              Fresh recipes including meat, vegetables, herbs and botanicals.
              Your dog will smell the difference! 🦴🐶
            </p>
          </div>
          <div className="introPattern">
            <div className="img left"></div>
            <div className="img right"></div>
          </div>
        </div>
        <div className="features">
          <div className="featuresImg"></div>
          <div className="featuresContents">
            <h2 className="contentsTitle">Grain Free Dog Food</h2>
            <p className="contentsText">
              Slow cooked, Grain, Gluten and Soya Free. Less Itching, Happy
              Tummys, Happy Dogs.
            </p>
            <ul className="featuresList">
              <li className="listItem">
                <span>🌱</span>
                Fresher
              </li>
              <li className="listItem">
                <span>🌱</span>
                More Digestible
              </li>
              <li className="listItem">
                <span>🌱</span>
                More Nutritious
              </li>
            </ul>
          </div>
        </div>
        <div className="stepsWrapper">
          <h2 className="contentsTitle">The pawfect plan for your dog</h2>
          <div className="stepsContents">
            <div className="stepsUnit">
              <div className="oval"></div>
              <p className="contentsHeading">STEP 1</p>
              <h4 className="stepsTitle">Tell us your doggos details</h4>
              <p className="contentsText">
                Boop® will use your dogs unique makeup to fetch the perfect food
                for your dog.
              </p>
            </div>
            <div className="stepsUnit">
              <div className="oval"></div>
              <p className="contentsHeading">STEP 2</p>
              <h4 className="stepsTitle">Explore your suggestions</h4>
              <p className="contentsText">
                Based on your dogs details, we’ll offer your pup the right
                recipe for a happier, healthier dog. It’s pawesome!
              </p>
            </div>
            <div className="stepsUnit">
              <div className="oval"></div>
              <p className="contentsHeading">STEP 3</p>
              <h4 className="stepsTitle">Delivered to your door</h4>
              <p className="contentsText">
                Our team ships your tailored food straight to your door using
                one of our selected shipping partners.
              </p>
            </div>
          </div>
          <button className="button main">Lets Go!</button>
        </div>
        <div className="categoriesWrapper">
          <div className="category left"></div>
          <div className="category right">
            <div className="innerCategory up"></div>
            <div className="innerCategory down"></div>
          </div>
        </div>
        <div className="featuredWrapper">
          <div className="featuredProduct">
            <div className="productImg"></div>
            <div className="productContents">
              <h2 className="contentsTitle">Treat Collection</h2>
              <button className="button main">Buy Now!</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
