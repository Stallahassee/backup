//import packages
import React, { Component } from 'react';
import {Route, NavLink, BrowserRouter} from 'react-router-dom';
import {createStore} from "redux";
import thunk from "redux-thunk";
//import styles
import './styles/App.css';
//import actions/reducers
import store from "./index";
import {auth} from "./actions";
//import pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Students from "./pages/Students";
import Contracts from "./pages/Contracts";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
//import helper components
import "./components/Nav";

let store = createStore(store, applyMiddleware(thunk));
let isLoggedIn = this.props.auth.isAuthenticated;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <div className="App">
              <Nav isLoggedIn={isLoggedIn} />
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/students" component={Students}/>
              <Route exact path="/contracts" component={Contracts}/>
              <Route exact path="/FAQ" component={FAQ}/>
              <Route exact path="/contact" component={ContactUs}/>
              <Route exact path="/signup" component={SignUp}/>
              <Route exact path="/profile" component={Profile}/>
            </div>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
