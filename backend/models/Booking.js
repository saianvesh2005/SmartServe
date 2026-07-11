const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    // ===================================
    // Booking ID
    // ===================================
    bookingId: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    // ===================================
    // User
    // ===================================
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // ===================================
    // Provider
    // ===================================
    providerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    // ===================================
    // Service
    // ===================================
    serviceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },

    // ===================================
    // Customer Details
    // ===================================
    customerName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    // ===================================
    // Service Details
    // ===================================
    serviceName: {
      type: String,
      required: true,
    },

    servicePrice: {
      type: Number,
      required: true,
    },

    bookingDate: {
      type: String,
      required: true,
    },

    bookingTime: {
      type: String,
      required: true,
    },

    // ===================================
    // Dynamic Booking Data
    // Example:
    // TV -> Brand, Model
    // AC -> Capacity
    // Car -> Company
    // ===================================
    serviceDetails: {
      type: Object,
      default: {},
    },

    // ===================================
    // Payment
    // ===================================
    paymentMethod: {
      type: String,
      enum: [
        "Cash",
        "UPI",
        "Credit Card",
        "Debit Card",
        "Google Pay",
        "PhonePe",
        "Paytm",
      ],
      default: "Cash",
    },

    paymentStatus: {
      type: String,
      enum: [
        "Pending",
        "Paid",
        "Failed",
        "Refunded",
      ],
      default: "Pending",
    },

    // ===================================
    // Coupon
    // ===================================
    couponCode: {
      type: String,
      default: "",
    },

    discountAmount: {
      type: Number,
      default: 0,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    // ===================================
    // Booking Status
    // ===================================
    status: {
      type: String,
      enum: [
        "Pending",
        "Accepted",
        "Provider Assigned",
        "On The Way",
        "In Progress",
        "Completed",
        "Cancelled",
      ],
      default: "Pending",
    },

    // ===================================
    // Provider Notes
    // ===================================
    providerNotes: {
      type: String,
      default: "",
    },

    // ===================================
    // Admin Remarks
    // ===================================
    adminRemarks: {
      type: String,
      default: "",
    },

    // ===================================
    // Booking Timeline
    // ===================================
    timeline: [
      {
        status: String,
        message: String,
        updatedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    // ===================================
    // Invoice
    // ===================================
    invoiceGenerated: {
      type: Boolean,
      default: false,
    },

    invoiceNumber: {
      type: String,
      default: "",
    },

    // ===================================
    // Review
    // ===================================
    reviewSubmitted: {
      type: Boolean,
      default: false,
    },

    rating: {
      type: Number,
      default: 0,
    },

    // ===================================
    // Chat
    // ===================================
    chatEnabled: {
      type: Boolean,
      default: false,
    },

    // ===================================
    // Loyalty Rewards
    // ===================================
    rewardPoints: {
      type: Number,
      default: 0,
    },

    referralCodeUsed: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);