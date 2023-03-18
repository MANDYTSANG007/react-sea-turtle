import React, { useState } from "react";
import "./Booking.css";

function Booking() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuests] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    }

    const handleReset = () => {
        setName("");
        setDate("");
        setTime("");
        setGuests("");
        setIsSubmitted(false);
    }

    const handleTimeChange = (e) => {
        setTime(e.target.value)
    }
    const timeOptions = [ "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM", "6:00PM", "7:00PM", "8:00PM", "9:00PM"]
    
    return (
        <section className="booking-section">
            <article className="booking-article">
                <h1 className="booking-title"> {isSubmitted ? "Thank you" : "Make a reservation"} </h1>
                <div className="booking-row">
                    <div className="column">
                        {!isSubmitted ? (                   
                            <form onSubmit={handleSubmit} className="form">
                                <p>
                                    <label>Name:</label>
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        placeholder="Your Name"
                                        maxLength={200}
                                        required=""
                                        id="first-name">
                                    </input>
                                </p>
                                <p>
                                    <label>Reservation date:</label>
                                    <input 
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        type="date" 
                                        required="" 
                                        id="reservation-date">
                                    </input>
                                </p>

                                <p>
                                    <label>Reservation time</label>
                                    {timeOptions.map((option) => (
                                        <button
                                            key={option}
                                            type="button"
                                            className={time === option ? "time-button active" : "time-button"}
                                            onClick={() => handleTimeChange({target: {value: option}})}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </p>

                                <p>
                                    <label>Number of guests:</label>
                                    <input 
                                        value={guest}
                                        onChange={(e) => setGuests(e.target.value)}
                                        type="number" 
                                        required="" 
                                        min="1" 
                                        max="10" 
                                        id="guests" 
                                        placeholder="Choose between 1 to 10">
                                    </input>
                                </p>
                                <button type="submit" id="button"> Reserve </button>
                            </form>
                        ) : (
                            <div>
                                <p> Thank you {name} for making a reservation on {date} at {time} for {guest} guests. </p>
                                <p> We are looking forward to seeing you soon! </p>
                                <button className="reset-button" onClick={handleReset}> Make another reservation </button>
                            </div>
                        )}
                    </div>
                    <div className="column">
                        <img src={require('../../assets/farm-produce.jpg')} alt="farm produce" className="booking-img"/>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Booking;