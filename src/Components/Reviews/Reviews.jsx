import React, { Component } from 'react';
import './Reviews.scss';
import Review from './Components/Review/Review';

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
        {review &&
          review.map(review => {
            return <Review key={review.id} review={review} />;
          })}
      </section>
    );
  }
}

export default Reviews;
