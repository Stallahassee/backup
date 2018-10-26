import React, { Component } from 'react';
import {connect} from "react-redux";
import{ Link } from "react-router-dom";

import {auth} from '../actions';


class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  // handle_change = e => {
  //   const target = e.target, value = target.type === 'checkbox' ? target.checked : target.value, name = target.name
  //   this.setState({
  //     [name]: value
  //   });
  // };
  //onChange={this.handle_change}

  onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.email, this.state.password)
  }

  render(){
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
          <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={e => this.setState({password: e.target.value})}/>
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
          <input type="submit" value="Login"/>
          <Link to="/signup">Sign Up Here</Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let errors = [];
  if (state.auth.errors) {
    errors = Object.keys(state.auth.errors).map(field => {
      return {field, message: state.auth.errors[field]};
    });
  }
  return {
    errors,
    isAuthenticated: state.auth.isAuthenticated
  };
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email,password) => {
      return dispatch(auth.login(email,password));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);
