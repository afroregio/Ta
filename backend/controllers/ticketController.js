const { pool } = require("../utils/db");

// GET all tickets
const getTickets = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tickets");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

// GET a single ticket by ID
const getTicketById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM tickets WHERE id = $1", [
      id,
    ]);
    if (result.rows.length === 0) {
      return res.status(404).send("Ticket not found");
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

// POST to purchase a ticket
const purchaseTicket = async (req, res) => {
  const { user_id, event_id, ticket_type, price, payment_method } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO tickets (user_id, event_id, ticket_type, price, payment_method) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [user_id, event_id, ticket_type, price, payment_method]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getTickets,
  getTicketById,
  purchaseTicket,
};
