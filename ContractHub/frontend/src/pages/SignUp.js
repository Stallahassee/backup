import React, { Component } from 'react';
import {connect} from "react-redux";
import{Link, Redirect} from "react-router-dom";

import {auth} from "../actions";

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    passwordConfirm: '',
    first_name: '',
    last_name: '',
    name: '',
  };

  // handle_change = e => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   this.setState(prevstate => {
  //     const newState = { ...prevstate };
  //     newState[name] = value;
  //     return newState;
  //   });
  // };
  //onChange={this.handle_change}

  onSubmit = e => {
    e.preventDefault();
    this.props.signup(this.state.email, this.state.name, this.state.password, this.state.passwordConfirm, this.state.first_name, this.state.last_name);
  }

  render(){
    if(this.props.isAuthenticated) {
      return <Redirect to="/profile" />
    }
    return(
      <div>
        <div className="App-buffer-post-land"></div>
        <form onSubmit={this.onSubmit}>
          {this.props.errors.length > 0 && (
            <ul className="error">
              {this.props.errors.map(error => (
                <li key={error.field}>{error.message}</li>
              ))}
            </ul>
          )}
          <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
          <input type="text" name="name" placeholder="Username" value={this.state.name} onChange={e =>this.setState({name: e.target.value})}/>
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
          <input type="password" name="passwordConfirm" placeholder="Reenter Password" value={this.state.password} onChange={e => this.setState({passwordConfirm: e.target.value})}/>
          <input type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={e => this.setState({first_name: e.target.value})}/>
          <input type="text" name='last_name' placeholder="Last Name" value={this.state.last_name} onChange={e => this.setState({last_name: e.target.value})}/>
          <input type="submit" value="Sign Up"/>
          <Link to="/login">Log In Here</Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let errors = [];
  if(state.auth.errors) {
    errors = Object.keys(state.auth.errors).map(field => {
      return {field, message: state.auth.errors[field]};
    });
  }
  return {
    errors, isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: (email, name, password, passwordConfirm, first_name, last_name) => dispatch(auth.signup(email, name, password, passwordConfirm, first_name, last_name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
