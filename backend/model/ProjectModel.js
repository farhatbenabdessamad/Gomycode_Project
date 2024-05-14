const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  closed: {
    type: Boolean,
    default: false
  },
  budget: {
    type: Number,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  period: {
    type: String,
    required: true
  },
  progress: {
    type: Number,
    default: 0
  },
  phases: {
    type: Array,
    default: []
  },
  evaluation: {
    type: Array,
    default: []
  },
  users: {
    type: []
  }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
