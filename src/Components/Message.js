import React, { Component } from 'react'

export default class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Welcome Visitor',
            count: 0
        }
    }
     changeMessage() {
         //console.log("ok")
        this.setState(
            {
                message: 'Thank you for subscribing'
            })
        
    }
     increment=() => {
        this.setState(
            {
                count: this.state.count + 1
            },
            ()=>console.log("Callback value",this.state.count)

        )
        console.log(this.state.count)
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <h2>count:{this.state.count}</h2>
                <button onClick={() => this.increment()}>Increment</button><br />
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
