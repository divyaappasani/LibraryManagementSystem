import React from 'react'
const Topic=({match})=>{
    let topic=null;
    if(match.params.topicId==="hoc"){
        topic=<div>
            <h2>Higher Order Component</h2>
            <p> A higher-order component (HOC) is an advanced technique in React for reusing component logic.</p>
        </div>
    }
    if(match.params.topicId==="purecomponent"){
        topic=<div>
            <h2>Pure Component</h2>
            <p> It compares current state and props with new props and states to decide whether the React component should re-render itself or Not.</p>
        </div>
    }
    

 return(

    <div>
        {topic}
    </div>
 )
    }

export default Topic