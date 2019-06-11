import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
  render() {
    return (
      <div className="SignUp">
        <div className="SignUp-header">
          <h1>Sign Up</h1>
        </div>
        <form className="SignUp-form">
          <div className="names">
            <label htmlFor="firstname">First name</label>
            <input type="text" id="firstname" />
            <label htmlFor="lastname">Last name</label>
            <input type="text" id="lastname" />
          </div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <div className="country-phone">
            <select id="country">
              <option value="">Choose your country</option>
              <option value="Russia">Russia</option>
              <option value="Kongo">Kongo</option>
              <option value="Bulgarria">Bulgarria</option>
            </select>
            <label htmlFor="phone">Phone number</label>
            <input type="phone" id="phone" />
          </div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <button>Continue</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
