const express = require("express");
const router = express.Router();
const { getMusic, searchMusic } = require("../controllers/musicController");

// Route for fetching music
router.get("/", getMusic);

// Route for searching music
router.post("/search", searchMusic);

module.exports = router;
