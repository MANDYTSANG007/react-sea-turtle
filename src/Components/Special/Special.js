import React from "react";
import './Special.css';
import { specialMenuData } from "../../data/menu-data";
import SpecialCards from "../SpecialCards/SpecialCards";
import { useNavigate } from "react-router-dom";


function Special() {
    const navigate = useNavigate();

    return (
        <div className='specials'>
            <div className='section-title'>
                <h1> This week's specials </h1>
                <button onClick={() => navigate("/menu")} className='btn'>Menu</button>
            </div>
            <div className="content">
                {specialMenuData.map((dish) => {
                    return (
                    <SpecialCards
                        key={dish.id}
                        title={dish.title}
                        price={dish.price}
                        description={dish.description}
                        image={dish.image}
                    />
                    )
                })}
            </div>
        </div>
    )
}

export default Special;