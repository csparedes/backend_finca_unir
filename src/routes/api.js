const router = require("express").Router();

router.use("/inmuebles", require("./api/inmueble.api"));

module.exports = router;
