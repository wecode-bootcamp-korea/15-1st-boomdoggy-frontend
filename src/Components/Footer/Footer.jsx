import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      footerValue: [
        ['Our Food', 'Our Treats', 'Our Story'],
        ['FAQ', 'Contact Us', 'Login / Register'],
        ['Delivery', 'Privacy Policy', 'Cookies'],
      ],
    };
  }

  render() {
    let FooterList = ({ name }) => {
      return <li className="footer item">{name}</li>;
    };

    return (
      <div className="Footer">
        <footer className="footerWrapper">
          <div className="footer container">
            <ul className="footer list">
              {this.state.footerValue.map((item, index) => {
                return <FooterList key={index} name={item[0]} />;
              })}
            </ul>

            <ul className="footer list">
              {this.state.footerValue.map((item, index) => {
                return <FooterList key={index} name={item[1]} />;
              })}
            </ul>

            <ul className="footer list">
              {this.state.footerValue.map((item, index) => {
                return <FooterList key={index} name={item[2]} />;
              })}
            </ul>

            <ul className="footer social-list">
              <li className="social-list item">
                <div>
                  <i className="fab fa-instagram"></i>
                </div>
              </li>

              <li className="social-list item">
                <div>
                  <i className="fab fa-facebook-f"></i>
                </div>
              </li>

              <li className="social-list item">
                <div>
                  <i className="fab fa-twitter"></i>
                </div>
              </li>
            </ul>
          </div>
        </footer>
        <footer className="creditWrapper">
          <div className="credit container">
            <span className="credit title">2020 - All Rights Reserved</span>

            <div className="credit owner">
              <span>Made by Wecode - 15th - TeamBoomDoggy</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
