import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Account.scss';

class Account extends Component {
  removeToken = () => {
    localStorage.removeItem('token');
    this.props.history.push('/');
  };
  render() {
    return (
      <div className="Account">
        <section className="myAccountInfo">
          <div className="accountContents">
            <h3>Welcome, {localStorage.getItem('email')}</h3>
            <h4>My Account</h4>
            <button>MANAGE YOUR SUBSCRIPTION(S)</button>
          </div>
        </section>
        <section className="orderHistory">
          <div className="historyContents">
            <h4>Order History</h4>
            <p></p>
          </div>
        </section>
        <section className="accountDetail">
          <div className="accountContents">
            <h3>Account Details</h3>
            <button className="viewBtn">VIEW ADDRESSES</button>
            <button className="logoutBtn" onClick={this.removeToken}>
              LOGOUT
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Account);
