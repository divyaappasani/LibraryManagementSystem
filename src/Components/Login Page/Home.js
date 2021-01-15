import React from 'react'
import { Carousel } from 'react-bootstrap';
import NavBar from '../NavBar';


function Home() {
    return (
        <div className='home'>
            <NavBar />
            
            <div class="home-container">
            <div className="home-img">
                <img src="https://lss-academy.com/wp-content/uploads/2018/02/six-sigma-Publications-1.jpg" alt="Notebook" style={{width:'100%' ,height:'50%'}}/>
                <div class="top-left1"><h3>Welcome to E-Library</h3></div>
                <div class="top-left"><h2><br/>Start reading your next favorite book</h2></div>
            </div>

                    <div class="content">
                        <h1>About us</h1>
                        <p>The library management system allows a library to keep track of all its books, and also manage its members. Some of the services offered by a library management system include book requests by the members of the library, and denial or issuance of the requests by the librarian.
                The system has several modules that serve various functions. The acquisition module manages the ordering, purchase and receipt of books for use in the library, thereby keeping records of all incoming books.
                The cataloging module classifies and indexes books received in the library. This helps the library record all its books, while making also making it easier to access a new book.</p>
                    </div>
            </div>
                
            </div>
    )
}

export default Home
