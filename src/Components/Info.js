import React from 'react'
import Contact from './Contact';

 function Info(props){

    return(
        <React.Fragment>
            <h3>Author Name:{props.name} </h3>
            {/*<Contact name={props.name}/>*/}
        </React.Fragment>
       
        
    )

}
export default Info