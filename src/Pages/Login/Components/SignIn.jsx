import React, { Component } from 'react';
import './SignIn.scss';
import { withRouter } from 'react-router-dom';

class SignIn extends Component {
  state = {
    emailCheck: '',
    pwCheck: '',
  };

  goToAccount = e => {
    e.preventDefault();
    const { emailCheck, pwCheck } = this.state;
    fetch('http://192.168.0.3:8000/users/signin', {
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
          this.props.histroy.push('/account');
        } else {
          alert('로그인 실패!');
        }
        // if (
        //   emailCheck === result.User[0].email &&
        //   pwCheck === result.User[0].pw
        // ) {
        //   this.props.history.push('/account');
        // } else {
        //   alert('실패');
        // }
      });
  };

  render() {
    console.log(this.state.emailCheck);
    console.log(this.state.pwCheck);

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
