import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
        <nav>
            <h1>Navbar</h1>
            <a href="/">Home</a>
            <a href="/Card">Card</a>
            <a href="/Contact">Contact</a>
        </nav>
    );
}

export default Navbar;