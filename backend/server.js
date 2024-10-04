const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const patientAuth = require("./routes/patientAuth");
const doctorAuth = require("./routes/doctorAuth");

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB using environment variable
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.use("/api/patient", patientAuth);
app.use("/api/doctor", doctorAuth);

// Start the server using environment variable PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
