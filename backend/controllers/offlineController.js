const { pool } = require("../utils/db");

// GET all offline songs for a user
const getOfflineMusic = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM offline_songs WHERE user_id = $1",
      [userId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

// POST to add offline music
const addOfflineMusic = async (req, res) => {
  const { userId, songId } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO offline_songs (user_id, song_id) VALUES ($1, $2) RETURNING *",
      [userId, songId]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getOfflineMusic,
  addOfflineMusic,
};
