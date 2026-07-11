const express = require("express");
const router = express.Router();

const {
  createBooking,
  getMyBookings,
  getAllBookings,
  getBookingById,
  getBookingStats,
  getRecentBookings,
  updateBookingStatus,
  assignProvider,
  deleteBooking,
} = require("../controllers/bookingController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

// ================= USER =================

router.post("/", protect, createBooking);

router.get("/", protect, getMyBookings);

// ================= ADMIN =================

router.get("/admin/all", protect, adminOnly, getAllBookings);

router.get("/admin/stats", protect, adminOnly, getBookingStats);

router.get("/admin/recent", protect, adminOnly, getRecentBookings);

router.put("/:id/status", protect, adminOnly, updateBookingStatus);

router.put("/:id/provider", protect, adminOnly, assignProvider);

router.delete("/:id", protect, adminOnly, deleteBooking);

// ================= BOOKING BY ID =================

router.get("/:id", protect, getBookingById);

module.exports = router;