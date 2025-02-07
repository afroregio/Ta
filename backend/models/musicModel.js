const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db"); // Assume Sequelize instance is in db.js

const Music = sequelize.define("Music", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  artist: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
  },
  release_date: {
    type: DataTypes.DATE,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
  },
});

module.exports = Music;
