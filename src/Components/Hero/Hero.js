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
                    We take pride in sourcing all of our ingredients from our own farms, where we use organic and sustainable farming practices to produce the highest quality crops. Our chefs use these fresh, delicious ingredients to create unique dishes.
                </p>
                <button onClick={() => navigate("/booking")} className='btn'> Reserve a table </button>
            </div>
            <img src={require('../../src/assets/chef2.jpg')} alt='a chef' />
        </header>
    )
}

export default Hero;