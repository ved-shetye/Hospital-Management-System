const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  patientID: { type: String, unique: true },
  // Add other patient details as needed
});

module.exports = mongoose.model("Patient", patientSchema);
