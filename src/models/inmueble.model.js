const { Schema, model } = require("mongoose");

const inmuebleSchema = new Schema(
  {
    piso: String,
    letra: String,
    extension: Number,
    numHabitaciones: Number,
    estaAlquilado: Boolean,
    propietario: String,
    emailContacto: String,
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "creadoEn",
      updatedAt: "actualizadoEn",
    },
    toJSON: {
      // virtuals: true,
    },
  }
);

module.exports = model("inmueble", inmuebleSchema);
