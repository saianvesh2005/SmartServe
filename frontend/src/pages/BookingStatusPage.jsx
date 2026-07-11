import React from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import BookingStatus from "../components/booking/BookingStatus";

function BookingStatusPage() {
  return (
    <DashboardLayout>
      <BookingStatus />
    </DashboardLayout>
  );
}

export default BookingStatusPage;