const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config();
const imagenRoutes = require("./routes/imagen")
const app = express();
const port = 8080;

app.use(cors({
  origin: "http://127.0.0.1:5173",
  credentials: true
}))
//middleware
app.use(express.json())
app.use("/imagenes", imagenRoutes)

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});
//conection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("conectado a mongodb atlas"))
  .catch((error) => console.log(error));
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
