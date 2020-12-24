import React, { Component } from 'react';
import './SignUp.scss';
import { SIGNUP_API } from '../../../config';
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
      isFirstValid: !!firstName.length,
      isLastValid: !!lastName.length,
    });
  };

  getEmailValue = e => {
    const value = e.target.value;
    const regExp = /^[-A-Za-z0-9_]+[-A-Za-az0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{2,5}$/;
    regExp.test(value)
      ? this.setState({ isEmailValid: true, email: value })
      : this.setState({ isEmailValid: false });
  };

  getPwvalue = e => {
    //8 ~ 10자 영문, 숫자 조합
    const value = e.target.value;
    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
    regExp.test(value)
      ? this.setState({ isPwValid: true, pw: value })
      : this.setState({ isPwValid: false });
  };

  goToAccout = e => {
    e.preventDefault();
    const { firstName, lastName, email, pw } = this.state;
    fetch(`${SIGNUP_API}/users/signup`, {
      method: 'POST',
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: pw,
      }),
    })
      .then(res => res.json())
      .then(result => {
        switch (result.message) {
          case 'SUCCESS':
            alert(`${lastName}${firstName}님 회원가입을 축하드립니다.`);
            break;
          case 'ALREADY_EXISTS':
            alert('이메일이 이미 존재합니다.');
            break;
          case 'INVALID_PASSWORD':
            alert('비밀번호를 제대로 입력해주세요');
            break;
          case 'INVALID_EMAIL':
            alert('잘못된 이메일 형식입니다.(@, . 포함)');
            break;
          case 'INVALID_NAME':
            alert('성 또는 이름을 입력해주세요');
            break;
          default:
        }
      });
  };

  render() {
    return (
      <div className="SignUp">
        <form className="signUpForm">
          <h3 className="contentsTitle">Register</h3>
          <div>
            <label className="firstNameLabel ">FIRST NAME</label>
            <input
              type="text"
              className="firstNameInput"
              onChange={this.handleValue}
              name="firstName"
            />
          </div>
          <div>
            <label className="lastNameLabel">LAST NAME</label>
            <input
              type="text"
              className="lastNameInput"
              onChange={this.handleValue}
              name="lastName"
            />
          </div>
          <div>
            <label className="signUpEmailLabel">EMAIL</label>
            <input
              type="email"
              className="signUpEmailInput"
              onChange={this.getEmailValue}
            />
          </div>
          <div>
            <label className="signUpPwLabel">PASSWORD</label>
            <input
              type="password"
              className="signUpPwInput"
              onChange={this.getPwvalue}
            ></input>
          </div>
          <button className="createBtn" onClick={this.goToAccout}>
            CREATE
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
