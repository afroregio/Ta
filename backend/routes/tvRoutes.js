const express = require("express");
const router = express.Router();
const {
  getTVPrograms,
  createTVProgram,
} = require("../controllers/tvController");

// Route to get TV programs
router.get("/", getTVPrograms);

// Route to create a new TV program
router.post("/create", createTVProgram);

module.exports = router;
