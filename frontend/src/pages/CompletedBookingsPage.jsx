import React from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import CompletedBookings from "../components/booking/CompletedBookings";

function CompletedBookingsPage() {
  return (
    <DashboardLayout>
      <CompletedBookings />
    </DashboardLayout>
  );
}

export default CompletedBookingsPage;