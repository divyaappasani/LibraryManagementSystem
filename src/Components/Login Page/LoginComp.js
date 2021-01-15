import { React, Component } from 'react'
import withLogin from './withLogin'

class loginComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
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
    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    render() {
        //const{username,password,handleUsernameChange,handlePasswordChange}=this.props
        const action = '/user/' + this.state.username
        return (

            <div className="login-form">
                <form action={action} >
                    <h1 classNameName="text-center">Login</h1>
                    <div className="form-group">
                        <input type="text" className="form-control" name='username' placeholder="Username" required="required" onChange={this.handleUsernameChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name='password' placeholder="Password" required="required" onChange={this.handlePasswordChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-block">Log in</button>
                    </div>
                </form>
            </div>

        )
    }
}


export default loginComp