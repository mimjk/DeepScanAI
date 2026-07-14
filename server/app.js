require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require("./config/db");

const healthRoutes = require("./routes/healthRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/health", healthRoutes);

app.get("/", (req, res) => {

    res.send("DeepScan AI Backend Running");

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server Running On Port ${PORT}`);

});