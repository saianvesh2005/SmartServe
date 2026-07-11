import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../components/dashboard/DashboardLayout";
import UserStats from "../components/dashboard/UserStats";
import { getAllBookings } from "../services/bookingService";

import "../styles/dashboard.css";

function UserDashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const [bookings, setBookings] = useState([]);
  const [profileCompletion, setProfileCompletion] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const res = await getAllBookings();

      const latestBookings = (res.data.bookings || [])
        .sort(
          (a, b) =>
            new Date(b.createdAt) - new Date(a.createdAt)
        )
        .slice(0, 5);

      setBookings(latestBookings);

      calculateProfile();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const calculateProfile = () => {
    let filled = 0;

    const currentUser =
      JSON.parse(localStorage.getItem("user")) || {};

    if (currentUser.name) filled++;
    if (currentUser.email) filled++;
    if (currentUser.phone) filled++;
    if (currentUser.address) filled++;

    setProfileCompletion(
      Math.round((filled / 4) * 100)
    );
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <DashboardLayout>
      <div className="dashboard-container">

        {/* Header */}

        <div className="dashboard-header">

          <div>
            <h1>
              Welcome, {user.name || "User"} 👋
            </h1>

            <p>
              Manage all your SmartServe bookings from one place.
            </p>
          </div>

        </div>

        {/* Statistics */}

        <UserStats />

        <div className="dashboard-main">

          {/* Recent Bookings */}

          <div className="dashboard-card">

            <h2>Recent Bookings</h2>

            {loading ? (

              <p>Loading...</p>

            ) : bookings.length === 0 ? (

              <p
                style={{
                  textAlign: "center",
                  color: "#64748b",
                  marginTop: "20px",
                }}
              >
                No Recent Bookings
              </p>

            ) : (

              bookings.map((booking) => (

                <div
                  key={booking._id}
                  className="booking-item"
                >

                  <div className="booking-left">

                    <h3>{booking.serviceName}</h3>

                    <p>
                      📅 {booking.bookingDate}
                    </p>

                    <p>
                      🕒 {booking.bookingTime}
                    </p>

                    <p>
                      💰 ₹{booking.servicePrice}
                    </p>

                  </div>

                  <span
                    className={`booking-status ${booking.status
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    {booking.status}
                  </span>

                </div>

              ))

            )}

          </div>

          {/* Right Side */}

          <div>

            <div className="dashboard-card">

              <h2>Quick Actions</h2>

              <div className="action-grid">

                <button
                  className="action-btn"
                  onClick={() => navigate("/services")}
                >
                  Book Service
                </button>

                <button
                  className="action-btn"
                  onClick={() =>
                    navigate("/booking-history")
                  }
                >
                  Booking History
                </button>

                <button
                  className="action-btn"
                  onClick={() =>
                    navigate("/wishlist")
                  }
                >
                  Wishlist
                </button>

                <button
                  className="action-btn"
                  onClick={() =>
                    navigate("/profile")
                  }
                >
                  Profile
                </button>

              </div>

            </div>

            <div
              className="dashboard-card"
              style={{ marginTop: "25px" }}
            >

              <h2>Profile Completion</h2>

              <div className="profile-progress">

                <p>
                  {profileCompletion}% Completed
                </p>

                <div className="progress-bar">

                  <div
                    className="progress-fill"
                    style={{
                      width: `${profileCompletion}%`,
                    }}
                  ></div>

                </div>

              </div>

              <button
                className="logout-btn"
                onClick={logout}
              >
                Logout
              </button>

            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default UserDashboard;