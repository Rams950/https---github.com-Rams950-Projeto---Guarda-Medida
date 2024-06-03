const { Sequelize } = require("sequelize");
const envs = require("./config");

const meusequelize = new Sequelize(envs.DB, envs.USER, envs.PASSWORD, {
  host: envs.HOST,
  dialect: "postgres",
});

module.exports = meusequelize;
