import React, { Component } from 'react';
import './Login.scss';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

class Login extends Component {
  render() {
    return (
      <div className="mainContainer">
        <SignIn />
        <SignUp />
      </div>
    );
  }
}

export default Login;
