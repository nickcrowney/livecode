const sequelize = require('./index.model');
const {DataTypes} = require("sequelize");

const Topic = sequelize.define('Topic', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    score: {
    type: DataTypes.NUMBER,
    allowNull: false,
  }
})

module.exports = Topic;

