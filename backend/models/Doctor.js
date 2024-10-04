const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add other doctor details as needed
});

module.exports = mongoose.model("Doctor", doctorSchema);
