import React, { Component } from 'react'

class Logout extends Component {
    render() {
        
        localStorage.removeItem("authenticted_user")
        return (
            <div>
                 
             {this.props.history.push("/")};
            </div>
        )
    }
}

export default Logout

