import React, { useState } from 'react';
import './Nav.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-sea-turtle-300-100.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';


function Nav() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const handleToggle = () => setIsNavExpanded(!isNavExpanded);
    const navigate = useNavigate();
    return (
            <nav className='navbar'>
                <img onClick={() => navigate("/")} src={logo} alt='Sea Turtle Logo' className='navbar-logo' />
                <button onClick={handleToggle} className="menu-icon">
                    {isNavExpanded ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />
                    }
                </button>
                <div className={isNavExpanded ? 'nav-menu expanded' : 'nav-menu'}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/booking">Booking</Link></li>
                    </ul>
                </div>
            </nav>
    )
}

export default Nav;