//import packages
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
//import actions/reducers
import {auth} from '../actions';

//Global Nav for the Site
class Nav extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="nav">
          <NavLink to="/">Home</NavLink>
          {this.props.auth.isLoggedIn ?
            (<a onClick=this.props.logout>Logout</a>)
          :
            (<NavLink to="/login">Login</NavLink>)}
          <NavLink to="/students">Students</NavLink>
          <NavLink to="/contracts">Contracts</NavLink>
          <NavLink to="/FAQ">FAQ</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(auth.logout()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav)
