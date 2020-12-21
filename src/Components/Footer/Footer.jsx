import React, { Component } from 'react';
import './Footer.scss';

const footerList = [1, 2, 3];
const footerValue = [
  ['Our Food', 'FAQ', 'Delivery'],
  ['Our Treats', 'Contact Us', 'Privacy Policy'],
  ['Our Story', 'Login / Register', 'Cookies'],
];
class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <footer className="footerWrapper">
          <div className="footer container">
            {footerList.map((_, i) => {
              return (
                <ul className="footer list" key={i}>
                  {footerValue.map((item, index) => {
                    return (
                      <li className="footer item" key={index}>
                        {item[i]}
                      </li>
                    );
                  })}
                </ul>
              );
            })}

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
