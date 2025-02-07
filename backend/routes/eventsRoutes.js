const express = require("express");
const router = express.Router();
const {
  getEvents,
  getEventById,
  createEvent,
} = require("../controllers/eventsController");

// Route for fetching all events
router.get("/", getEvents);

// Route for fetching a specific event by ID
router.get("/:id", getEventById);

// Route for creating a new event
router.post("/", createEvent);

module.exports = router;
