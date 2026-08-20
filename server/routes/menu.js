import { Router } from "express";
import MenuItem from "../models/MenuItem.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const items = await MenuItem.find().sort({ section: 1, order: 1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
});

export default router;
