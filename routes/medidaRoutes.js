const express = require("express");
const router = express.Router();
const mediaController = require("../controllers/medidaController");

router.get("/", mediaController.getAllMedidas);
router.post("/", mediaController.createMedida);
router.get("/:id", mediaController.getObterMedida);
router.put("/:id", mediaController.putAtulizarMedida);
router.delete("/:id", mediaController.deleteMedia);

module.exports = router;
