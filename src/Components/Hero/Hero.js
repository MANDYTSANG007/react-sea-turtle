import React from 'react';
import './Hero.css';
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();
    return (
        <header className='hero'>
            <div className='hero-content'>
                <h1 className='hero-title'> Sea Turtle </h1>
                <p> Los Angeles </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button onClick={() => navigate("/booking")} className='btn'> Reserve a table </button>
            </div>
            <img src={require('../../assets/chef2.jpg')} alt='chef' />
        </header>
    )
}

export default Hero;