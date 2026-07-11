import React from "react";
import AdminLayout from "../components/layout/AdminLayout";
import { useEffect, useState } from "react";
import { getDashboardStats } from "../../services/adminService";
import {
  FaUsers,
  FaUserTie,
  FaTools,
  FaCalendarCheck,
  FaRupeeSign,
  FaClipboardCheck,
  FaClock,
  FaTimesCircle,
  FaArrowUp,
  FaPlus,
  FaBell,
  FaChartLine,
} from "react-icons/fa";

function AdminDashboard() {

const [stats, setStats] = useState([]);
const [dashboard, setDashboard] = useState(null);

useEffect(() => {

    loadDashboard();

}, []);

const loadDashboard = async () => {

    try {

        const res = await getDashboardStats();

        setDashboard(res.data);

        setStats([
            {
                title: "Users",
                value: res.data.users,
                icon: <FaUsers />,
                color: "#2563eb",
            },
            {
                title: "Services",
                value: res.data.services,
                icon: <FaTools />,
                color: "#f97316",
            },
            {
                title: "Bookings",
                value: res.data.bookings,
                icon: <FaCalendarCheck />,
                color: "#22c55e",
            },
            {
                title: "Revenue",
                value: `₹${res.data.revenue}`,
                icon: <FaRupeeSign />,
                color: "#7c3aed",
            },
            {
                title: "Completed",
                value: res.data.completed,
                icon: <FaClipboardCheck />,
                color: "#16a34a",
            },
            {
                title: "Pending",
                value: res.data.pending,
                icon: <FaClock />,
                color: "#f59e0b",
            },
            {
                title: "Cancelled",
                value: res.data.cancelled,
                icon: <FaTimesCircle />,
                color: "#ef4444",
            },
            {
                title: "Complaints",
                value: res.data.complaints,
                icon: <FaBell />,
                color: "#dc2626",
            },
        ]);

    } catch (err) {

        console.log(err);

    }

};

  return (

    <AdminLayout>

      <div className="admin-dashboard">

        {/* Hero */}

        <div className="dashboard-hero">

          <div>

            <h1>Welcome Back 👋</h1>

            <p>

              Monitor users, providers, bookings,
              complaints and revenue from one place.

            </p>

          </div>

          <button className="primary-btn">

            <FaPlus />

            Add Service

          </button>

        </div>

        {/* Cards */}

        <div className="stats-grid">

          {stats.map((item,index)=>(

            <div
              className="stat-card"
              key={index}
            >

              <div
                className="stat-icon"
                style={{
                  background:item.color
                }}
              >

                {item.icon}

              </div>

              <div className="stat-info">

                <h5>{item.title}</h5>

                <h2>{item.value}</h2>

                <small>

                  <FaArrowUp />

                  +12% this month

                </small>

              </div>

            </div>

          ))}

        </div>

        {/* Middle */}

        <div className="dashboard-middle">

          <div className="dashboard-card">

            <div className="card-header">

              <h2>Recent Bookings</h2>

              <button className="secondary-btn">

                View All

              </button>

            </div>

            <table className="dashboard-table">

              <thead>

                <tr>

                  <th>Customer</th>

                  <th>Service</th>

                  <th>Status</th>

                  <th>Amount</th>

                </tr>

              </thead>

             <tbody>

  <tr>
    <td>Sai Anvesh</td>
    <td>Electrician</td>
    <td>
      <span className="pending">
        Pending
      </span>
    </td>
    <td>₹800</td>
  </tr>

  <tr>
    <td>Rahul</td>
    <td>Cleaning</td>
    <td>
      <span className="completed">
        Completed
      </span>
    </td>
    <td>₹1200</td>
  </tr>

  <tr>
    <td>Kiran</td>
    <td>AC Repair</td>
    <td>
      <span className="confirmed">
        Confirmed
      </span>
    </td>
    <td>₹650</td>
  </tr>

</tbody>

            </table>

          </div>

          <div className="dashboard-right">

            <div className="dashboard-card">

              <h2>Revenue</h2>

              <div className="chart-placeholder">

                <div className="chart-circle">

                  <h1>₹4.8L</h1>

                  <p>This Month</p>

                </div>

              </div>

              <div className="revenue-stats">

                <div>

                  <h4>Today</h4>

                  <span>₹18K</span>

                </div>

                <div>

                  <h4>Weekly</h4>

                  <span>₹92K</span>

                </div>

              </div>

            </div>

            <div className="dashboard-card">

              <h2>Booking Status</h2>

              <div className="status-list">

                <div className="status-item">

                  <span>Completed</span>

                  <strong>498</strong>

                </div>

                <div className="status-item">

                  <span>Pending</span>

                  <strong>42</strong>

                </div>

                <div className="status-item">

                  <span>Cancelled</span>

                  <strong>22</strong>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="dashboard-bottom">

          <div className="dashboard-card">

            <h2>Latest Reviews</h2>

            <ul className="activity-list">

              <li>

                <strong>⭐⭐⭐⭐⭐</strong>

                <p>Excellent Electrician Service</p>

              </li>

              <li>

                <strong>⭐⭐⭐⭐</strong>

                <p>Fast Plumbing Service</p>

              </li>

              <li>

                <strong>⭐⭐⭐⭐⭐</strong>

                <p>Professional Cleaning</p>

              </li>

            </ul>

          </div>

          <div className="dashboard-card">

            <h2>Recent Complaints</h2>

            <ul className="activity-list">

              <li><p>Electrician arrived late</p></li>

              <li><p>Wrong billing amount</p></li>

              <li><p>AC service delayed</p></li>

            </ul>

          </div>

          <div className="dashboard-card">

            <h2>Quick Actions</h2>

            <div className="quick-actions">

              <button className="primary-btn">

                <FaPlus />

                Service

              </button>

              <button className="primary-btn">

                <FaUsers />

                User

              </button>

              <button className="primary-btn">

                <FaChartLine />

                Reports

              </button>

              <button className="primary-btn">

                <FaBell />

                Alerts

              </button>

            </div>

          </div>

        </div>

      </div>

    </AdminLayout>

  );

}

export default AdminDashboard;