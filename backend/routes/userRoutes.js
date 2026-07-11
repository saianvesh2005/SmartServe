const express = require("express");

const {
  getAllUsers,
  getUserProfile,
  updateUserProfile,
  deleteUser,
} = require("../controllers/userController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Admin
router.get("/", protect, adminOnly, getAllUsers);
router.delete("/:id", protect, adminOnly, deleteUser);

// Logged-in User
router.get("/profile/:id", protect, getUserProfile);
router.put("/profile/:id", protect, updateUserProfile);

module.exports = router;