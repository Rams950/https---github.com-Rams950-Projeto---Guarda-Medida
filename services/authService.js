const jwt = require("jsonwebtoken");

// Função para gerar um token de acesso
function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
}

// Função para verificar e validar um token de acesso
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null)
    return res.status(401).json({ message: "Token de acesso não fornecido" });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err)
      return res.status(403).json({ message: "Token de acesso inválido" });
    req.user = user;
    next();
  });
}

module.exports = { generateAccessToken, authenticateToken };
