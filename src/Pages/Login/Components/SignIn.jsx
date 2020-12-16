import React, { Component } from 'react';
import './SignIn.scss';
class SignIn extends Component {
  state = {
    emailCheck: '',
    pwCheck: '',
    user: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/data.json', { method: 'GET' })
      .then(res => res.json())
      .then(res => {
        this.setState({ user: res.data });
      });
  }

  isEmail = e => {
    this.setState({ emailCheck: e.target.value });
  };

  isPw = e => {
    this.setState({ pwCheck: e.target.value });
  };

  render() {
    return (
      <div className="loginContainer">
        <form action="" className="loginForm">
          <h3>Sign In</h3>
          <label className="loginEmailLabel">EMAIL</label>
          <input
            type="email"
            className="loginEmailInput"
            onChange={this.isEmail}
          />
          <label className="loginPwLabel">PASSWORD</label>
          <input
            type="password"
            className="loginPwInput"
            onChange={this.isPw}
          />
          <button className="signInBtn">SIGN IN</button>
          <a href="aaaa">FORGOT YOUR PASSWORD?</a>
        </form>
      </div>
    );
  }
}

export default SignIn;
