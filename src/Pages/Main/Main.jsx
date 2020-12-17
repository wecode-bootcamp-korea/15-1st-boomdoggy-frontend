import React, { Component } from 'react';
import './Main.scss';
import MainHeader from '../../Components/MainHeader/MainHeader';
import Review from '../../Components/Review/Review';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <MainHeader />
        <section className="introWrapper">
          <div className="introContents">
            <p className="contentsHeading">Human Grade Dog Food</p>
            <p className="contentsBody">
              Fresh recipes including meat, vegetables, herbs and botanicals.
              Your dog will smell the difference! 🦴🐶
            </p>
          </div>
          <img
            className="pattern left"
            alt="pattern-left"
            src="./images/pattern-left.svg"
          />
          <img
            className="pattern right"
            alt="pattern-right"
            src="./images/pattern-right.svg"
          />
        </section>
        <section className="features">
          <div className="featuresImg"></div>
          <div className="featuresContents">
            <h2 className="contentsTitle">Grain Free Dog Food</h2>
            <p className="contentsBody">
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
        </section>
        <section className="stepsWrapper">
          <h2 className="contentsTitle">The pawfect plan for your dog</h2>
          <div className="stepsContents">
            <div className="stepsUnit">
              <div className="oval">
                <i className="fas fa-dog"></i>
              </div>
              <p className="contentsHeading">STEP 1</p>
              <h4 className="stepsTitle">Tell us your doggos details</h4>
              <p className="contentsBody">
                Boop® will use your dogs unique makeup to fetch the perfect food
                for your dog.
              </p>
            </div>
            <div className="stepsUnit">
              <div className="oval">
                <i className="fas fa-bone"></i>
              </div>
              <p className="contentsHeading">STEP 2</p>
              <h4 className="stepsTitle">Explore your suggestions</h4>
              <p className="contentsBody">
                Based on your dogs details, we’ll offer your pup the right
                recipe for a happier, healthier dog. It’s pawesome!
              </p>
            </div>
            <div className="stepsUnit">
              <div className="oval">
                <i className="fas fa-truck"></i>
              </div>
              <p className="contentsHeading">STEP 3</p>
              <h4 className="stepsTitle">Delivered to your door</h4>
              <p className="contentsBody">
                Our team ships your tailored food straight to your door using
                one of our selected shipping partners.
              </p>
            </div>
          </div>
          <button className="button main">Lets Go!</button>
        </section>
        <section className="categoriesWrapper">
          <div className="category left">
            <div className="contentsWrapper">
              <h2 className="contentsTitle">Find the right food</h2>
              <p className="contentsBody">
                3 quick questions & we’ll find the right food for your dog,
                we’ll even print their name on the bag!
              </p>
              <button className="button main">Get Started</button>
            </div>
            <img
              className="leftPuppy"
              alt="category_left_puppy"
              src="./images/category_left_puppy.png"
            />
          </div>
          <div className="category right">
            <div className="innerCategory up">
              <div className="contentsWrapper right up">
                <h2 className="contentsTitle">Our Food</h2>
                <p className="contentsBody">
                  Our high protein dog food in a range of delicious flavours!
                </p>
                <button className="button main">Shop Now</button>
              </div>
              <img
                className="rightFood"
                alt="category_right_food"
                src="./images/category_right_food.png"
              />
            </div>
            <div className="innerCategory down">
              <div className="contentsWrapper right down">
                <h2 className="contentsTitle">Our Treats</h2>
                <p className="contentsBody">
                  Our new range of natural treats are perfect for all dogs
                </p>
                <button className="button main">Shop Now</button>
              </div>
              <img
                className="rightTreat"
                alt="category_right_treat"
                src="./images/category_right_treat.png"
              />
            </div>
          </div>
        </section>
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
        <section className="reviewsWrapper">
          <h2 className="contentsTitle">Our Best Reviews</h2>
          <Review />
        </section>
      </div>
    );
  }
}

export default Main;
