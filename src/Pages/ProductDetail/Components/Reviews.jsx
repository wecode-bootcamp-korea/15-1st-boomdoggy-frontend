import React, { Component } from 'react';
import './Reviews.scss';
import ReviewCard from './ReviewCard';
class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/review.json')
      .then(res => res.json())
      .then(res => this.setState({ reviews: res }));
  }
  render() {
    const { review } = this.state.reviews;

    return (
      <div className="Reviews">
        <section className="reviewsWrapper">
          <h2 className="contentsTitle">Our Best Reviews</h2>
          <div className="reviewRow">
            {review &&
              review.map(review => {
                return <ReviewCard key={review.id} review={review} />;
              })}
          </div>
        </section>
      </div>
    );
  }
}

export default Reviews;
