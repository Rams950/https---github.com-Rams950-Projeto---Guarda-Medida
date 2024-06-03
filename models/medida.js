const Sequelize = require("sequelize");
const conexaoDB = require("../util/database");

const Medida = conexaoDB.define("Medida", {
  altura: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  peso: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Medida;
