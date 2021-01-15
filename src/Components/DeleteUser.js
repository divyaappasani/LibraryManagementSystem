import React, { Component } from 'react'
import { deleteUser } from './Services'


 class DeleteUser extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            id:0
         }
     }
     handleChange=(event)=>{
        //console.log(event)
        this.setState({
            [event.target.name]:event.target.value
        })

    }
    handleSubmit=()=>{
        const delId=this.state.id;
        const d=deleteUser(delId);
        console.log(d);
    }
    render() {
        return (
            <div>
               <form  onSubmit={this.handleSubmit}>
                    <div>
                        <label>Id</label>
                        <input type='text' name="id" value={this.state.id} onChange={this.handleChange}/>
                    </div> 
                    <button type='submit' onChange={this.handleSubmit}>Delete</button>
                </form>
            </div>
        )
    }
}

export default DeleteUser
