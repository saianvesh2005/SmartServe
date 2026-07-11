const express = require("express");

const router = express.Router();

const {
  createNotification,
  getNotifications,
  getNotificationById,
  markNotificationRead,
  deleteNotification,
} = require("../controllers/notificationController");

// ========================================
// Create Notification
// POST: /api/notifications
// ========================================
router.post("/", createNotification);

// ========================================
// Get All Notifications
// GET: /api/notifications?userId=xxxx
// ========================================
router.get("/", getNotifications);

// ========================================
// Get Notification By ID
// GET: /api/notifications/:id
// ========================================
router.get("/:id", getNotificationById);

// ========================================
// Mark Notification As Read
// PUT: /api/notifications/:id
// ========================================
router.put("/:id", markNotificationRead);

// ========================================
// Delete Notification
// DELETE: /api/notifications/:id
// ========================================
router.delete("/:id", deleteNotification);

module.exports = router;