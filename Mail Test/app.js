const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const configMensaje = require("./configMensaje");

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server ready in http://localhost:${port} :D`);
});

app.post("/form", (req, res) => {
  configMensaje(req.body);
  res.status(200).send();
});