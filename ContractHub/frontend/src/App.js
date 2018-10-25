import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import{Route, NavLink, BrowserRouter} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="App">
            <header className="App-header">
              <div className="nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/students">Students</NavLink>
                <NavLink to="/contracts">Contracts</NavLink>
                <NavLink to="/FAQ">FAQ</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
              </div>
            </header>
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
    );
  }
}

export default App;
