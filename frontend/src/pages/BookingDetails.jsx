import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import { getBookingById } from "../services/bookingService";

function BookingDetails() {
  const { id } = useParams();

  const [booking, setBooking] = useState(null);

  useEffect(() => {
    loadBooking();
  }, []);

  const loadBooking = async () => {
    try {
      const res = await getBookingById(id);
      setBooking(res.data.booking);
    } catch (err) {
      console.log(err);
    }
  };

  if (!booking) {
    return (
      <DashboardLayout>
        <h2 style={{ textAlign: "center", marginTop: "80px" }}>
          Loading...
        </h2>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div
        style={{
          maxWidth: "700px",
          margin: "40px auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0,0,0,.1)",
        }}
      >
        <h1
          style={{
            color: "#2563eb",
            marginBottom: "25px",
          }}
        >
          Booking Details
        </h1>

        <p><strong>Booking ID:</strong> {booking._id}</p>

        <p><strong>Customer:</strong> {booking.customerName}</p>

        <p><strong>Email:</strong> {booking.email}</p>

        <p><strong>Phone:</strong> {booking.phone}</p>

        <p><strong>Address:</strong> {booking.address}</p>

        <p><strong>Service:</strong> {booking.serviceName}</p>

        <p><strong>Price:</strong> ₹{booking.servicePrice}</p>

        <p><strong>Date:</strong> {booking.bookingDate}</p>

        <p><strong>Time:</strong> {booking.bookingTime}</p>

        <p><strong>Payment:</strong> {booking.paymentMethod}</p>

        <p><strong>Status:</strong> {booking.status}</p>
      </div>
    </DashboardLayout>
  );
}

export default BookingDetails;