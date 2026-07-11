

import React from "react";

function ProviderDashboard() {
  const services = 12;
  const bookings = 48;
  const earnings = 32500;
  const rating = 4.8;

  return (
    <div className="page-container">
      <h1 style={{ marginBottom: "25px" }}>Provider Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        <div className="card">
          <h3>Total Services</h3>
          <h2>{services}</h2>
        </div>

        <div className="card">
          <h3>Total Bookings</h3>
          <h2>{bookings}</h2>
        </div>

        <div className="card">
          <h3>Earnings</h3>
          <h2>₹{earnings}</h2>
        </div>

        <div className="card">
          <h3>Rating</h3>
          <h2>⭐ {rating}</h2>
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Recent Bookings</h2>

        <table style={{ width: "100%", marginTop: "15px" }}>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Service</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rahul</td>
              <td>Electrician</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Anjali</td>
              <td>Plumber</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>Vikram</td>
              <td>Home Cleaning</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProviderDashboard;