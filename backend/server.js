const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const musicRoutes = require("./routes/musicRoutes");
const eventsRoutes = require("./routes/eventsRoutes");
const searchRoutes = require("./routes/searchRoutes");
const podcastsRoutes = require("./routes/podcastsRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const { connectDB } = require("./utils/db");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use("/api/music", musicRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/podcasts", podcastsRoutes);
app.use("/api/tickets", ticketRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const radioRoutes = require("./routes/radio");
app.use("/api/radio", radioRoutes);
