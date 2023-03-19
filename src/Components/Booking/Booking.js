import React, { useReducer } from "react";
import "./Booking.css";
import BookingForm from "../BookingForm/BookingForm";
import { fetchAPI, submitAPI } from "../../bookingAPI";

export const initializeTimes = () => {
    return { list: fetchAPI(new Date()) }
};

// Reducer
export const updateTimes = (state, action) => 
    action.date !== undefined ? { list: fetchAPI(new Date(action.date))} : state;

function Booking() {
    const initialState = initializeTimes();
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initialState);
    return (
        <section className="booking-section">
            <article className="booking-article">
                <div className="booking-row">
                    <div className="column">

                        <BookingForm availableTimes={availableTimes} dispatch={setAvailableTimes} submit={submitAPI} />

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