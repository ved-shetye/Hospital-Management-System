const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctor");
const router = express.Router();

// Doctor signup route
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newDoctor = new Doctor({ email, password: hashedPassword });
    await newDoctor.save();
    res.json({ message: "Doctor created" });
  } catch (error) {
    res.status(500).json({ error: "Error creating doctor" });
  }
});

// Doctor login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const doctor = await Doctor.findOne({ email });

  if (!doctor) {
    return res.status(400).json({ error: "Doctor not found" });
  }

  const isMatch = await bcrypt.compare(password, doctor.password);
  if (!isMatch) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  // Sign the JWT using secret from env
  const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
});

module.exports = router;
