import React from "react";
import {
  FaBars,
  FaHome,
  FaUser,
  FaClipboardList,
  FaCheckCircle,
  FaClock,
  FaHeart,
  FaHistory,
  FaMapMarkerAlt,
  FaExclamationCircle,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import SidebarItem from "./SidebarItem";
import "../../styles/sidebar.css";

function Sidebar({ open, setOpen }) {
  const user =
    JSON.parse(localStorage.getItem("user")) || {
      name: "Sai Anvesh Reddy",
      email: "saianveshreddybommineni@gmail.com",
    };

  return (
    <div className={open ? "sidebar open" : "sidebar closed"}>

      <div className="sidebar-top">

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          <FaBars />
        </button>

        <h2>SmartServe</h2>

      </div>

      <div className="profile-box">

        <img
          src="https://ui-avatars.com/api/?name=Sai+Anvesh&background=2563eb&color=fff"
          alt="profile"
        />

        <h3>{user.name}</h3>

        <p>{user.email}</p>

      </div>

      <div className="sidebar-menu">

        <SidebarItem icon={<FaHome />} text="Dashboard" link="/dashboard" />

        <SidebarItem icon={<FaUser />} text="Profile" link="/profile" />

        <SidebarItem
          icon={<FaClipboardList />}
          text="Total Bookings"
          link="/booking-history"
        />

        <SidebarItem
          icon={<FaCheckCircle />}
          text="Completed"
          link="/booking-history"
        />

        <SidebarItem
          icon={<FaClock />}
          text="Pending"
          link="/booking-history"
        />

        <SidebarItem
          icon={<FaHeart />}
          text="Wishlist"
          link="/wishlist"
        />

        <SidebarItem
          icon={<FaHistory />}
          text="Booking History"
          link="/booking-history"
        />

        <SidebarItem
          icon={<FaMapMarkerAlt />}
          text="Track Booking"
          link="/booking-status"
        />

        <SidebarItem
          icon={<FaExclamationCircle />}
          text="Complaints"
          link="/complaints"
        />

        <SidebarItem
          icon={<FaCog />}
          text="Settings"
          link="/profile"
        />

      </div>

      <button
        className="logout-btn"
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
      >
        <FaSignOutAlt />
        Logout
      </button>

    </div>
  );
}

export default Sidebar;