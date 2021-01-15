import React, { Component } from 'react'

class PageNotFound extends Component {
    redirect=()=>{
        this.props.history.push('/')
    }
    render() {
        console.log(this.props)
        return (
           
            <div>
                <h1>OOPS..404 error page not found!</h1>
                <button onClick={this.redirect}>Go Back to Home</button>
            </div>
            
        )
    }
}

export default PageNotFound
