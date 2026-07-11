import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserShield,
  FaUser,
  FaLock,
} from "react-icons/fa";
import { toast } from "react-toastify";

import { loginUser } from "../../services/authService";

import "../styles/admin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await loginUser(formData);

      if (!response.data.success) {
        toast.error(response.data.message);
        return;
      }

      const { token, user } = response.data;

      if (user.role !== "admin") {
        toast.error("Access Denied. Admin only.");
        return;
      }

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Welcome Admin!");

      navigate("/admin/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">

      <div className="admin-login-card">

        <div className="admin-logo">
          <FaUserShield className="admin-login-icon" />
        </div>

        <h1>Admin Login</h1>

        <p className="admin-subtitle">
          Welcome to SmartServe Administration Panel
        </p>

        <form onSubmit={handleSubmit}>

          <div className="admin-input">

            <FaUser className="input-icon" />

            <input
              type="email"
              name="email"
              placeholder="Admin Email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />

          </div>

          <div className="admin-input">

            <FaLock className="input-icon" />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />

          </div>

          <button
            type="submit"
            className="admin-login-btn"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

        <div className="admin-footer">
          <p>SmartServe Admin Panel © 2026</p>
        </div>

      </div>

    </div>
  );
}

export default AdminLogin;