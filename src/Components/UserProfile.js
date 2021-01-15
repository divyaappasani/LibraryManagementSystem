import React, { Component } from 'react'

class UserProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true,
            isMinor:true
        }
    }

    render() {
        //return(
        //    this.state.isLoggedIn ? <div>Welcome Divya</div> :<div>Welcome Guest</div>
        //)
        return(
            <div>
                {this.state.isLoggedIn && <div>Welcome Divya</div>}
                <div className={this.state.isMinor?'minor':'major'}>
                  {this.state.isMinor?<span>You are a minor</span>:<span>You are a major</span>}  
                </div>
            </div>
           

        ) 
        
        /*if(this.state.isLoggedIn){
            return <div>Welcome Divya</div>
        }
        else{
            return <div>Welcome Guest</div>
        }
        /*return (
            <div>
                <div>Welcome Divya</div>
                <div>Welcome Guest</div>
            </div>

        )*/
    }
}

export default UserProfile
