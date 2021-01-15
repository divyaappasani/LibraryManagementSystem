import React from 'react'
import { FaHome, FaAddressBook, FaBookOpen } from 'react-icons/fa'
import { Nav } from 'react-bootstrap'
import { render } from 'react-dom'

class Contact extends React.Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email:'',
             comments:''
        }
    }
    handleNameChange=(event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })

    }
   
    handleSubmit = (event) => {
        alert('Your Details are submitted successfully')
        
    }
    render(){
    return (

        <React.StrictMode>
            <Nav className="justify-content-end navbar navbar-dark bg-dark" activeKey="/home">

                <h3 className="logo-icon"><FaBookOpen />&nbsp;</h3><h3 className="navheader">E-Library</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <Nav.Item>
                    <Nav.Link href="/"><FaHome />&nbsp;Home</Nav.Link>
                </Nav.Item>


            </Nav>
            <div className="inner-container">
            
            <div className="box">
            <h3 className="header">Contact us:</h3>
            <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <label>Full Name</label>
                    <input type='text' name="name"value={this.state.name} onChange={this.handleNameChange} />
                </div>
                <div className="input-group"> 
                    <label>E-mail</label>
                    <input type='text' name="email"value={this.state.email} onChange={this.handleNameChange} />
                </div>
                <div className="input-group">
                    <label>Comments</label>
                    <textarea name="comments" value={this.state.comments} onChange={this.handleNameChange}></textarea>
                </div>
                
                <button type='submit' className="login-btn" onChange={this.handleSubmit}>Submit</button>
            </form>
            </div>
            </div>
        </React.StrictMode>


    )}
}
export default Contact