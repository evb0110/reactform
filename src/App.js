import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp';
import SignIn from './SignIn';

class App extends Component {
  constructor() {
    super();
    this.state = { showSignIn: true };
  }

  handleClickUp() {
    this.setState({ showSignIn: false });
  }
  handleClickIn() {
    this.setState({ showSignIn: true });
  }

  render() {
    return (
      <div className="App">
        {this.state.showSignIn ? (
          <div className="SignIn-container">
            <div className="switcher">
              <span className="question">Don't have an account?</span>
              <span className="anchor" onClick={() => this.handleClickUp()}>Sign up</span>
            </div>
            <SignIn />
          </div>
        ) : (
          <div className="SignUp-container">
            <div className="switcher">
              <span className="question">Already have an account?</span>
              <span className="anchor" onClick={() => this.handleClickIn()}>Sign in</span>
            </div>
            <SignUp />
          </div>
        )}
      </div>
    );
  }
}

export default App;
