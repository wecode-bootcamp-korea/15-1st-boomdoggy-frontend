import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import { Link } from 'react-router-dom';
class Nav extends Component {
  listener = null;
  constructor(props) {
    super(props);
    this.state = {
      colorValue: ['announceBar red', 'announceBar green', 'announceBar blue'],
      nav: false,
      indexNum: 0,
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    setInterval(() => {
      if (this.state.indexNum >= this.state.colorValue.length - 1) {
        this.setState({ indexNum: 0 });
        return;
      }
      this.setState(prevState => {
        return {
          indexNum: prevState.indexNum + 1,
        };
      });
    }, 2000);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll');
  }
  handleScroll = () => {
    const { nav } = this.state;
    if (window.pageYOffset > 40 && !nav) {
      this.setState({ nav: true });
      return;
    } else if (window.pageYOffset <= 40 && nav) {
      this.setState({ nav: false });
      return;
    }
  };

  render() {
    const { colorValue, nav, indexNum } = this.state;

    return (
      <div className="Nav">
        <div className={colorValue[indexNum]}>
          <p>Vet Approved. Grain-Free. Ethically Sourced.</p>
        </div>
        <nav className={`${nav ? 'navBarOn' : 'navBar'}`}>
          <a href="/" className="mainLogo">
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
              <Link to="/search">
                <i className="ic serach fas fa-search"></i>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <i className="ic user fas fa-user"></i>
              </Link>
            </li>
            <li>
              <a href="#">
                <i className="ic shoppingBasket fas fa-shopping-basket"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
