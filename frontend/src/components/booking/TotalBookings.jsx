import React, { useEffect, useState } from "react";
import { getAllBookings } from "../../services/bookingService";

function TotalBookings() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBookings();
  }, []);

  useEffect(() => {
    const filtered = bookings.filter(
      (booking) =>
        booking.customerName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        booking.serviceName
          .toLowerCase()
          .includes(search.toLowerCase())
    );

    setFilteredBookings(filtered);
  }, [search, bookings]);

  const loadBookings = async () => {
    try {
      const res = await getAllBookings();

      setBookings(res.data.bookings);
      setFilteredBookings(res.data.bookings);
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
          color: "#1e3a8a",
          marginBottom: "20px",
        }}
      >
        📋 Total Bookings
      </h1>

      <input
        type="text"
        placeholder="Search Customer or Service..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "25px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />

      <div
        style={{
          background: "#fff",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 5px 15px rgba(0,0,0,.08)",
        }}
      >

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >

          <thead
            style={{
              background: "#2563eb",
              color: "#fff",
            }}
          >
            <tr>
              <th style={{ padding: "15px" }}>Customer</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {filteredBookings.map((booking) => (

              <tr
                key={booking._id}
                style={{
                  borderBottom: "1px solid #eee",
                  textAlign: "center",
                }}
              >

                <td style={{ padding: "15px" }}>
                  {booking.customerName}
                </td>

                <td>{booking.serviceName}</td>

                <td>{booking.bookingDate}</td>

                <td>{booking.bookingTime}</td>

                <td>₹{booking.servicePrice}</td>

                <td>

                  <span
                    style={{
                      padding: "6px 12px",
                      borderRadius: "20px",
                      color: "#fff",
                      background:
                        booking.status === "Completed"
                          ? "#16a34a"
                          : booking.status === "Cancelled"
                          ? "#dc2626"
                          : "#f59e0b",
                    }}
                  >
                    {booking.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default TotalBookings;