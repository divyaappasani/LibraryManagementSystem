import React, { Component } from 'react'
import Contact from './Contact'
import ControlledInput from './ControlledInput'


class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topic:'Nature'
        }
    }
    handleUsernameChange=(event) =>{
        this.setState({
            username:event.target.value
        })

    }
    handleCommentsChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=event=>{
        alert('Your Details are submitted successfully')
        //<ControlledInput />
        //event.preventDefault()
    }
    render() {
        //const action = '/Form/'
        return (
            <form  onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value='Nature'>Nature Photography</option>
                        <option value='fashion'>Fashion Photography</option>
                        <option value='Wildlife'>Wildlife Photography</option>
                    </select>
                </div>
                <button type='submit' onChange={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

export default Form
