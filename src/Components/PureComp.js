import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('pure component rendering')
        return (
            <div>
                <h4>Pure Component{this.props.name}</h4>

            </div>
        )
    }
}

export default PureComp
