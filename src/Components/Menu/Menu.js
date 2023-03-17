import React from "react";
import "./Menu.css";
import { menuData } from "../../data/menu-data";

function Menu() {
    const dessertItem = menuData.filter(item => item.dessert);
    const mainItem = menuData.filter(item => item.mainCourse);
    return (
        <section className="menu-section">
            <article>
                <h1 className="menu-title"> Menu </h1>
                <div className="menu-row">
                    <div className="menu-column">
                        <h2 className="menu-categories"> desserts </h2>
                        {dessertItem.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h1 className="dish-title">{item.title}</h1>
                                    <p className="dish-description">{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="menu-column">
                        <h2 className="menu-categories">main</h2>
                        {mainItem.map((dish, index) => {
                            return (
                                <div key={index}>
                                    <h1 className="dish-title">{dish.title}</h1>
                                    <p className="dish-description">{dish.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Menu;