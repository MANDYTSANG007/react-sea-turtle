import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <header className='hero'>
            <div className='hero-content'>
                <p className='hero-title'> Sea Turtle </p>
                <p className='description'> Los Angeles </p>
                <p className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className='btn'> Reserve a table </button>
            </div>
            <img src={require('../../assets/chef2.jpg')} alt='chef' />
        </header>
    )
}

export default Hero;