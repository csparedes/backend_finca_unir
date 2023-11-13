const express = require("express");
const cors = require("cors");
const { logger } = require("./middlewares/logger.middleware");

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger)
app.use("/api", require("./routes/api"));

module.exports = app;
