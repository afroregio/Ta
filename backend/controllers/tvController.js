const { pool } = require("../utils/db");

// GET all available TV programs
const getTVPrograms = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tv_programs");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

// POST to create a new TV program
const createTVProgram = async (req, res) => {
  const { title, description, schedule, channel } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO tv_programs (title, description, schedule, channel) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, description, schedule, channel]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getTVPrograms,
  createTVProgram,
};
