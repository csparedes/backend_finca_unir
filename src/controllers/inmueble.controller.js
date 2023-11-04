const InmuebleModel = require("../models/inmueble.model");

const getAllInmuebles = async (req, res) => {
  const inmuebles = await InmuebleModel.find();
  res.json(inmuebles);
};

const getInmuebleById = async (req, res) => {
  try {
    const { id } = req.params;
    const inmueble = await InmuebleModel.findById(id);
    res.json(inmueble);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postCreateInmueble = async (req, res) => {
  const inmueble = await InmuebleModel.create(req.body);
  res.json(inmueble);
};

const putUpdateInmueble = async (req, res) => {
  try {
    const { id } = req.params;
    await InmuebleModel.findByIdAndUpdate(id, req.body);
    res.json(await InmuebleModel.findById(id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteDestroyInmueble = async (req, res) => {
  try {
    const { id } = req.params;
    const inmueble = await InmuebleModel.findByIdAndDelete(id);
    res.json(inmueble);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllInmuebles,
  getInmuebleById,
  postCreateInmueble,
  putUpdateInmueble,
  deleteDestroyInmueble,
};
