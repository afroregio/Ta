const express = require("express");
const router = express.Router();
const {
  searchByGenre,
  searchByKeyword,
} = require("../controllers/searchController");

// Route to search by genre
router.get("/genre/:genre", searchByGenre);

// Route to search by keyword (title or artist)
router.get("/keyword/:keyword", searchByKeyword);

module.exports = router;
