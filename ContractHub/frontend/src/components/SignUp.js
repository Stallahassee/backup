import React, { Component } from 'react';
import{ Link } from "react-router-dom";

class SignUp extends Component {
  state = {
    email: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render(){
    return(
      <form>
        <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handle_change}/>
        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handle_change}/>
        <input type="text" name="major" placeholder="Put your major here" value={this.state.major} onChange={this.handle_change}/>
        <input type="submit" value="Sign Up"/>
        <Link to="/login">Log In Here</Link>
      </form>
    );
  }
}

export default SignUp;
