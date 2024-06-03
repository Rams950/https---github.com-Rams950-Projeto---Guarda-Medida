const Sequelize = require("sequelize");
const conexaoDB = require("../util/database"); // Verifique se você está importando 'sequelize' corretamente

const Usuario = conexaoDB.define("Usuario", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Usuario;
