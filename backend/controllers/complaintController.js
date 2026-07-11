const Complaint = require("../models/Complaint");

// =========================================
// Create Complaint
// =========================================
const createComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create(req.body);

    res.status(201).json({
      success: true,
      message: "Complaint Submitted Successfully",
      complaint,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =========================================
// Get All Complaints
// =========================================
const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: complaints.length,
      complaints,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =========================================
// Get Complaint By ID
// =========================================
const getComplaintById = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint Not Found",
      });
    }

    res.status(200).json({
      success: true,
      complaint,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =========================================
// Update Complaint Status
// =========================================
const updateComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Complaint Updated Successfully",
      complaint,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =========================================
// Delete Complaint
// =========================================
const deleteComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndDelete(
      req.params.id
    );

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Complaint Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createComplaint,
  getAllComplaints,
  getComplaintById,
  updateComplaint,
  deleteComplaint,
};