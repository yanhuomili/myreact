import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import Home from './views/Home'
import Profile from './views/Profile'
import User from './views/User'

class App extends Component {
  render() {
    return (
    	<Router>
	    	<div>
	    			<Route exact={true} path="/Home" component={Home}/>
            <Route path="/User" component={User}/>
            <Route path="/Profile" component={Profile}/>
	    			<Redirect to='/Home' />
	      </div>
    	</Router>
      
    );
  }
}

export default App;
