import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FaPlusCircle,
  FaCalendarCheck,
  FaUserTie,
  FaChartBar,
} from "react-icons/fa";

function QuickActions() {

  const navigate = useNavigate();

  return (

    <div className="quick-actions">

      <button
        onClick={() => navigate("/admin/services")}
      >
        <FaPlusCircle />
        Add Service
      </button>

      <button
        onClick={() => navigate("/admin/providers")}
      >
        <FaUserTie />
        Providers
      </button>

      <button
        onClick={() => navigate("/admin/bookings")}
      >
        <FaCalendarCheck />
        Bookings
      </button>

      <button
        onClick={() => navigate("/admin/reports")}
      >
        <FaChartBar />
        Reports
      </button>

    </div>

  );
}

export default QuickActions;