import React from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import TotalBookings from "../components/booking/TotalBookings";

function TotalBookingsPage() {
  return (
    <DashboardLayout>
      <TotalBookings />
    </DashboardLayout>
  );
}

export default TotalBookingsPage;