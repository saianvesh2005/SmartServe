import API from "./api";

/* ==========================================
   USER BOOKINGS
========================================== */

// Create Booking
export const createBooking = (data) => {
  return API.post("/bookings", data);
};

// Logged-in User Bookings
export const getMyBookings = () => {
  return API.get("/bookings");
};

// Get Single Booking
export const getBookingById = (id) => {
  return API.get(`/bookings/${id}`);
};

// ✅ Cancel Booking (User)
export const cancelBooking = (id) => {
  return API.put(`/bookings/cancel/${id}`);
};

/* ==========================================
   ADMIN BOOKINGS
========================================== */

// Get All Bookings
export const getAllBookings = () => {
  return API.get("/bookings/admin/all");
};

// Booking Statistics
export const getBookingStats = () => {
  return API.get("/bookings/admin/stats");
};

// Recent Bookings
export const getRecentBookings = () => {
  return API.get("/bookings/admin/recent");
};

// Update Booking Status
export const updateBookingStatus = (
  id,
  status,
  adminRemarks = ""
) => {
  return API.put(`/bookings/${id}/status`, {
    status,
    adminRemarks,
  });
};

// Assign Provider
export const assignProvider = (id, providerId) => {
  return API.put(`/bookings/${id}/provider`, {
    providerId,
  });
};

// Delete Booking
export const deleteBooking = (id) => {
  return API.delete(`/bookings/${id}`);
};

// Update Booking
export const updateBooking = (id, data) => {
  return API.put(`/bookings/${id}`, data);
};