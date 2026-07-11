const Review = require("../models/Review");

// Add Review
const addReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);

    res.status(201).json({
      success: true,
      message: "Review Added Successfully",
      review,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Reviews
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: reviews.length,
      reviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Reviews By Service
const getServiceReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      serviceId: req.params.serviceId,
    });

    res.status(200).json({
      success: true,
      reviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Review
const deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Review Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addReview,
  getReviews,
  getServiceReviews,
  deleteReview,
};