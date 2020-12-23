import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SIGNIN_API } from '../../../config';
import './SignIn.scss';

class SignIn extends Component {
  state = {
    emailCheck: '',
    pwCheck: '',
  };

  goToAccount = e => {
    e.preventDefault();
    const { emailCheck, pwCheck } = this.state;
    fetch(`${SIGNIN_API}/users/signin`, {
      method: 'POST',
      body: JSON.stringify({
        email: emailCheck,
        password: pwCheck,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.Token) {
          localStorage.setItem('token', result.Token);
          localStorage.setItem('email', result.email);
          this.props.history.push('/account');
        } else {
          alert('로그인 실패!');
        }
      });
  };

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="SignIn">
        <form action="" className="loginForm">
          <h3 className="contentsTitle">Sign In</h3>
          <div className="emailContainer">
            <label className="loginEmailLabel">EMAIL</label>
            <input
              type="email"
              name="emailCheck"
              className="loginEmailInput"
              onChange={this.handleInput}
            />
          </div>
          <div className="pwContainer">
            <label className="loginPwLabel">PASSWORD</label>
            <input
              type="password"
              name="pwCheck"
              className="loginPwInput"
              onChange={this.handleInput}
            />
          </div>
          <button
            className="signInBtn"
            onClick={e => {
              this.goToAccount(e);
            }}
          >
            SIGN IN
          </button>
          <a href="aaaa">FORGOT YOUR PASSWORD?</a>
        </form>
      </div>
    );
  }
}
export default withRouter(SignIn);
