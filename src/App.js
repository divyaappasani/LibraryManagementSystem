import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'
import Home from './Components/Login Page/Home';
import NavBar from './Components/NavBar';
import User from './Components/Login Page/User'
import { render } from 'react-dom';
import React, { Component } from 'react'
import PageNotFound from './Components/PageNotFound';
import Topics from './Components/Topics'
import About from './Components/About';
import Contact from './Components/Contact';
import { fetchUsers,fetchMembers } from './Components/Services';
import LoginPage from './Library Management System/Login/LoginPage';
import RegisterPage from './Library Management System/Login/RegisterPage';
import './Library Management System/Login/loginStyles.css'
import UserPage from './Library Management System/Login/UserPage';
import Practice from './Components/Practice';
import UserBooks from './Library Management System/Login/UserBooks';
import Logout from './Library Management System/Login/Logout';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
      
    }
  }

  render() {
    
    return (
      <BrowserRouter>
        <div className="App">
        
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/userpage' component={UserPage} />
            <Route path='/user/:username' component={User} />
            <Route path='/userbooks' component={UserBooks}/>
            <Route path='/logout' component={Logout}/>
            <Route path='/Topics' component={Topics} />
            <Route path='**' component={PageNotFound} />

          </Switch>



        </div>
      </BrowserRouter>
    );
  }

}

export default App;
