import React, { Component } from 'react';
import ReviewCard from './Components/ReviewCard/ReviewCard';
import './Reviews.scss';

class Reviews extends Component {
  constructor() {
    super();
    this.state = {
      reviewList: {},
    };
  }

  componentDidMount() {
    fetch(`http://192.168.0.2:8000/products/boomdoggy`)
      .then(res => res.json())
      .then(res => {
        this.setState({ reviewList: res });
      });
  }

  render() {
    const { review_list } = this.state.reviewList;

    return (
      <section className="reviewsWrapper">
        <h2 className="contentsTitle">Our Best Reviews</h2>
        <div className="reviewRow">
          {review_list &&
            review_list.map(review_list => {
              return (
                <ReviewCard key={review_list.id} review_list={review_list} />
              );
            })}
        </div>
      </section>
    );
  }
}

export default Reviews;
