import React, { Component } from 'react';
import './SignIn.scss';
import { withRouter } from 'react-router-dom';
import { SIGNIN_API } from '../../../config';

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
        console.log(result);
        if (result.Token) {
          localStorage.setItem('token', result.Token);
          // this.props.histroy.push('/account');
        } else {
          alert('로그인 실패!');
        }
      });
  };

  render() {
    return (
      <div className="SignIn">
        <form action="" className="loginForm">
          <h3>Sign In</h3>
          <label className="loginEmailLabel">EMAIL</label>
          <input
            type="email"
            className="loginEmailInput"
            onChange={
              (this.handleEmail = e => {
                this.setState({ emailCheck: e.target.value });
              })
            }
          />
          <label className="loginPwLabel">PASSWORD</label>
          <input
            type="password"
            className="loginPwInput"
            onChange={
              (this.handlePw = e => {
                this.setState({ pwCheck: e.target.value });
              })
            }
          />
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
