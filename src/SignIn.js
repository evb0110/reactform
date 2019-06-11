import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <div className="SignIn-header">
          <h1>Sign In</h1>
        </div>
        <form className="SignIn-form">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your company email" />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Your password" />
          </div>
          <div className="submit">
            <button>Continue</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
