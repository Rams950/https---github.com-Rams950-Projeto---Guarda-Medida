const express = require("express");
const router = express.Router();

const roupas = require("../controllers/roupaController");

router.get("/", roupas.getAllRoupas);
router.post("/", roupas.createRoupa);
// router.get("/:id".roupas.gett);
router.put("/:id", roupas.AtualizarRoupa);
router.delete("/:id", roupas.eliminarRoupa);

module.exports = router;
