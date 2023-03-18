import React from "react";
import "./Booking.css";
import BookingForm from "../BookingForm/BookingForm";

function Booking() {
    return (
        <section className="booking-section">
            <article className="booking-article">
                <div className="booking-row">
                    <div className="column">

                        <BookingForm />

                    </div>
                    <div className="column">
                        <img src={require('../../assets/farm-produce.jpg')} alt="farm produce" className="booking-img" />
                        <p className="slogan">From Our Farms to Your Table.</p>
                    </div>
                </div>
            </article>
        </section>
    )
}
export default Booking;