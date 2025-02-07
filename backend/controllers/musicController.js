const { pool } = require("../utils/db");

// GET music data
const getMusic = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM music");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

// POST search query
const searchMusic = async (req, res) => {
  const { query } = req.body;
  try {
    const result = await pool.query(
      "SELECT * FROM music WHERE title ILIKE $1 OR artist ILIKE $1",
      [`%${query}%`]
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getMusic,
  searchMusic,
};
