const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

function configureMiddleware(app) {
  // Middleware para analisar corpos de solicitação JSON
  app.use(express.json());

  // Middleware para segurança básica do cabeçalho HTTP
  app.use(helmet());

  // Middleware para habilitar CORS (Cross-Origin Resource Sharing)
  app.use(cors());

  // Middleware para lidar com erros
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Ocorreu um erro interno no servidor" });
  });
}

module.exports = configureMiddleware;
