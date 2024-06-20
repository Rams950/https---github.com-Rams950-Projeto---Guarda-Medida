// seeders/20240603105439-demo-medidas.js
const { Medida } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Medida.bulkCreate([
      { altura: 1.8, peso: 75 },
      { altura: 1.75, peso: 70 },
      { altura: 1.85, peso: 80 },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await Medida.destroy({ where: {}, truncate: true });
  },
};
