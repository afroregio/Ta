const express = require("express");
const router = express.Router();
const {
  getTickets,
  getTicketById,
  purchaseTicket,
} = require("../controllers/ticketsController");

// Route for fetching all tickets
router.get("/", getTickets);

// Route for fetching a single ticket by ID
router.get("/:id", getTicketById);

// Route for purchasing a ticket
router.post("/", purchaseTicket);

module.exports = router;
