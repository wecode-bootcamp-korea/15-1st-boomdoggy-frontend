import React, { Component } from 'react';
import './Reviews.scss';
import ReviewCard from './Components/ReviewCard/ReviewCard';

class Reviews extends Component {
  constructor() {
    super();
    this.state = {
      reviewList: {},
    };
  }
  componentDidMount() {
    fetch(`http://localhost:3000/data/review.json`)
      .then(res => res.json())
      .then(res => {
        this.setState({ reviewList: res });
      });
  }

  render() {
    const { review } = this.state.reviewList;
    console.log(this.state.reviewList.review);
    return (
      <section className="reviewsWrapper">
        <h2 className="contentsTitle">Our Best Reviews</h2>
        <div className="reviewRow">
          {review &&
            review.map(review => {
              return <ReviewCard key={review.id} review={review} />;
            })}
        </div>
      </section>
    );
  }
}

export default Reviews;
