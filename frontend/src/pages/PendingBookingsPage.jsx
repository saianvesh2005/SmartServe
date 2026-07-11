import React from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import PendingBookings from "../components/booking/PendingBookings";

function PendingBookingsPage() {
  return (
    <DashboardLayout>
      <PendingBookings />
    </DashboardLayout>
  );
}

export default PendingBookingsPage;