import React, { Component } from 'react';
import './Login.scss';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
class Login extends Component {
  render() {
    return (
      <div className="mainContainer">
        <img
          src="../images/pattern-left.svg"
          className="imgLeft"
          alt="backgroundPatternImgLeft"
        />
        <SignIn />
        <SignUp />
        <img
          src="../images/pattern-right.svg"
          className="imgRight"
          alt="backgroundPatternImgRight"
        />
      </div>
    );
  }
}

export default Login;
