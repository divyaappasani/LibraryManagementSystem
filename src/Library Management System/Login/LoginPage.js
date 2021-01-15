import React from 'react'
import './loginStyles.css'
import NavBar from '../../Components/NavBar';
import { Nav} from 'react-bootstrap'
import {FaHome,FaBookOpen,FaAddressBook} from 'react-icons/fa'

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userDetails: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/users").then(
      res => {
        res.json()
          .then(endRes => this.setState({ userDetails: endRes })).catch(err => console.log(err))
      })
      .catch(err => console.log(err))


  }

  submitLogin = (e) => {
    e.preventDefault();
    let isValid = false;
    const { userDetails, username, password } = this.state;
    console.log("userdata", userDetails)

    for (var i = 0; i < userDetails.length; i++) {
      if (username === userDetails[i].username && password === userDetails[i].password) {
        let authenticated_user = userDetails[i];
        isValid = true
        let authenticated_user_serialized = JSON.stringify(authenticated_user);
        localStorage.setItem("authenticted_user", authenticated_user_serialized);
        this.props.history.push("/userpage");
      }

    }
    if (!isValid)
      alert("Invalid Credentials..")
  }

  handleChange = (event) => {
    
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {

    //console.log("userinfo",this.state.userDetails)const action = '/user/' + this.state.username

    return (
      <div>
        <Nav className="justify-content-end navbar navbar-dark bg-dark" activeKey="/home">

        <h3 className="logo-icon"><FaBookOpen/>&nbsp;</h3><h3 className="navheader">E-Library</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Nav.Item>
            <Nav.Link href="/"><FaHome/>&nbsp;Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact" ><FaAddressBook/>&nbsp;Contact Us</Nav.Link>
          </Nav.Item>

        </Nav>
        <div className="inner-container">

          <div className="box">
            <form onSubmit={this.submitLogin} >
              <div className="header"> Login</div>

              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username" value={this.state.username} required="required" onChange={this.handleChange}
                  className="login-input"
                  placeholder="Username" />
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password" value={this.state.password} required="required" onChange={this.handleChange}
                  className="login-input"
                  placeholder="Password" />
              </div>

              <button
                type="button"
                className="login-btn"
                onClick={this
                  .submitLogin
                }>Login</button>
                <br/><br/>
              <p ><b><a href="/register" className="message">Not a user? Register</a></b></p>
            </form>
          </div>

        </div>
      </div>
    );
  }

}

export default LoginPage