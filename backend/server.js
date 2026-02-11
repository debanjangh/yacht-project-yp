import "dotenv/config"; // MUST be first – loads .env before anything else

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

// Safety check (very important)
if (!process.env.RESEND_API_KEY) {
  console.error("❌ RESEND_API_KEY is missing");
}
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is missing");
}

// Database + Server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });