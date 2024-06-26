const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// route utiliser dans l'index.js: /user

router.get("/getall", userController.getAll);

router.get("/getone/:id", userController.getOne);

router.post("/add", userController.add);

router.put("/edit/:id", userController.edit);

router.delete("/del/:id", userController.del);

router.post("/auth", userController.auth);

module.exports = router;
