const express = require("express");

const router = express.Router();

const {
  addReview,
  getReviews,
  getServiceReviews,
  deleteReview,
} = require("../controllers/reviewController");

// Add Review
router.post("/", addReview);

// Get All Reviews
router.get("/", getReviews);

// Get Reviews Of One Service
router.get("/service/:serviceId", getServiceReviews);

// Delete Review
router.delete("/:id", deleteReview);

module.exports = router;