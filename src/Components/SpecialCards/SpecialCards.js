import React from "react";
import './SpecialCards.css';

function SpecialCards(props)  {
    return (
        <div className="special-cards">
            <img src={props.image} alt={props.title} className="card-image" />
            <div className="card-container">
                <div className="card-header">
                    <h1 className="title">{props.title}</h1>
                    <p className="price">${props.price}</p>
                </div>
                <div className="description">{props.description}</div>
            </div>
        </div>
    )
}

export default SpecialCards;