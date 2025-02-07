const { pool } = require("../utils/db");

// GET music search by genre
const searchByGenre = async (req, res) => {
  const { genre } = req.params;
  try {
    const result = await pool.query("SELECT * FROM songs WHERE genre = $1", [
      genre,
    ]);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

// GET search by keyword (e.g., title, artist)
const searchByKeyword = async (req, res) => {
  const { keyword } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM songs WHERE title ILIKE $1 OR artist ILIKE $1",
      [`%${keyword}%`]
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  searchByGenre,
  searchByKeyword,
};
