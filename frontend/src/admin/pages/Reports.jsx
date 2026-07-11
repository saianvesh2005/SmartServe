import React, { useEffect, useState } from "react";
import {
  FaUsers,
  FaTools,
  FaCalendarCheck,
  FaRupeeSign,
  FaClipboardList,
  FaChartLine,
} from "react-icons/fa";

import AdminLayout from "../components/layout/AdminLayout";
import StatCard from "../components/cards/StatCard";

import { getAllUsers } from "../../services/userService";
import { getAllBookings } from "../../services/bookingService";
import { getAllServices } from "../../services/serviceService";

function Reports() {

  const [report, setReport] = useState({
    users: 0,
    services: 0,
    bookings: 0,
    completed: 0,
    pending: 0,
    revenue: 0,
  });

  useEffect(() => {
    loadReport();
  }, []);

  const loadReport = async () => {

    try {

      const usersRes = await getAllUsers();
      const bookingsRes = await getAllBookings();
      const servicesRes = await getAllServices();

      const users = usersRes.data.users || [];
      const bookings = bookingsRes.data.bookings || [];
      const services = servicesRes.data.services || [];

      const completed = bookings.filter(
        (b) => b.status === "Completed"
      );

      const pending = bookings.filter(
        (b) => b.status === "Pending"
      );

      const revenue = completed.reduce(
        (sum, item) => sum + Number(item.servicePrice || 0),
        0
      );

      setReport({
        users: users.length,
        services: services.length,
        bookings: bookings.length,
        completed: completed.length,
        pending: pending.length,
        revenue,
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <AdminLayout>

      <h2 style={{ marginBottom: "30px" }}>
        Reports & Analytics
      </h2>

      <div className="stats-grid">

        <StatCard
          title="Total Users"
          value={report.users}
          icon={<FaUsers />}
          color="#2563eb"
        />

        <StatCard
          title="Total Services"
          value={report.services}
          icon={<FaTools />}
          color="#16a34a"
        />

        <StatCard
          title="Total Bookings"
          value={report.bookings}
          icon={<FaCalendarCheck />}
          color="#f59e0b"
        />

        <StatCard
          title="Revenue"
          value={`₹${report.revenue}`}
          icon={<FaRupeeSign />}
          color="#22c55e"
        />

        <StatCard
          title="Completed"
          value={report.completed}
          icon={<FaChartLine />}
          color="#0ea5e9"
        />

        <StatCard
          title="Pending"
          value={report.pending}
          icon={<FaClipboardList />}
          color="#dc2626"
        />

      </div>

      <div
        className="dashboard-card"
        style={{ marginTop: "35px" }}
      >

        <h3>Business Summary</h3>

        <br />

        <p>
          👥 Total Users :
          <strong> {report.users}</strong>
        </p>

        <br />

        <p>
          🛠 Total Services :
          <strong> {report.services}</strong>
        </p>

        <br />

        <p>
          📅 Total Bookings :
          <strong> {report.bookings}</strong>
        </p>

        <br />

        <p>
          ✅ Completed Bookings :
          <strong> {report.completed}</strong>
        </p>

        <br />

        <p>
          ⏳ Pending Bookings :
          <strong> {report.pending}</strong>
        </p>

        <br />

        <p>
          💰 Total Revenue :
          <strong> ₹{report.revenue}</strong>
        </p>

      </div>

    </AdminLayout>

  );
}

export default Reports;