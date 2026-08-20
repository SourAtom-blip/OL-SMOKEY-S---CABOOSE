import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import menuRoutes from "./routes/menu.js";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/menu", menuRoutes);
app.use("/api/contact", contactRoutes);

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/smokeys";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    app.listen(PORT, () => console.log(`Server running on port ${PORT} (no DB connection)`));
  });
