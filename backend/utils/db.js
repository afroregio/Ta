const { Pool } = require("pg"); // or use mysql2 or sequelize based on your database
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

// Connect to the database
const connectDB = () => {
  pool
    .connect()
    .then(() => {
      console.log("Connected to the database!");
    })
    .catch((err) => {
      console.error("Error connecting to the database:", err.message);
      process.exit(1); // Stop the app if connection fails
    });
};

module.exports = { connectDB, pool };
