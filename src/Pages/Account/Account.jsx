import React, { Component } from 'react';
import './Account.scss';
class Account extends Component {
  render() {
    return (
      <main className="accountContainer">
        <section className="myAccountInfo">
          <div className="accountContents">
            <h3>Welcome,</h3>
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
            <button className="logoutBtn">LOGOUT</button>
          </div>
        </section>
      </main>
    );
  }
}

export default Account;
