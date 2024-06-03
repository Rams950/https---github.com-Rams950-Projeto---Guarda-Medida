const express = require("express");
const configureMiddleware = require("./config/middleware");
const usuarioRoutes = require("./routes/usuarioRoutes");
const medidaRoutes = require("./routes/medidaRoutes");
const roupaRoutes = require("./routes/roupaRoutes");
const sequelize = require("./util/database");

const app = express();
const PORT = process.env.PORT || 3000;

configureMiddleware(app);

// Rotas
app.use("/usuarios", usuarioRoutes);
app.use("/medidas", medidaRoutes);
app.use("/roupas", roupaRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Recurso não encontrado" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Ocorreu um erro interno no servidor" });
});

sequelize
  .sync()
  .then(() => {
    console.log("Tabelas sincronizadas com o banco de dados.");
    app.listen(PORT, () => {
      console.log(`Servidor iniciado na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao sincronizar tabelas:", error);
  });
