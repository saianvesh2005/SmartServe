const Booking = require("../models/Booking");
const generateBookingId = require("../utils/bookingIdGenerator");

// ======================================================
// Create Booking
// ======================================================

exports.createBooking = async (req, res) => {
  try {
    const bookingId = await generateBookingId();

    const booking = await Booking.create({
      bookingId,

      userId: req.user._id,

      providerId: null,

      serviceId: req.body.serviceId,

      customerName: req.user.name,

      email: req.user.email,

      phone: req.user.phone,

      address: req.body.address,

      serviceName: req.body.serviceName,

      servicePrice: req.body.servicePrice,

      bookingDate: req.body.bookingDate,

      bookingTime: req.body.bookingTime,

      serviceDetails: req.body.serviceDetails || {},

      paymentMethod: req.body.paymentMethod || "Cash",

      paymentStatus: req.body.paymentStatus || "Pending",

      couponCode: req.body.couponCode || "",

      discountAmount: req.body.discountAmount || 0,

      totalAmount:
        req.body.totalAmount || req.body.servicePrice,

      status: "Pending",

      timeline: [
        {
          status: "Pending",
          message: "Booking Created Successfully",
          updatedAt: new Date(),
        },
      ],
    });

    return res.status(201).json({
      success: true,
      message: "Booking Created Successfully",
      booking,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================================
// Get Logged-in User Bookings
// ======================================================

exports.getMyBookings = async (req, res) => {
  try {

    const bookings = await Booking.find({
      userId: req.user._id,
    })
      .sort({
        createdAt: -1,
      });

    return res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
// ======================================================
// Admin - Get All Bookings
// ======================================================

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("userId", "name email phone")
      .populate("providerId", "name email phone")
      .populate("serviceId", "name category price image")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================================
// Get Booking By ID (User/Admin)
// ======================================================

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("userId", "name email phone")
      .populate("providerId", "name email phone")
      .populate("serviceId");

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    // Only Admin can view every booking
    // User can view only their own booking

    if (
      req.user.role !== "admin" &&
      booking.userId._id.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message: "Access Denied",
      });
    }

    return res.status(200).json({
      success: true,
      booking,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================================
// Admin Dashboard Booking Statistics
// ======================================================

exports.getBookingStats = async (req, res) => {
  try {

    const totalBookings = await Booking.countDocuments();

    const pendingBookings = await Booking.countDocuments({
      status: "Pending",
    });

    const acceptedBookings = await Booking.countDocuments({
      status: "Accepted",
    });

    const completedBookings = await Booking.countDocuments({
      status: "Completed",
    });

    const cancelledBookings = await Booking.countDocuments({
      status: "Cancelled",
    });

    return res.status(200).json({
      success: true,
      stats: {
        totalBookings,
        pendingBookings,
        acceptedBookings,
        completedBookings,
        cancelledBookings,
      },
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
// ======================================================
// Admin - Update Booking Status
// ======================================================

exports.updateBookingStatus = async (req, res) => {
  try {
    const { status, adminRemarks } = req.body;

    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    booking.status = status;

    if (adminRemarks) {
      booking.adminRemarks = adminRemarks;
    }

    // Enable Chat after booking is accepted
    if (status === "Accepted") {
      booking.chatEnabled = true;
    }

    // Generate Invoice after completion
    if (status === "Completed") {
      booking.invoiceGenerated = true;

      booking.invoiceNumber =
        "INV-" +
        new Date().getFullYear() +
        "-" +
        Math.floor(100000 + Math.random() * 900000);
    }

    // Add Timeline
    booking.timeline.push({
      status,
      message: `Booking ${status} by Admin`,
      updatedAt: new Date(),
    });

    await booking.save();

    return res.status(200).json({
      success: true,
      message: `Booking ${status} Successfully`,
      booking,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================================================
// Admin - Assign Provider
// ======================================================

exports.assignProvider = async (req, res) => {
  try {

    const { providerId } = req.body;

    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    booking.providerId = providerId;

    booking.status = "Provider Assigned";

    booking.timeline.push({
      status: "Provider Assigned",
      message: "Provider assigned by Admin",
      updatedAt: new Date(),
    });

    await booking.save();

    return res.status(200).json({
      success: true,
      message: "Provider Assigned Successfully",
      booking,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
// ======================================================
// Delete Booking (Admin)
// ======================================================

exports.deleteBooking = async (req, res) => {
  try {

    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    await Booking.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================================================
// Admin - Recent Bookings
// ======================================================

exports.getRecentBookings = async (req, res) => {
  try {

    const bookings = await Booking.find()
      .populate("userId", "name email")
      .populate("serviceId", "name")
      .sort({ createdAt: -1 })
      .limit(10);

    return res.status(200).json({
      success: true,
      bookings,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================================================
// Future Modules
// ======================================================
//
// Notifications
// Provider Dashboard
// Invoice Generation
// Chat
// Rewards
//
// These modules will be connected in the next phases.
//