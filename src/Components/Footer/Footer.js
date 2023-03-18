import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";
import { contactData, socialMedia } from "../../data/contact-data";

function Footer() {
    const navigate = useNavigate();
    return (
        <footer className="footer">
            <img onClick={() => navigate("/")}src={require("../../assets/logo2-sea-turtle-clear.png")} alt="sea turtle logo" className="footer-logo"></img>
            <div className="footer-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                </ul>
            </div>
            <div className="footer-menu">
                {contactData.map((contact, index) => {
                    return (
                        <ul key={index}>
                            <li>
                                {contact}
                            </li>
                        </ul>
                    )
                })}
            </div>
            <div className="footer-menu">
                {socialMedia.map((contact, index) => {
                    return (
                        <ul key={index}>
                            <li>
                                {contact}
                            </li>
                        </ul>
                    )
                })}
            </div>
            <div className="footer-menu">
                <p className="copyright"> Site design / logo @Mandy Tsang 2023. All rights reserved. </p>
            </div>
        </footer>
    )
}

export default Footer;