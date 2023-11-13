const InmuebleModel = require("../models/inmueble.model");

const checkId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const inmueble = await InmuebleModel.findById(id);
    if (!inmueble)
      return res.status(400).json({ error: "No existe el inmueble" });
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = { checkId };
