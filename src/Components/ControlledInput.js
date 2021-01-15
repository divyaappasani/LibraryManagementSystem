import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

class ControlledInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName:'',
             password:''
        }
    }
    onInputChange(event){
        console.log(event)
        this.setState({
            [event.target.id]:[event.target.value]
        })

    }
    render() {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="formGroupExampleInput">UserName</label>
                        <input type="text" class="form-control" value={this.state.userName} onChange={(event)=> this.onInputChange(event)} id="userName" placeholder="Enter username" />
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Password</label>
                        <input type="text" class="form-control" value={this.state.password} onChange={(event)=> this.onInputChange(event)} id="password" placeholder="Enter password" />
                    </div>
                </form>
            </div>
        )
    }
}

export default ControlledInput
