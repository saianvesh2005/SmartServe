const express = require("express");
const router = express.Router();

const {
  createComplaint,
  getAllComplaints,
  getComplaintById,
  updateComplaint,
  deleteComplaint,
} = require("../controllers/complaintController");

// ====================================
// Create Complaint
// ====================================
router.post("/", createComplaint);

// ====================================
// Get All Complaints
// ====================================
router.get("/", getAllComplaints);

// ====================================
// Get Complaint By ID
// ====================================
router.get("/:id", getComplaintById);

// ====================================
// Update Complaint
// ====================================
router.put("/:id", updateComplaint);

// ====================================
// Delete Complaint
// ====================================
router.delete("/:id", deleteComplaint);

module.exports = router;