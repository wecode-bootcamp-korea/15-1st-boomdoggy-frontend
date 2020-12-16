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
  getFirstValue = e => {
    const { firstName } = this.state;
    this.setState({ firstName: e.target.value });
    firstName.length
      ? this.setState({ isFirstValid: true })
      : this.setState({ isFirstValid: false });
  };
  getLastValue = e => {
    const { lastName } = this.state;
    this.setState({ lastName: e.target.value });
    lastName.length
      ? this.setState({ isLastValid: true })
      : this.setState({ isLastValid: false });
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
    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
    regExp.test(this.state.pw)
      ? this.setState({ isPwValid: true })
      : this.setState({ isPwValid: false });
  };
  //   componentDidMount() {
  //     const { firstName, lastName, email, pw } = this.state;
  //     fetch('http://localhost:3000/data/data.json', {
  //       method: '',
  //       body: JSON.stringify({
  //         firstName: firstName,
  //         lastName: lastName,
  //         email: email,
  //         password: pw,
  //       }),
  //     })
  //       .then(res => res.json())
  //       .then(result => console.log(result.data));
  //   }

  goToAccout = () => {
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
    if (isFirstValid && isLastValid && isEmailValid && isPwValid) {
      alert(`${lastName}${firstName}님 회원가입을 축하드립니다.`);
    }

    if (!firstName) {
      alert('이름을 입력해주세요');
    } else if (!lastName) {
      alert('성을 입력해주세요');
    } else if (!email) {
      alert('email을 입력해주세요');
    } else if (!pw) {
      alert('비밀번호를 입력해주세요');
    }
  };

  render() {
    return (
      <div className="SignUpContainer">
        <form className="signUpForm">
          <h3>Register</h3>
          <label className="firstNameLabel">FIRST NAME</label>
          <input
            type="text"
            className="firstNameInput"
            onChange={this.getFirstValue}
          />
          <label className="lastNameLabel">LAST NAME</label>
          <input
            type="text"
            className="lastNameInput"
            onChange={this.getLastValue}
          ></input>
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
