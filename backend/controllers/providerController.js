const Provider = require("../models/Provider");

// Get All Providers
exports.getProviders = async (req, res) => {
  try {
    const providers = await Provider.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      providers,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Add Provider
exports.addProvider = async (req, res) => {
  try {
    const provider = await Provider.create(req.body);

    res.status(201).json({
      success: true,
      message: "Provider Added Successfully",
      provider,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get Provider By ID
exports.getProvider = async (req, res) => {
  try {
    const provider = await Provider.findById(req.params.id);

    if (!provider) {
      return res.status(404).json({
        success: false,
        message: "Provider not found",
      });
    }

    res.json({
      success: true,
      provider,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Update Provider
exports.updateProvider = async (req, res) => {
  try {
    const provider = await Provider.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json({
      success: true,
      message: "Provider Updated",
      provider,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Delete Provider
exports.deleteProvider = async (req, res) => {
  try {
    await Provider.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Provider Deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};