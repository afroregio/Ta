const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db"); // Sequelize instance from db.js

const Podcast = sequelize.define("Podcast", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  host: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  audio_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
  },
});

module.exports = Podcast;
