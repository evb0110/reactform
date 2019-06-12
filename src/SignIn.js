import React, { Component } from 'react';
import './SignIn.css';
import { isValidEmail, isValidPassword } from './helpers';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { validEmail: false };
    this.onEmailChange = this.onEmailChange.bind(this);
  }

  onEmailChange(e) {
    const email = e.target.value;
    this.setState({ validEmail: isValidEmail(email) });
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onPasswordChange(e) {
    const pass = e.target.value;
    this.setState({ validPassword: isValidPassword(pass) });
  }

  render() {
    const isActiveButton = this.state.validEmail && this.state.validPassword;
    return (
      <div className="SignIn">
        <div className="SignIn-header">
          <h1>Sign In</h1>
        </div>
        <form className="SignIn-form">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your company email"
              onChange={this.onEmailChange}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Your password"
              onChange={this.onPasswordChange}
            />
          </div>
          <div className="submit">
            <button className={isActiveButton ? 'active' : ''}>Continue</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
