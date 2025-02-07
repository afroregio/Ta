const express = require("express");
const router = express.Router();
const radioController = require("../controllers/radioController");

// Define radio routes
router.get("/station", radioController.getRadioStation);
router.post("/start", radioController.startRadio);
router.post("/stop", radioController.stopRadio);
router.get("/now-playing", radioController.getNowPlaying);

module.exports = router;
