const { pool } = require("../utils/db");

// GET all events
const getEvents = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM events");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

// GET a single event by ID
const getEventById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM events WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).send("Event not found");
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

// POST to create a new event
const createEvent = async (req, res) => {
  const { name, date, location, description } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO events (name, date, location, description) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, date, location, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getEvents,
  getEventById,
  createEvent,
};
