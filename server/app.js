require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require("./config/db");
const healthRoutes = require("./routes/healthRoutes");
const authRoutes = require("./routes/authRoutes");

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Database Connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("DeepScan AI Backend Running...");
});

// Error Handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;