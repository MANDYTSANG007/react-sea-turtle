import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-sea-turtle.png';

function Nav() {
    return (
        <nav className='navbar'>
            <img src={logo} alt='Sea Turtle Logo' className='navbar-logo'/>
            <ul className='categories'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;