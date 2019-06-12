import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
  static defaultProps = {
    countries: [
      'Russia',
      'Kongo',
      'Bulgaria',
      'Sweden',
      'Greece',
      'USA',
      'Great Britain',
      'Canada',
      'Brazil',
      'China',
      'India',
      'Pakistan',
      'Tunisia',
      'Poland',
      'Denmark',
    ],
  };
  render() {
    return (
      <div className="SignUp">
        <div className="SignUp-header">
          <h1>Sign Up</h1>
        </div>
        <form className="SignUp-form">
          <div className="names">
            <div className="firstname">
              <label htmlFor="firstname">First name</label>
              <input type="text" id="firstname" placeholder="Your first name" />
            </div>
            <div className="lastname">
              <label htmlFor="lastname">Last name</label>
              <input type="text" id="lastname" placeholder="Your last name" />
            </div>
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your company email" />
          </div>
          <div className="country-phone">
            <div className="country">
              <label htmlFor="country">Country</label>
              <select id="country">
                <option value="">Choose your country</option>
                {this.props.countries.map((c, i) => (
                  <option value={c} key={i}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="phone">
              <label htmlFor="phone">Phone number</label>
              <input type="phone" id="phone" placeholder="+7(___)___-__-__" />
            </div>
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

export default SignUp;
