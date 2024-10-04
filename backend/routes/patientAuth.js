const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Patient = require("../models/Patient");
const router = express.Router();

// Patient signup route
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newPatient = new Patient({ email, password: hashedPassword });
    await newPatient.save();
    res.json({ message: "Patient created" });
  } catch (error) {
    res.status(500).json({ error: "Error creating patient" });
  }
});

// Patient login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const patient = await Patient.findOne({ email });

  if (!patient) {
    return res.status(400).json({ error: "Patient not found" });
  }

  const isMatch = await bcrypt.compare(password, patient.password);
  if (!isMatch) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  // Sign the JWT using secret from env
  const token = jwt.sign({ id: patient._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
});

module.exports = router;
