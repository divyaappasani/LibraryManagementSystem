import React, { Component } from 'react'
import Info from './Info'

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: 2,
            interest: 'photography'

        }

    }
    render() {
        const { name, Age,types,numarray } = this.props
        const { experience, interest } = this.state
        //const arr1=types();
        const typelist=[]
        const numlist=numarray();
        for(const type of types()){
            typelist.push(<li key={type}>{type}</li>)
        }
        const nummap=numlist.map((number)=><li>{number*10}</li>)
        const numfilter= numlist.filter((number) => number > 3);
        console.log(numfilter)
        return (
            <React.Fragment>
                <h2> Class Component example </h2>
                <p>my name is {name} and my Age is {Age}. I am interested in {interest}. I have {experience} years of experience.</p>
                <h3>Types of photography</h3>
                <ol>{typelist}</ol>
                {this.props.htmlele()}
                {this.props.functionprop()}
                <ul>{nummap}</ul>
                {/*<Info name={name} />*/}
            </React.Fragment>


        )
    }
}
export default Welcome
