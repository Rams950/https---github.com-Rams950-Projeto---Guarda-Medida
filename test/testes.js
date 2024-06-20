process.env.NODE_ENV = "test";

const { sequelize } = require("../util/database");

beforeAll(async () => {
  try {
    await sequelize.sync({ force: true }); // Resetar o banco de dados antes dos testes
  } catch (err) {
    console.error("Erro ao sincronizar o banco de dados:", err);
  }
});

afterAll(async () => {
  await sequelize.close();
});
