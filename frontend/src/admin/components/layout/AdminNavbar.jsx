import React from "react";
import {
  FaBars,
  FaSearch,
  FaBell,
  FaMoon,
  FaUserCircle,
} from "react-icons/fa";

function AdminNavbar({ sidebarOpen, setSidebarOpen }) {

  const today = new Date();

  const hour = today.getHours();

  let greeting = "Good Morning";

  if (hour >= 12 && hour < 17)
    greeting = "Good Afternoon";

  if (hour >= 17)
    greeting = "Good Evening";

  const date = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (

    <header className="admin-navbar">

      <div className="navbar-left">

        <button
          className="menu-btn"
          onClick={() =>
            setSidebarOpen(!sidebarOpen)
          }
        >
          <FaBars />
        </button>

        <div>

          <h2>
            {greeting}, Admin 👋
          </h2>

          <p>{date}</p>

        </div>

      </div>

      <div className="navbar-right">

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search users, bookings..."
          />

        </div>

        <button className="icon-btn">
          <FaMoon />
        </button>

        <button className="icon-btn notification-btn">

          <FaBell />

          <span className="badge">
            3
          </span>

        </button>

        <div className="admin-profile">

          <FaUserCircle className="profile-icon" />

          <div>

            <h4>Administrator</h4>

            <small>SmartServe</small>

          </div>

        </div>

      </div>

    </header>

  );

}

export default AdminNavbar;