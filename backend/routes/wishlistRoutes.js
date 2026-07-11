const express = require("express");
const router = express.Router();

const {
  addToWishlist,
  getWishlist,
  getWishlistItem,
  removeWishlist,
  clearWishlist,
} = require("../controllers/wishlistController");

// ====================================
// Add Service to Wishlist
// POST: /api/wishlist
// ====================================
router.post("/", addToWishlist);

// ====================================
// Get User Wishlist
// GET: /api/wishlist?userId=xxxx
// ====================================
router.get("/", getWishlist);

// ====================================
// Get Wishlist Item By ID
// GET: /api/wishlist/:id
// ====================================
router.get("/:id", getWishlistItem);

// ====================================
// Remove Wishlist Item
// DELETE: /api/wishlist/:id
// ====================================
router.delete("/:id", removeWishlist);

// ====================================
// Clear Entire Wishlist
// DELETE: /api/wishlist/clear/:userId
// ====================================
router.delete("/clear/:userId", clearWishlist);

module.exports = router;