const http = require("node:http");
const app = require("./src/app");

require("dotenv").config();
require("./src/config/db.config");

const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port);

server.on("listening", () =>
  console.log(`Servidor escuchando en el puerto: ${port}`)
);
server.on("error", (err) => console.log("err :>> ", err));
