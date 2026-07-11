import React, { useEffect, useState } from "react";
import { getAllBookings } from "../../services/bookingService";

function PendingBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPendingBookings();
  }, []);

  const loadPendingBookings = async () => {
    try {
      const res = await getAllBookings();

      const pending = res.data.bookings.filter((booking) =>
        [
          "Pending",
          "Confirmed",
          "Technician Assigned",
          "On The Way",
        ].includes(booking.status)
      );

      setBookings(pending);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="page-container">
      <h1
        style={{
          marginBottom: "25px",
          color: "#1e3a8a",
        }}
      >
        🕒 Pending Bookings
      </h1>

      {bookings.length === 0 ? (
        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 4px 15px rgba(0,0,0,.08)",
          }}
        >
          <h3>No Pending Bookings Found</h3>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          {bookings.map((booking) => (
            <div
              key={booking._id}
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "15px",
                boxShadow: "0 5px 15px rgba(0,0,0,.08)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h3>{booking.serviceName}</h3>

                <p>
                  <strong>Customer:</strong>{" "}
                  {booking.customerName}
                </p>

                <p>
                  <strong>Date:</strong>{" "}
                  {booking.bookingDate}
                </p>

                <p>
                  <strong>Time:</strong>{" "}
                  {booking.bookingTime}
                </p>

                <p>
                  <strong>Amount:</strong> ₹
                  {booking.servicePrice}
                </p>
              </div>

              <span
                style={{
                  background: "#f59e0b",
                  color: "#fff",
                  padding: "10px 18px",
                  borderRadius: "25px",
                  fontWeight: "bold",
                }}
              >
                {booking.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PendingBookings;