import React, { Component } from 'react';
import ReviewCard from './ReviewCard';
import './Reviews.scss';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    fetch('http://192.168.0.2:8000/products/boomdoggy')
      .then(res => res.json())
      .then(res => this.setState({ reviews: res }));
  }
  render() {
    const { review_list } = this.state.reviews;
    return (
      <div className="Reviews">
        <section className="reviewsWrapper">
          <h2 className="contentsTitle">Our Best Reviews</h2>
          <div className="reviewRow">
            {review_list &&
              review_list.map(review => {
                return <ReviewCard key={review.id} review={review} />;
              })}
          </div>
        </section>
      </div>
    );
  }
}

export default Reviews;
