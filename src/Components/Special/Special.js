import React from "react";
import './Special.css';
import { menuData } from "../../data/menu-data";
import SpecialCards from "../SpecialCards/SpecialCards";


function Special() {
    return (
        <div className='specials'>
            <div className='section-title'>
                <h1> This week's specials </h1>
                <button className='btn'>Menu</button>
            </div>
            <div className="content">
                {menuData.map((dish) => {
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