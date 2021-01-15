import React from 'react'

const withLogin = (OriginalComponent) => {

    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                username:'',
                password:''
            }
        }

        handleUsernameChange = (event) => {
            this.setState({
                username: event.target.value
            })

        }
        handlePasswordChange = (event) => {
            this.setState({
                password: event.target.value
            })
        }
        render() {
            console.log(this.state.username)
            return <OriginalComponent username={this.state.username} password={this.state.password} 
            handleUsernameChange={this.handleUsernameChange} handlePasswordChange={this.handlePasswordChange}
            {... this.props} />
        }
    }
    return NewComponent
}
export default withLogin