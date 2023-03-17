import React from "react";
import "./About.css";

function About() {
    return (
        <section className="about-section">
            <article>
                <h1 className="about-title">About Us</h1>
                <div className="row">
                    {/* Main course column */}
                    <div className="column">
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>
                    {/* Dessert column */}
                    <div className="column">
                        <figure className="figure">
                            <img src={require("../../assets/chef3.jpg")} alt="chef" className="about-img" />
                        </figure>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default About;