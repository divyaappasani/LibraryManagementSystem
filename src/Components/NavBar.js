import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'
import {FaHome,FaBookReader,FaBookOpen,FaSignInAlt,FaUserPlus,FaAddressBook} from 'react-icons/fa'

function NavBar() {
    return (
        <div>
            <Nav className="justify-content-end navbar navbar-dark bg-dark" activeKey="/home">

            <h3 className="logo-icon"><FaBookOpen/>&nbsp;</h3><h3 className="navheader">E-Library</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                
                <Nav.Item>
                    <Nav.Link href="/"><FaHome/>&nbsp;Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/login"><FaSignInAlt/>&nbsp;Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/register"><FaUserPlus/>&nbsp;Register</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/contact" ><FaAddressBook/>&nbsp;Contact Us</Nav.Link>
                </Nav.Item>
                
            </Nav>
        </div>

        /*<nav>
            <ul>
                <li>
                    
                    <Link to='/login/'>Login</Link>
                    
                </li>    {/*<a href='/Form'>Form</a></li>
            </ul>
        </nav>*/

    )
}

export default NavBar
