import { useNavigate } from "react-router-dom";
import "../../styles/bookingStatus.css";

function BookingStatus() {
  const navigate = useNavigate();

  return (
    <div className="booking-status-page">

      <div className="status-card">

        <h1>📍 Track Your Booking</h1>

        <div className="booking-id-box">
          Booking ID : <strong>BK968522</strong>
        </div>

        <div className="status-badge">
          ✅ Booking Confirmed
        </div>

        <div className="timeline">

          <div className="timeline-item completed">
            <div className="circle">✔</div>
            <div className="content">
              <h3>Booking Confirmed</h3>
              <p>Your booking has been successfully confirmed.</p>
            </div>
          </div>

          <div className="timeline-item completed">
            <div className="circle">✔</div>
            <div className="content">
              <h3>Technician Assigned</h3>
              <p>Rahul Sharma has accepted your booking.</p>
            </div>
          </div>

          <div className="timeline-item active">
            <div className="circle">🚗</div>
            <div className="content">
              <h3>Technician On The Way</h3>
              <p>Estimated Arrival: 30 Minutes</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="circle">⏳</div>
            <div className="content">
              <h3>Service In Progress</h3>
            </div>
          </div>

          <div className="timeline-item">
            <div className="circle">🏁</div>
            <div className="content">
              <h3>Service Completed</h3>
            </div>
          </div>

        </div>

        <div className="technician-card">

          <h2>👨 Technician Details</h2>

          <p><strong>Name:</strong> Rahul Sharma</p>

          <p><strong>Experience:</strong> 8 Years</p>

          <p><strong>Rating:</strong> ⭐ 4.9</p>

          <p><strong>Phone:</strong> +91 9876543210</p>

        </div>

        <button
          className="back-home-btn"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>

      </div>

    </div>
  );
}

export default BookingStatus;