import React, { Component } from 'react'

class RegularComp extends Component {
    render() {
        console.log('Normal Class component rendering')
        return (
            <div>
                <h4>Regular Component{this.props.name}</h4>
            </div>
        )
    }
}

export default RegularComp
