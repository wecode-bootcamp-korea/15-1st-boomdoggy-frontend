import React, { Component } from 'react';
import './Review.scss';

class Review extends Component {
  render() {
    const { review } = this.props;
    return (
      <div className="Review">
        <section className="reviewCard">
          <div className="review imgBox">
            <img alt="review img" src={review.img} />
          </div>
          <div className="review contents">
            <div className="starsRate">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="contentsBody">{review.text}</p>
            <div className="user">
              <span className="userName">{review.username}</span>
              <span className="date">{review.date}</span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Review;
