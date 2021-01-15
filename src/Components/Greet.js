import React from 'react'
import Welcome from './welcome'
import FunctionProps from './FunctionProps'

function Greet(props) {
    const { name, Age } = props
    return (
        <React.Fragment>
            <h1>Hello {name}</h1>
            <Welcome name={name} Age={Age}
                types={() => ['Natural Photography', 'WildLife Photography', 'Fashion Photography']}
                htmlele={() => <h4>I'm a HTML element</h4>}
                functionprop={() =>  <FunctionProps /> } 
                numarray={()=>[1,3,5,6]}/>
        </React.Fragment>
    )
}

//export const Greet=() =><h1>Hello Divya Appasani</h1>

export default Greet