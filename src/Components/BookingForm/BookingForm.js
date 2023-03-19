import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";

function BookingForm(props) {
    const [booking, setBooking] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: "",
    })
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        date: false,
        time: false,
        guests: false,
    })
    const [validations, setValidations] = useState({
        name: false,
        email: false,
        date: false,
        time: false,
        guests: false,
    })

    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(validations).some((value) => !value)) {
            setTouched({
                name: true,
                email: true,
                date: true,
                time: true,
                guests: true,
            });
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

    const handleReset = () => {
        setBooking({
            name: "",
            email: "",
            date: "",
            time: "",
            guests: "",
        });
        setTouched({
            name: false,
            email: false,
            date: false,
            time: false,
            guests: false,
        });
        setValidations({
            name: false,
            email: false,
            date: false,
            time: false,
            guests: false,
        });
        setIsSubmitted(false);
        navigate("/menu");
    };

    const emailValidation = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

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

                    <p>
                        <label htmlFor="email"> Email: </label>
                        <input
                            type="email"
                            id="email"
                            value={booking.email}
                            style={{ border: touched.email && !validations.email ? "solid red 1.5px" : "" }}
                            required=""
                            onChange={(e) => {
                                setBooking({ ...booking, email: e.target.value });
                                setValidations({ ...validations, email: emailValidation.test(e.target.value) })
                            }}
                            onBlur={() => setTouched({ ...touched, email: true })}
                        />
                        {
                            <span style={{ display: touched.email && !validations.email ? "" : "none" }} >
                                {"Please enter a valid email"}
                            </span>
                        }
                    </p>

                    <p>
                        <label htmlFor="reservation-date"> Choose date </label>
                        <input
                            type="date"
                            id="reservation-date"
                            value={booking.date}
                            required=""
                            onChange={(e) => {
                                props.dispatch({ date: e.target.value });
                                setBooking({ ...booking, date: e.target.value });
                                setValidations({
                                    ...validations, date: new Date(booking.time
                                        ? `${e.target.value} ${booking.time}`
                                        : `${e.target.value} 00:00`
                                    ).getTime() >= new Date().getTime()
                                });
                            }}
                            style={{ border: touched.date && !validations.date ? "solid red 1.5px" : "" }}
                            onBlur={() => setTouched({ ...touched, date: true })}
                        />
                        {<span style={{ display: touched.date && !validations.date ? "" : "none" }}>
                            {booking.date ? "No reservation is avaliable in the past" : "Please choose a valid date"}
                        </span>}
                    </p>

                    <p>
                        <label htmlFor="reservation-time"> Choose time </label>
                        <select
                            id="reservation-time"
                            value={booking.time}
                            onChange={(e) => {
                                setBooking({ ...booking, time: e.target.value });
                                setValidations({
                                    ...validations,
                                    time: props.availableTimes.list.some(
                                        (time) => time === e.target.value),
                                    date: new Date(
                                        e.target.value
                                            ? `${booking.date} ${e.target.value}`
                                            : `${booking.date} 00:00`
                                    ).getTime() >= new Date().getTime(),
                                });
                            }}
                            onBlur={() => { setTouched({ ...touched, time: true, }) }}
                            style={{ border: touched.time && !validations.date ? "solid red 1.5px" : "", }}
                        >
                            <option />
                            {props.availableTimes.list
                                ? props.availableTimes.list.map((time) => {
                                    return (
                                        <option key={time} value={time}>
                                            {time}
                                        </option>
                                    )
                                })
                                : ""}
                        </select>
                        {<span style={{
                            display: touched.date && touched.time && !validations.date
                                ? ""
                                : "none"
                        }}>
                            {booking.time
                                ? "You can't make a reservation in the past"
                                : "Please choose a valid time"}
                        </span>}
                    </p>

                    <p>
                        <label htmlFor="guests"> Number of guests </label>
                        <input
                            type="number"
                            id="guests"
                            value={booking.guests}
                            min="1"
                            max="10"
                            placeholder="Number between 1 to 10"
                            onChange={(e) => {
                                setBooking({...booking, guests: e.target.value})
                                setValidations({...validations, guests: e.target.value > 0 && e.target.value <= 10});
                            }}                                                        
                            onBlur={() => {setTouched({...touched, guests: true})}}
                            style={{ border: touched.guests && !validations.guests
                                ? "solid red 1.5px"
                                : ""
                            }}
                        />
                        {<span style={{ display: touched.guests && !validations.guests ? "" : "none" }}>
                            {"1-10"}
                            </span>}
                    </p>
                    <button
                        type="submit"
                        className="btn"
                        id="button"
                        disabled={Object.values(validations).some((na) => !na)}
                    > Reserve </button>
                </form>
            ) : (
                <div>
                    <p>Thank you {booking.name} for making a reservation on {booking.date}. </p>
                    <p> We are looking forward to seeing you soon! </p>
                    <button className="reset-button" onClick={handleReset}> Check out our menu </button>
                </div>
            )
            }
        </>
    )

}

export default BookingForm;

