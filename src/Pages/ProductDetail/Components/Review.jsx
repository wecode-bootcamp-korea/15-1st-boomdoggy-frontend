import React, { Component } from 'react';

class Reviews extends Component {
  render() {
    return (
      <div className="Review">
        <div className="itemContainer">
          <img src="../images/cutedog.png" alt="" />
          <div className="reviewDetail">
            <div className="reviewTitle">1234</div>
            <div className="reviewDate">2012.12.23</div>
            <div className="reviewText">
              123123123123123123 123123123 213123 123123 123 213123123 213213
              123 123 123
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
