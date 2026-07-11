import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaChevronDown,
  FaUser,
  FaUserShield,
} from "react-icons/fa";

import "../../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const dropdownRef = useRef(null);

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () =>
      document.removeEventListener("click", closeMenu);
  }, []);

  return (
    <nav className="navbar">

      {/* Left */}

      <div className="navbar-left">

        {user && (
          <button
            className="menu-button"
            onClick={() => navigate("/dashboard")}
          >
            <FaBars />
          </button>
        )}

        <Link className="logo" to="/">
          SmartServe
        </Link>

      </div>

      {/* Center */}

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/services">Services</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

      {/* Right */}

      <div className="auth-buttons">

        {user ? (
          <>
            <span className="welcome-user">
              👋 {user.name}
            </span>

            <button
              className="register-btn"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <div
              className="login-dropdown"
              ref={dropdownRef}
            >

              <button
                type="button"
                className="login-btn"
                onClick={() =>
                  setShowMenu(!showMenu)
                }
              >
                Login
                <FaChevronDown />
              </button>

              {showMenu && (
                <div className="dropdown-menu">

                  <Link
                    to="/login"
                    onClick={() =>
                      setShowMenu(false)
                    }
                  >
                    <FaUser />
                    User Login
                  </Link>

                  <Link
                    to="/admin/login"
                    onClick={() =>
                      setShowMenu(false)
                    }
                  >
                    <FaUserShield />
                    Admin Login
                  </Link>

                </div>
              )}

            </div>

            <Link to="/register">
              <button className="register-btn">
                Register
              </button>
            </Link>

          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;