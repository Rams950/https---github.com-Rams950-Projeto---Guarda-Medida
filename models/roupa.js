const Sequelize = require("sequelize");
const conexaoDB = require("../util/database"); // Verifique se você está importando 'sequelize' corretamente

const Roupa = conexaoDB.define("Roupa", {
  tipo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tamanho: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // Outros atributos...
});

module.exports = Roupa;
