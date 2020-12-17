import React, { Component } from 'react';
import './Review.scss';

class Review extends Component {
  render() {
    return (
      <div className="Review">
        <section className="reviewCard">
          <div className="review img"></div>
          <div className="review contents">
            <div className="starsRate">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="contentsBody">
              Rollo and Jerry are clearly very excited for their Boop treats!
              Thank you!!
            </p>
            <div className="user">
              <span className="userName">Katherine 4</span>
              <span className="date">2020. 11. 17</span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Review;
