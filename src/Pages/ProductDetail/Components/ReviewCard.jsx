import React, { Component } from 'react';
import './ReviewCard.scss';
class ReviewCard extends Component {
  render() {
    const { review } = this.props;
    return (
      <section className="reviewCard">
        <div className="review imgBox">
          <img alt="review img" src={review.image} />
        </div>
        <div className="review contents">
          <div className="starsRate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <p className="contentsBody">{review.content}</p>
          <div className="user">
            <span className="userName">{review.name}</span>
            <span className="date">{review.date}</span>
          </div>
        </div>
      </section>
    );
  }
}
export default ReviewCard;
