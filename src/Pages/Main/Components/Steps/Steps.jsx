import React, { Component } from 'react';
import './Steps.scss';

class Steps extends Component {
  render() {
    return (
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
              Based on your dogs details, we’ll offer your pup the right recipe
              for a happier, healthier dog. It’s pawesome!
            </p>
          </div>
          <div className="stepsUnit">
            <div className="oval">
              <i className="fas fa-truck"></i>
            </div>
            <p className="contentsHeading">STEP 3</p>
            <h4 className="stepsTitle">Delivered to your door</h4>
            <p className="contentsBody">
              Our team ships your tailored food straight to your door using one
              of our selected shipping partners.
            </p>
          </div>
        </div>
        <button className="button main">Lets Go!</button>
      </section>
    );
  }
}

export default Steps;
