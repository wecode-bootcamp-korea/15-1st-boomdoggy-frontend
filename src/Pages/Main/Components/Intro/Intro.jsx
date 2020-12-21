import React, { Component } from 'react';
import './Intro.scss';

class Intro extends Component {
  render() {
    return (
      <section className="Intro">
        <div className="introContents">
          <p className="contentsHeading">Human Grade Dog Food</p>
          <p className="contentsBody">
            Fresh recipes including meat, vegetables, herbs and botanicals. Your
            dog will smell the difference! 🦴🐶
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
    );
  }
}

export default Intro;
