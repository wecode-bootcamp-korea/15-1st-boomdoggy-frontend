import React, { Component } from 'react';
import './SignUp.scss';
class SignUp extends Component {
  state = {
    firstName: '',
    isFirstValid: false,
    lastName: '',
    isLastValid: false,
    email: '',
    isEmailValid: false,
    pw: '',
    isPwValid: false,
  };

  handleValue = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.handleValid();
      }
    );
  };

  handleValid = () => {
    const { firstName, lastName } = this.state;
    this.setState({
      isFirstValid: firstName.length ? true : false,
      isLastValid: lastName.length ? true : false,
    });
  };

  getEmailValue = e => {
    this.setState({ email: e.target.value });
    const regExp = /^[-A-Za-z0-9_]+[-A-Za-az0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{2,5}$/;
    regExp.test(this.state.email)
      ? this.setState({ isEmailValid: true })
      : this.setState({ isEmailValid: false });
  };

  getPwvalue = e => {
    this.setState({ pw: e.target.value });
    //8 ~ 10자 영문, 숫자 조합
    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
    regExp.test(this.state.pw)
      ? this.setState({ isPwValid: true })
      : this.setState({ isPwValid: false });
  };

  goToAccout = e => {
    e.preventDefault();
    const {
      isEmailValid,
      isFirstValid,
      isLastValid,
      isPwValid,
      firstName,
      lastName,
      email,
      pw,
    } = this.state;
    fetch('http://192.168.0.3:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: pw,
      }),
    })
      .then(res => res.json())
      .then(result => console.log(result));
    if (isFirstValid && isLastValid && isEmailValid && isPwValid) {
      alert(`${lastName}${firstName}님 회원가입을 축하드립니다.`);
    }

    if (!firstName) {
      alert('이름을 입력해주세요');
    }
    if (!lastName) {
      alert('성을 입력해주세요');
      return;
    }
    if (!email) {
      alert('email을 제대로 입력해주세요');
      return;
    }
    if (!pw) {
      alert('비밀번호를 제대로 입력해주세요');
      return;
    }
  };

  render() {
    return (
      <div className="SignUp">
        <form className="signUpForm">
          <h3>Register</h3>
          <label className="firstNameLabel">FIRST NAME</label>
          <input
            type="text"
            className="firstNameInput"
            onChange={this.handleValue}
            name="firstName"
          />
          <label className="lastNameLabel">LAST NAME</label>
          <input
            type="text"
            className="lastNameInput"
            onChange={this.handleValue}
            name="lastName"
          />
          <label className="signUpEmailLabel">EMAIL</label>
          <input
            type="email"
            className="signUpEmailInput"
            onChange={this.getEmailValue}
          />
          <label className="signUpPwLabel">PASSWORD</label>
          <input
            type="password"
            className="signUpPwInput"
            onChange={this.getPwvalue}
          ></input>
          <button className="createBtn" onClick={this.goToAccout}>
            CREATE
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
