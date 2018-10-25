import React, { Component } from 'react';
import{ Link } from "react-router-dom";


class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handle_change = e => {
    const target = e.target, value = target.type === 'checkbox' ? target.checked : target.value, name = target.name
    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.email, this.state.password)
  }

  render(){
    return(
      <div>
        <div className="App-buffer-post-land"></div>
        <form onSubmit={this.onSubmit}>
          <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handle_change}/>
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handle_change}/>
          <input type="submit" value="Login"/>
          <Link to="/signup">Sign Up Here</Link>
        </form>
      </div>
    );
  }
}
export default LoginForm;
