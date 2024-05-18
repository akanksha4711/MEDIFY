import React, { useState } from 'react';
import './BookingComponent.css'; // Assuming styles.css contains the .selected class

const BookingComponent = ({ time, name, address, city, state, zipcode, rating, getDate, num, bookings, setBookings }) => {
    const handleClick = () => {
        const bookingTime = `${getDate(num)} ${time}`;
        const isAlreadySelected = bookings.some(bk => bk.time === bookingTime);

        if (isAlreadySelected) {
            setBookings(bookings.filter(bk => bk.time !== bookingTime));
        } else {
            setBookings([...bookings, { name, address, city, state, zipcode, rating, time: bookingTime }]);
        }
    };

    const isSelected = bookings.some(bk => bk.time === `${getDate(num)} ${time}`);

    return (
        <span className={isSelected ? 'selected' : ''} onClick={handleClick} style={{
                border: "1px solid #2AA7FF",
                padding: "8px",
                borderRadius: "5px",
                color: "#2AA7FF",
                cursor:"pointer"
            }}>
            {time}
        </span>
    );
};

export default BookingComponent;