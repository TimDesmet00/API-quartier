const Event = require("../models/event.model");

const getAll = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOne = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const add = async (req, res) => {
  const newEvent = new Event(req.body);
  try {
    const event = await newEvent.save();
    res.status(201).json(event);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "il y a eux un problème lors de la creation de l'événement",
    });
  }
};

const edit = async (req, res) => {
  try {
    await Event.findByIdAndUpdate(req.params.id, req.body);
    console.log(req.body);
    res.status(200).json({ message: "événement modifié" });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "il y a eux un problème lors de la modification de l'événement",
    });
  }
};

const del = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "événement supprimé" });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "il y a eux un problème lors de la suppression de l'événement",
    });
  }
};
