const {Sequelize} = require('sequelize');

const config = {
  host: 'localhost',
  dialect: 'postgres'
};

const sequelizeConnection = new Sequelize('topicdb', 'postgres', 'dbpassword', config);

module.exports = sequelizeConnection;