import React, { Component } from 'react';

class SignIn extends Component {
  render() {
    return (
      <form>
        <h1>Sign In</h1>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <button>Continue</button>
      </form>
    );
  }
}

export default SignIn;
