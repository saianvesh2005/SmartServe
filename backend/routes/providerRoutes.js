const express = require("express");

const {
  getProviders,
  addProvider,
  getProvider,
  updateProvider,
  deleteProvider,
} = require("../controllers/providerController");

const router = express.Router();

router.get("/", getProviders);

router.post("/", addProvider);

router.get("/:id", getProvider);

router.put("/:id", updateProvider);

router.delete("/:id", deleteProvider);

module.exports = router;