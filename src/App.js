import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import './App.css'


import SignIn from './component/SignIn';

import Login from './component/Login';
import Forgot from './component/Forgot';

class App extends Component {
  render(){
      return (
        <Router>
        <div>
          
        <Switch>
          <Route exact path="/sign_in" component={SignIn} />
          <Route path="/login" component={Login} />
          
          <Route path="/forgot" component={Forgot} />
        </Switch>
        </div>
      </Router>
        )
  }
}
export default App
