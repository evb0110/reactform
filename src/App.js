import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp';
import SignIn from './SignIn';

class App extends Component {
  constructor(){
    super();
    this.state = { showSignIn: true };
  }

  handleClickUp() {
    this.setState({ showSignIn: false })
    console.log(this.state.showSignIn)
  }
  handleClickIn() {
    this.setState({ showSignIn: true })
    console.log(this.state.showSignIn)
  }

  render() {
    return (
      <div className="App">
      {this.state.showSignIn ? (
        <div>
          <span>Don't have an account?</span>
          <span onClick={() => this.handleClickUp()}>Sign up</span>
          <SignIn />
        </div>)
        : (
          <div className="SignUp-container">
            <span>Already have an account?</span>
            <span onClick={() => this.handleClickIn()}>Sign in</span>
            <SignUp />
          </div>) }
      </div>
    );
  }
}

export default App;
