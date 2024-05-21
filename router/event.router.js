const express = require("express");
const router = express.Router();
const eventController = require("../controllers/event.controller");

// route utiliser dans l'index.js: /event

router.get("/getall", eventController.getAll);

router.get("/getone/:id", eventController.getOne);

router.post("/add", eventController.add);

router.put("/edit/:id", eventController.edit);

router.delete("/del/:id", eventController.del);
