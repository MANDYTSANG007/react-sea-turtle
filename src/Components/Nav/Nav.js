import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-sea-turtle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';


function Nav() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const handleToggle = () => setIsNavExpanded(!isNavExpanded);
    return (
            <nav className='navbar'>
                <img src={logo} alt='Sea Turtle Logo' className='navbar-logo' />
                <button onClick={handleToggle} className="menu-icon">
                    {isNavExpanded ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />
                    }
                </button>
                <div className={isNavExpanded ? 'nav-menu expanded' : 'nav-menu'}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
            </nav>
    )
}

export default Nav;