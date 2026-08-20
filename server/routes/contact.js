import { Router } from "express";
import ContactMessage from "../models/ContactMessage.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required" });
    }
    const saved = await ContactMessage.create({ name, email, phone, message });
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Failed to submit message" });
  }
});

export default router;
