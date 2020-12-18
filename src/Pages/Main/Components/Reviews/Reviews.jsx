import React, { Component } from 'react';
import './Reviews.scss';
import Review from '../../../../Components/Review/Review';

class Reviews extends Component {
  render() {
    return (
      <section className="reviewsWrapper">
        <h2 className="contentsTitle">Our Best Reviews</h2>
        <Review />
      </section>
    );
  }
}

export default Reviews;
