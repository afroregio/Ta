const axios = require("axios");

// Replace with your AzureCast API URL and API Key
const AZURECAST_API_URL = "http://your-azurecast-server/api";
const API_KEY = "your_api_key_here";

// Get radio station details
exports.getRadioStation = async (req, res) => {
  try {
    const response = await axios.get(
      `${AZURECAST_API_URL}/station/your-station-id/nowplaying`,
      {
        headers: { "X-API-Key": API_KEY },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch radio station details" });
  }
};

// Start the radio stream
exports.startRadio = async (req, res) => {
  try {
    const response = await axios.post(
      `${AZURECAST_API_URL}/station/your-station-id/restart`,
      {},
      {
        headers: { "X-API-Key": API_KEY },
      }
    );
    res.json({ message: "Radio started successfully", data: response.data });
  } catch (error) {
    res.status(500).json({ error: "Failed to start radio" });
  }
};

// Stop the radio stream
exports.stopRadio = async (req, res) => {
  try {
    const response = await axios.post(
      `${AZURECAST_API_URL}/station/your-station-id/stop`,
      {},
      {
        headers: { "X-API-Key": API_KEY },
      }
    );
    res.json({ message: "Radio stopped successfully", data: response.data });
  } catch (error) {
    res.status(500).json({ error: "Failed to stop radio" });
  }
};

// Get the current track playing
exports.getNowPlaying = async (req, res) => {
  try {
    const response = await axios.get(`${AZURECAST_API_URL}/nowplaying`, {
      headers: { "X-API-Key": API_KEY },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to get now playing" });
  }
};
