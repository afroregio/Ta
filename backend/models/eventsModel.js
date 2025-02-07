const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db"); // Sequelize instance from db.js

const Event = sequelize.define("Event", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Event;
