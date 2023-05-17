const express = require("express");
const imageinSchema = require("../models/imagen");
const router = express.Router();

//enviar imagen
router.post("/", (req, res) => {
  const imagen = imageinSchema(req.body);
  imagen
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => res.json({ message: error }));
});

//obtener imagen
router.get("/", (req, res) => {
  imageinSchema
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
