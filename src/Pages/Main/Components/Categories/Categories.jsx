import React, { Component } from 'react';
import './Categories.scss';

class Categories extends Component {
  render() {
    return (
      <section className="categoriesWrapper">
        <div className="category left">
          <div className="contentsWrapper">
            <h2 className="contentsTitle">Find the right food</h2>
            <p className="contentsBody">
              3 quick questions & we’ll find the right food for your dog, we’ll
              even print their name on the bag!
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
    );
  }
}

export default Categories;
