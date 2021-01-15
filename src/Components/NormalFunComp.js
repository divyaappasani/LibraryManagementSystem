import React from 'react'

function NormalFunComp(props) {
    console.log('Rendering Normal Functional Component')
    return (
        <div>
           <h4>Normal Function Component{props.name}</h4> 
        </div>
    )
}

export default NormalFunComp
