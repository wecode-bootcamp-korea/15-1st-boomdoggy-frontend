import React, { Component } from 'react';
import './Review.scss';
class Review extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/review.json')
      .then(res => res.json())
      .then(res => console.log(res));
  }
  render() {
    return (
      <div className="Review">
        <div className="itemContainer">
          <div className="reviewImg">
            <img src="../images/cutedog.png" alt="" />
          </div>
          <div className="reviewDetail">
            <div className="reviewTitle">
              <h4>1234</h4>
            </div>
            <div className="reviewDate">2012.12.23</div>
            <div className="reviewText">
              <p>
                123123123123123123 123123123 213123 123123 123 213123123 213213
                123 123 123
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
