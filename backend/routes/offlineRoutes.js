const express = require("express");
const router = express.Router();
const {
  getOfflineMusic,
  addOfflineMusic,
} = require("../controllers/offlineController");

// Route to get offline music for a user
router.get("/:userId", getOfflineMusic);

// Route to add offline music for a user
router.post("/add", addOfflineMusic);

module.exports = router;
