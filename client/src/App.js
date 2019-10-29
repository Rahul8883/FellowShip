import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Registration from './pages/registration';
import Reset from './pages/reset';
import Forgot from './pages/forgot';
import Dashboard from './components/DashBoard';
import Demo from './Demo/demo'
class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Route path="/"exact component={Registration}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/registration" component={Registration}></Route>
          <Route path="/forgot" component={Forgot}></Route>
          <Route path="/reset" component={Reset}></Route>
          <Route path="/SignIn" component={Demo}></Route>
          <Route path="/Dashboard" component={Dashboard}></Route>
        </Switch>
      </Router>
    </div>  
    );
  }
}
export default App;
