import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getAllBookings,
  getMyBookings,
} from "../services/bookingService";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {

  const [bookings, setBookings] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const loadBookings = async () => {

    try {

      let res;

      if (user?.role === "admin") {

        res = await getAllBookings();

      } else {

        res = await getMyBookings();

      }

      setBookings(res.data.bookings || []);

    } catch (err) {

      console.log("Booking Context Error:", err);

      setBookings([]);

    }

  };

  useEffect(() => {

    if (user) {

      loadBookings();

    }

  }, []);

  return (

    <BookingContext.Provider
      value={{
        bookings,
        setBookings,
        loadBookings,
      }}
    >

      {children}

    </BookingContext.Provider>

  );

};

export const useBooking = () =>
  useContext(BookingContext);