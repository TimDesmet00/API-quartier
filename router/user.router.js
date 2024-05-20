const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/getall", (req, res) => {
  res.status(200).json({ message: "voici les utilisateurs" });
});

router.get("/getone/:id", (req, res) => {
  res.status(200).json({ message: "voici un utilisateur" });
});

router.post("/add", (req, res) => {
  res.status(200).json({ message: "utilisateur ajouté" });
});

router.put("/edit/:id", (req, res) => {
  res.status(200).json({ message: "utilisateur modifié" });
});

router.delete("/del/:id", (req, res) => {
  res.status(200).json({ message: "utilisateur supprimé" });
});

module.exports = router;
