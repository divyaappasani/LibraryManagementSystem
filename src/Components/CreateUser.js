import React, { Component } from 'react'
import { insertUser } from './Services'

class CreateUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:0,
             name:'',
             jobrole:''
        }
    }
    handleChange=(event)=>{
        //console.log(event)
        this.setState({
            [event.target.name]:event.target.value
        })

    }
    handleSubmit=()=>{
        const userObj={
            "id":this.state.id,
            "name":this.state.name,
            "jobRole":this.state.jobrole
          }
          const insertResult=insertUser(userObj);
    }
    render() {
        return (
            <div>
               <form  onSubmit={this.handleSubmit}>
                    <div>
                        <label>Id</label>
                        <input type='text' name="id" value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Name</label>
                        <input type='text' name="name" value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Job Role</label>
                        <input type='text' name="jobrole" value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div>
                        
                        <button type='submit' onChange={this.handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        
        )
    }
}

export default CreateUser
