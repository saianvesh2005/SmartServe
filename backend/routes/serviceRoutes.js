const express = require("express");
const router = express.Router();

const {
  getAllServices,
  getServiceById,
  getServiceBySlug,
  searchServices,
  createService,
  updateService,
  deleteService,
} = require("../controllers/serviceController");

// Uncomment these after implementing Admin Login
// const { protect, adminOnly } = require("../middleware/authMiddleware");

// ======================================
// PUBLIC ROUTES
// ======================================

// Get all services
router.get("/", getAllServices);

// Search services
router.get("/search", searchServices);

// Get service by slug
router.get("/slug/:slug", getServiceBySlug);

// Get service by ID
router.get("/:id", getServiceById);

// ======================================
// ADMIN ROUTES
// (Authentication temporarily disabled)
// ======================================

// Add service
router.post("/", createService);

// Update service
router.put("/:id", updateService);

// Delete service
router.delete("/:id", deleteService);

module.exports = router;