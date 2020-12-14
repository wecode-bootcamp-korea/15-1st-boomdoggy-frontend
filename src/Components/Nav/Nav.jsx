import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navBar">
          <a href="/main" className="mainLogo">
            <img alt="logo" src="./images/main_logo.svg" />
          </a>
          <ul className="navList">
            <li>
              <a href="#">Our Treats</a>
            </li>
            <li>
              <a href="#">Our Food</a>
            </li>
          </ul>
          <ul className="navOptions">
            <li>
              <a href="#">
                <i className="ic serach" class="fas fa-search"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ic user" class="fas fa-user"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="ic shoppingBasket"
                  class="fas fa-shopping-basket"
                ></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
