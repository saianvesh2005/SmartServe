const Notification = require("../models/Notification");

// =======================================
// Create Notification
// =======================================
const createNotification = async (req, res) => {
  try {
    const notification = await Notification.create(req.body);

    res.status(201).json({
      success: true,
      message: "Notification Created Successfully",
      notification,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================================
// Get All Notifications
// =======================================
const getNotifications = async (req, res) => {
  try {
    const { userId } = req.query;

    const notifications = await Notification.find({
      userId,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: notifications.length,
      notifications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================================
// Get Notification By ID
// =======================================
const getNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findById(
      req.params.id
    );

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: "Notification Not Found",
      });
    }

    res.status(200).json({
      success: true,
      notification,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================================
// Mark Notification As Read
// =======================================
const markNotificationRead = async (req, res) => {
  try {
    const notification =
      await Notification.findByIdAndUpdate(
        req.params.id,
        {
          isRead: true,
        },
        {
          new: true,
          runValidators: true,
        }
      );

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: "Notification Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Notification Marked As Read",
      notification,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================================
// Delete Notification
// =======================================
const deleteNotification = async (req, res) => {
  try {
    const notification =
      await Notification.findByIdAndDelete(
        req.params.id
      );

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: "Notification Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Notification Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createNotification,
  getNotifications,
  getNotificationById,
  markNotificationRead,
  deleteNotification,
};