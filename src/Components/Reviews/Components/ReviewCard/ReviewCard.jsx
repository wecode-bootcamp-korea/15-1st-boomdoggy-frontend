import React, { Component } from 'react';
import './ReviewCard.scss';

class ReviewCard extends Component {
  render() {
    const { review_list } = this.props;
    return (
      <section className="reviewCard">
        <div className="review imgBox">
          <img alt="review img" src={review_list.image} />
        </div>
        <div className="review contents">
          <div className="starsRate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <p className="contentsBody">{review_list.content}</p>
          <div className="user">
            <span className="userName">{review_list.name}</span>
            <span className="date">{review_list.date}</span>
          </div>
        </div>
      </section>
    );
  }
}

export default ReviewCard;
