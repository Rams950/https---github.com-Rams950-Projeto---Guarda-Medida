const Medida = require("../models/medida");

exports.createMedida = async (req, res) => {
  try {
    const medida = await Medida.create(req.body);
    res.status(201).json(medida);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllMedidas = async (req, res) => {
  try {
    const medidas = await Medida.findAll();
    res.json(medidas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getObterMedida = async (req, res) => {
  try {
    const medida = await Medida.findByPk(req.params.id);
    if (medida === null) {
      res.status(404).json({ message: "Medida não encontrada" });
    } else {
      res.json(medida);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.putAtulizarMedida = async (req, res) => {
  try {
    const medida = await Medida.findByPk(req.params.id);
    if (medida === null) {
      res.status(404).json({ message: "Medida não encontrada" });
    } else {
      await medida.update(req.body);
      res.json(medida);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.deleteMedia = async (req, res) => {
  try {
    const medida = await Medida.findByPk(req.params.id);
    if (medida === null) {
      res.status(404).json({ message: "Medida não encontrada" });
    } else {
      await medida.destroy();
      res.status(204).end();
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
