const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  eventname: {
    type: String,
    required: true,
  },
  eventCreator: {
    type: String,
    required: true,
  },
  eventdate: {
    type: Date,
    required: true,
  },
  eventlocation: {
    type: String,
    required: true,
  },
  eventdescription: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});
