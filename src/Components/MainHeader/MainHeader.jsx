import React, { Component } from 'react';
import './MainHeader.scss';

class MainHeader extends Component {
  render() {
    return (
      <div className="MainHeader">
        <div className="mainHeaderContents">
          <p className="contentsHeading">Grain Free - Made in the UK</p>
          <h2 className="contentsTitle">From Farm to Bowl</h2>
          <p className="contentsBody">
            Fresh & traceable ingredients slowly baked into our super delicious
            kibble. Available in a range of delicious flavours, delivered to
            your door.
          </p>
          <div className="buttonsWrapper">
            <button className="button main">Find The Right Food</button>
            <button className="button sub">Shop Now</button>
          </div>
        </div>
        <div className="mainHeaderImg"></div>
      </div>
    );
  }
}

export default MainHeader;
