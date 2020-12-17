import React, { Component } from 'react';
import './Nav.scss';

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
        return this.setState({ indexNum: 0 });
      }
      this.setState(prevState => {
        return {
          indexNum: prevState.indexNum + 1,
        };
      });
    }, 3000);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll');
  }
  handleScroll = () => {
    if (window.pageYOffset > 40) {
      if (!this.state.nav) {
        this.setState({ nav: true });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
      }
    }
  };

  render() {
    const { colorValue, nav, indexNum } = this.state;
    const colorList = colorValue[indexNum];
    return (
      <div className="Nav">
        <div className={`${colorList}`}>
          <p>Vet Approved. Grain-Free. Ethically Sourced.</p>
        </div>
        <nav className={`${nav ? 'navBarOn' : 'navBar'}`}>
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
                <i className="ic serach fas fa-search"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ic user fas fa-user"></i>
              </a>
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
