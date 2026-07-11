const Wishlist = require("../models/Wishlist");

// =======================================
// Add Service to Wishlist
// =======================================
const addToWishlist = async (req, res) => {
  try {
    const {
      userId,
      serviceId,
      serviceName,
      category,
      price,
      image,
      description,
    } = req.body;

    const exists = await Wishlist.findOne({
      userId,
      serviceId,
    });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Service already exists in wishlist",
      });
    }

    const wishlist = await Wishlist.create({
      userId,
      serviceId,
      serviceName,
      category,
      price,
      image,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Added to Wishlist Successfully",
      wishlist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================================
// Get Wishlist
// =======================================
const getWishlist = async (req, res) => {
  try {
    const { userId } = req.query;

    const wishlist = await Wishlist.find({
      userId,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: wishlist.length,
      wishlist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================================
// Get Wishlist Item By ID
// =======================================
const getWishlistItem = async (req, res) => {
  try {
    const wishlist = await Wishlist.findById(
      req.params.id
    );

    if (!wishlist) {
      return res.status(404).json({
        success: false,
        message: "Wishlist Item Not Found",
      });
    }

    res.status(200).json({
      success: true,
      wishlist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================================
// Remove Wishlist Item
// =======================================
const removeWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findByIdAndDelete(
      req.params.id
    );

    if (!wishlist) {
      return res.status(404).json({
        success: false,
        message: "Wishlist Item Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Removed from Wishlist Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================================
// Clear Wishlist
// =======================================
const clearWishlist = async (req, res) => {
  try {
    const { userId } = req.params;

    await Wishlist.deleteMany({
      userId,
    });

    res.status(200).json({
      success: true,
      message: "Wishlist Cleared Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addToWishlist,
  getWishlist,
  getWishlistItem,
  removeWishlist,
  clearWishlist,
};