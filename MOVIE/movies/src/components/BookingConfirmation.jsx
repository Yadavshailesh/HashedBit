import React from "react";
import { useLocation } from "react-router-dom";
import "./BookingConfirmation.css";

const BookingConfirmation = () => {
  const location = useLocation();
  const { formData, bookingId } = location.state;

  return (
    <div className="confirmation">
      <h2>Your Seat has been booked successfully!</h2>
      <p>Booking ID: {bookingId}</p>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Mobile: {formData.mobile}</p>
      <button onClick={() => (window.location.href = "/")}>
        Back to Movie List
      </button>
    </div>
  );
};

export default BookingConfirmation;
