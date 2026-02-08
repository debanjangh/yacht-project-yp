const express = require("express");
const cors = require("cors");
require("dotenv").config();

const enquiryRoutes = require("./routes/enquiry.routes");

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());
app.use("/api/enquiry", enquiryRoutes);

module.exports = app;