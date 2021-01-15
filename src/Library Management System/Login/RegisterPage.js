import React from 'react'
import './loginStyles.css'
import { insertMember, insertUser } from 'C:/Users/appasanidivyat/reactex2/src/Components/Services'
import {FaHome,FaAddressBook,FaBookOpen} from 'react-icons/fa'

import { Nav } from 'react-bootstrap'

class RegisterPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''

    };
  }
  handleChange = (event) => {
    
    this.setState({
      [event.target.name]: event.target.value
    })

  }
  handleSubmit = (e) => {
    
    const userObj = {
      "username": this.state.username,
      "email": this.state.email,
      "password": this.state.password
    }
    this.setState({
      username : "",
      email: '',
      password : ""
    })
    const insertResult = insertUser(userObj);
    alert("successfully registered..please login!!");
    
  }
  submitRegister(e) { }

  render() {
    
    return (
      <div>
        <Nav className="justify-content-end navbar navbar-dark bg-dark" activeKey="/home">

      <h3 className="logo-icon"><FaBookOpen/>&nbsp;</h3><h3 className="navheader">E-Library</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Nav.Item>
            <Nav.Link href="/"><FaHome/>&nbsp;Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact" ><FaAddressBook/>&nbsp;Contact Us</Nav.Link>
          </Nav.Item>

        </Nav>
        <div className="inner-container">

          <div className="box">
            <div className="header">
              Register
          </div>
            <form onSubmit={this.handleSubmit}>

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} className="login-input" placeholder="Email" />
              </div>
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username" value={this.state.username} onChange={this.handleChange}
                  className="login-input"
                  placeholder="Username" />
              </div>


              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password" value={this.state.password} onChange={this.handleChange}
                  className="login-input"
                  placeholder="Password" />
              </div>
              <button
                type="button"
                className="login-btn"
                onClick={this.handleSubmit}>Register</button><br /><br />
              <p ><b><a href="/login" className="message">Already a user? Login</a></b></p>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default RegisterPage