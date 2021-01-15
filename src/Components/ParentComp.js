import React, { Component } from 'react'
import RegularComp from './RegularComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';
import NormalFunComp from './NormalFunComp';

class ParentComp extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'Divya',
            age:15
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({name:'Divya'})
        },5000);
    }
    render() {
        console.log('......parent component rendering....')
        return (
            <div>
                <h4>Parent Component</h4>
                <MemoComp name={this.state.name}/>
                {this.state.age == 15 && <NormalFunComp name={this.state.name}/>}
                
                <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
