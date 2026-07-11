import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaUserTie,
  FaTools,
  FaCalendarCheck,
  FaExclamationTriangle,
  FaStar,
  FaBell,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function AdminSidebar({ sidebarOpen }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/admin/login");
  };

  const menu = [
    {
      title: "Dashboard",
      icon: <FaHome />,
      path: "/admin/dashboard",
    },
    {
      title: "Users",
      icon: <FaUsers />,
      path: "/admin/users",
    },
    {
      title: "Providers",
      icon: <FaUserTie />,
      path: "/admin/providers",
    },
    {
      title: "Services",
      icon: <FaTools />,
      path: "/admin/services",
    },
    {
      title: "Bookings",
      icon: <FaCalendarCheck />,
      path: "/admin/bookings",
    },
    {
      title: "Complaints",
      icon: <FaExclamationTriangle />,
      path: "/admin/complaints",
    },
    {
      title: "Reviews",
      icon: <FaStar />,
      path: "/admin/reviews",
    },
    {
      title: "Notifications",
      icon: <FaBell />,
      path: "/admin/notifications",
    },
    {
      title: "Reports",
      icon: <FaChartBar />,
      path: "/admin/reports",
    },
    {
      title: "Settings",
      icon: <FaCog />,
      path: "/admin/settings",
    },
  ];

  return (
    <aside className={sidebarOpen ? "sidebar" : "sidebar collapsed"}>
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">🏠</div>

        {sidebarOpen && (
          <div>
            <h2>SmartServe</h2>
            <span>ADMIN PANEL</span>
          </div>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-menu">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            {item.icon}
            {sidebarOpen && <span>{item.title}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <button className="logout-btn" onClick={logout}>
          <FaSignOutAlt />
          {sidebarOpen && <span>Logout</span>}
        </button>

        {sidebarOpen && (
          <small>
            SmartServe
            <br />
            Version 2.0
          </small>
        )}
      </div>
    </aside>
  );
}

export default AdminSidebar;