import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm() {
    const [booking, setBooking] = useState({
        name: "",
    })
    const [touched, setTouched] = useState({
        name: false,
    })
    const [validations, setValidations] = useState({
        name: false,
    })
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(validations).some((value) => !value)) {
            setTouched({ name: true, }
            );
            return undefined;
        }
        const nameIsValid = booking.name.trim() !== '' && booking.name.length <= 200;
        if (!nameIsValid) {
            setTouched({ name: true });
            setValidations({ name: false });
            return;
          }
        setIsSubmitted(true)
        console.log("submitted")
    }
    return (
        <>
            {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="booking-form">
                    <h1 className="booking-title"> {isSubmitted ? "Thank you" : "Make a reservation"} </h1>
                    <p>
                        <label htmlFor="name"> Name: </label>
                        <input
                            type="text"
                            id="name"
                            value={booking.name}
                            style={{ border: touched.name && !validations.name ? "solid red 1.5px" : "" }}
                            required=""
                            placeholder="Your Name"
                            maxLength={200}
                            onChange={(e) => {
                                setBooking({ ...booking, name: e.target.value });
                                setValidations({ ...validations, name: e.target.value !== "" })
                            }}
                            onBlur={() => setTouched({ ...touched, name: true })}
                        />
                        {
                            <span style={{ display: touched.name && !validations.name ? "" : "none" }} >
                                {"Please enter your name"}
                            </span>
                        }
                    </p>

                    <button
                        type="submit"
                        className="btn"
                        disabled={Object.values(validations).some((na) => !na)}
                    > Reserve </button>
                </form>
            ) : (
                <div>
                    <p>Thank you {booking.name} for making a reservation. </p>
                </div>
            )}
        </>
    )

}

export default BookingForm;