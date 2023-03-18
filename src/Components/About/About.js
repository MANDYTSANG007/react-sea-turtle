import React from "react";
import "./About.css";

function About() {
    return (
        <section className="about-section">
            <article>

                <div className="row">
                    {/* Main course column */}
                    <div className="column">
                        <h1 className="about-title">About Us</h1>
                        <p className="description">At Sea Turtle, we believe that food is at its best when it's fresh, healthy, and sustainably sourced. That's why we own and operate our own farms, where we grow a variety of crops using responsible farming practices.</p>
                        <p className="description">Our mission is to provide our customers with delicious, nutritious meals made with the freshest ingredients, straight from our farms to your table.</p>
                        <br></br>
                        <br></br>
                        <h1 className="about-title">Opening Hours</h1>
                        <p>The Sea Turtle Restaurant is open 5 days a week, except for public holidays.</p>
                        <p>Monday - Tuesday: 12pm - 10pm</p>
                        <p>Thursday - Friday: 12pm - 9pm</p>
                        <p>Saturday: 9am - 9pm</p>
                    </div>
                        
                    {/* Dessert column */}
                    <div className="column">
                        <div className="container">
                            <figure className="figure">
                                <img src={require("../../assets/chef3.jpg")} alt="chef" className="about-img" />
                            </figure>
                            <figure className="figure">
                                <iframe
                                    className="google-map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.3678110897604!2d-118.50001164925516!3d34.00876857737219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4d74d5ea79b%3A0xcd9a111aced18f4d!2sSanta%20Monica%20Pier!5e0!3m2!1sen!2sus!4v1679094505744!5m2!1sen!2sus"
                                    // width="600"
                                    // width="auto"
                                    width="100%"
                                    // height="100%"
                                    // height="auto"
                                    height="450"
                                    title="Google Map of Santa Monica, CA, USA"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </figure>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default About;