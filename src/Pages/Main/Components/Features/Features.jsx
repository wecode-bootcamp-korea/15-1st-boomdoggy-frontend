import React, { Component } from 'react';
import './Features.scss';

class Features extends Component {
  render() {
    return (
      <section className="features">
        <div className="featuresImg"></div>
        <div className="featuresContents">
          <h2 className="contentsTitle">Grain Free Dog Food</h2>
          <p className="contentsBody">
            Slow cooked, Grain, Gluten and Soya Free. Less Itching, Happy
            Tummys, Happy Dogs.
          </p>
          <ul className="featuresList">
            <li className="listItem">
              <span>🌱</span>
              Fresher
            </li>
            <li className="listItem">
              <span>🌱</span>
              More Digestible
            </li>
            <li className="listItem">
              <span>🌱</span>
              More Nutritious
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Features;
