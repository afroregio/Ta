const express = require("express");
const router = express.Router();
const {
  getPodcasts,
  getPodcastById,
  createPodcast,
} = require("../controllers/podcastsController");

// Route for fetching all podcasts
router.get("/", getPodcasts);

// Route for fetching a single podcast by ID
router.get("/:id", getPodcastById);

// Route for creating a new podcast
router.post("/", createPodcast);

module.exports = router;
