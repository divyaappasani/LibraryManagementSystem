import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link,Route } from 'react-router-dom';
import { Nav, Jumbotron, Navbar, Figure, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';
import Topic from './Topic'
const Topics=({ match })=>{
    return (
        <div>
 
            <h1>React Topics</h1>
            <ul>
                <li>
                    <Link to={`${match.url}/purecomponent`} >Pure Component</Link>
                </li>
 
               
                <li>
                    <Link to={`${match.url}/hoc`}>Higher Order Components</Link>
                </li>
            </ul>
            <Route path={`${match.url}/:topicId`} component={Topic}/>
            
        </div>
    )
}
export default Topics;