const Roupa = require("../models/roupa");

// Criar uma nova roupa
exports.createRoupa = async (req, res) => {
  try {
    const roupa = await Roupa.create(req.body);
    res.status(201).json(roupa);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Listar todas as roupas
exports.getAllRoupas = async (req, res) => {
  try {
    const roupas = await Roupa.findAll();
    res.json(roupas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// exports.gett = async (req, res) => {
//   try {
//     const roupa = await Roupa.findByPk(req.params.id);
//     if (roupa === null) {
//       res.status(404).json({ message: "Roupa não encontrada" });
//     } else {
//       res.json(roupa);
//     }
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

exports.AtualizarRoupa = async (req, res) => {
  try {
    const roupa = await Roupa.findByPk(req.params.id);
    if (roupa === null) {
      res.status(404).json({ message: "Roupa não encontrada" });
    } else {
      await roupa.update(req.body);
      res.json(roupa);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.eliminarRoupa = async (req, res) => {
  try {
    const roupa = await Roupa.findByPk(req.params.id);
    if (roupa === null) {
      res.status(404).json({ message: "Roupa não encontrada" });
    } else {
      await roupa.destroy();
      res.status(204).end();
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
