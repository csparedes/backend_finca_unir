const router = require("express").Router();

const InmuebleController = require("../../controllers/inmueble.controller");

const { checkId } = require("../../middlewares/inmueble.middleware");

router.get("/", InmuebleController.getAllInmuebles);
router.get("/:id", checkId, InmuebleController.getInmuebleById);
router.post("/", InmuebleController.postCreateInmueble);
router.put("/:id", checkId, InmuebleController.putUpdateInmueble);
router.delete("/:id", checkId, InmuebleController.deleteDestroyInmueble);

module.exports = router;
