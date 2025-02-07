const { pool } = require("../utils/db");

// GET all podcasts
const getPodcasts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM podcasts");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

// GET a single podcast by ID
const getPodcastById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM podcasts WHERE id = $1", [
      id,
    ]);
    if (result.rows.length === 0) {
      return res.status(404).send("Podcast not found");
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

// POST create a new podcast
const createPodcast = async (req, res) => {
  const { title, description, host, audio_url, date } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO podcasts (title, description, host, audio_url, date) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [title, description, host, audio_url, date]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getPodcasts,
  getPodcastById,
  createPodcast,
};
