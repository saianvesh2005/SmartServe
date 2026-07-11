import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import DashboardLayout from "../components/dashboard/DashboardLayout";

import {
  getMyBookings,
  cancelBooking,
} from "../services/bookingService";

import "../styles/dashboard.css";

function BookingHistory() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const response = await getMyBookings();

      const latestBookings = response.data.bookings.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setBookings(latestBookings);
    } catch (error) {
      console.log(error);
      toast.error("Unable to load bookings");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (id) => {
    if (!window.confirm("Cancel this booking?")) return;

    try {
      await cancelBooking(id);

      toast.success("Booking Cancelled Successfully");

      loadBookings();
    } catch (error) {
      toast.error("Unable to cancel booking");
    }
  };

const handleTrack = (id) => {
  navigate(`/booking-status/${id}`);
};

  const handleDetails = (id) => {
    navigate(`/booking-details/${id}`);
  };

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.customerName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      booking.serviceName
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="page-container">

        <h1
          style={{
            marginBottom: "25px",
            color: "#2563eb",
          }}
        >
          Booking History
        </h1>

        <input
          type="text"
          placeholder="Search by Customer or Service..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "25px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "15px",
          }}
        />

        {loading ? (
          <h3 style={{ textAlign: "center" }}>
            Loading...
          </h3>
        ) : filteredBookings.length === 0 ? (
          <h3 style={{ textAlign: "center" }}>
            No Bookings Found
          </h3>
        ) : (
          <div className="booking-grid">

            {filteredBookings.map((booking) => (

              <div
                key={booking._id}
                className="booking-card"
              >

                <h2>{booking.serviceName}</h2>

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
                  <strong>Payment:</strong>{" "}
                  {booking.paymentMethod}
                </p>

                <p>
                  <strong>Amount:</strong> ₹
                  {booking.servicePrice}
                </p>

                <p>
                  <strong>Status:</strong>{" "}

                  <span
                    style={{
                      background:
                        booking.status === "Completed"
                          ? "#16a34a"
                          : booking.status === "Pending"
                          ? "#f59e0b"
                          : booking.status === "Cancelled"
                          ? "#dc2626"
                          : "#2563eb",

                      color: "#fff",
                      padding: "6px 14px",
                      borderRadius: "20px",
                      marginLeft: "10px",
                      fontWeight: "600",
                    }}
                  >
                    {booking.status}
                  </span>

                </p>

                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >

                  <button
                    className="action-btn"
                    onClick={() =>
                      handleDetails(booking._id)
                    }
                  >
                    View Details
                  </button>

                  {booking.status !== "Completed" &&
                    booking.status !== "Cancelled" && (

                      <button
                        className="action-btn"
                        onClick={() =>
                          handleTrack(booking._id)
                        }
                      >
                        Track
                      </button>

                    )}

                  {booking.status === "Pending" && (

                    <button
                      className="logout-btn"
                      style={{
                        padding: "10px 18px",
                      }}
                      onClick={() =>
                        handleCancel(booking._id)
                      }
                    >
                      Cancel
                    </button>

                  )}

                </div>

              </div>

            ))}

          </div>
        )}

      </div>
    </DashboardLayout>
  );
}

export default BookingHistory;